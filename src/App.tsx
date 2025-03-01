import './App.css'
import FeatureSection from './components/FeatureSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import {DataProvider, useData} from "./context/DataContext.tsx";
import {useEffect} from "react";
import MapSection from "./components/MapSection.tsx";
import CalendarComponent from "./components/Calender.tsx";
import CardSlider from "./components/CardSection.tsx";
import Footer from "./components/Footer.tsx";
import ExperiencesComponent from "./components/ExperiencesSction.tsx";
import SocialMediaComponent from "./components/SocialMediaSection.tsx";
import Lastection from "./components/LastSection.tsx";

const AppContent = () => {
    const { data , fetchData } = useData();

    useEffect(() => {
        fetchData('fr');
    }, [fetchData]);

    return (
        <div className="min-h-screen">
            {data && <>
                <Header data={ data?.head_menu } fetchData={fetchData}/>
                <main>
                    <HeroSection data={ data?.banner_menu }/>
                    <FeatureSection data={ data?.bloc_1 }/>
                    <MapSection data={ data?.carte_point } bloc2={ data?.bloc_2 }/>
                    <CalendarComponent data={ data?.bloc_2_2 }/>
                    <CardSlider data={ data?.bloc_3 }/>
                    <ExperiencesComponent data={data?.bloc_4}/>
                    <SocialMediaComponent data={data?.bloc_5}/>
                    <Lastection data={data?.bloc_6}/>
                    <Footer data={ data?.footer }/>
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
