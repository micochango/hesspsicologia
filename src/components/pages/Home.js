import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection';


function Home(){
    return(
        <>
            <div className=".page__container" id="home">
                <HeroSection />
            </div>
        </>
    );
}

export default Home;