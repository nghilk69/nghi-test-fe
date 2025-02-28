import React, {createContext, useState, useContext, useCallback, ReactNode} from "react";

const DataContext = createContext<DataContextType | undefined>(undefined);

interface Case {
    category: string;
    tagline: string;
    description: string;
    cta: string;
}
export interface Bloc {
    title: string;
    description: string;
    subtitle: string;
    cases: Case[];
}

interface Data {
    bloc_1: Bloc;
    bloc_2: Bloc;
    carte_point: any;
    banner_menu: any;
    head_menu: any;
}

interface DataContextType {
    data: Data | null;
    fetching: boolean;
    error: string | null;
    fetchData: (value: string) => Promise<void>;
}

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const [fetching, setFetching] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const fetchData = useCallback(async (value: string) => {
      setFetching(true);
      setError(null);
      try {
          const response = await fetch('https://api.test.soa-dev.net/api/v1/pages?lang=en');
          console.log('response>>>', response);
          if (!response.ok) throw  new Error('Failed to fetch data');
          const result = await response.json();
          setData(result[0]);
          console.log('result>>>', result);
          setFetching(false);
          setError(null);
      } catch (error) {
          setError(error);
          setFetching(false);
      }

  }, []);

  return (
    <DataContext.Provider value={{ data, fetchData, fetching, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}
