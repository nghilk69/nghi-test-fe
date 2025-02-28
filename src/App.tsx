import './App.css'
import FeatureSection from './components/FeatureSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import {DataProvider, useData} from "./context/DataContext.tsx";
import {useEffect} from "react";
import MapSection from "./components/MapSection.tsx";

const AppContent = () => {
    const { data , error, fetching, fetchData } = useData();

    useEffect(() => {
        fetchData('fr');
    }, [fetchData]);

    return (
        <div className="min-h-screen">
            {data && <>
                <Header data={ data?.head_menu }/>
                <main>
                    <HeroSection data={ data?.banner_menu }/>
                    <FeatureSection data={ data?.bloc_1 }/>
                    <MapSection data={ data?.carte_point } bloc2={ data?.bloc_2 }/>
                </main>
            </>}

        </div>
    )
}


function App() {

    return (
        <DataProvider>
            <AppContent/>
        </DataProvider>
  )
}

export default App
