import HomePage from "../components/home-page/HomePage";
import MiddleContent from "../components/middle-content/MiddleContent";
import Navbar from "../components/navbar/Navbar";
import React from 'react';


const Home = () =>{
        return(
        <div className="home-container">
            <Navbar />
            <div className="home-content-container">
                    <MiddleContent />
            </div>
        </div>
    )
}

export default Home;