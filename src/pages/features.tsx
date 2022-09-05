import LitepaperElement from "../components/litepaper/Litepaper";
import MiddleContent from "../components/middle-content/MiddleContent";
import Navbar from "../components/navbar/Navbar";
import Features from '../components/features/features'


const FeaturesPage = () =>{
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-content-container">
                    <Features/>
            </div>
        </div>
    )
}

export default FeaturesPage;