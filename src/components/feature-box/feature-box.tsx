import { Link } from "react-router-dom";
import './feature-box.css' 

const FeatureBox = (props : any) => {
    var title = props.title;
    var paragraph = props.paragraph;
    return (
        <div className="feature-box">
            <div className = "feature-box-content">
            <h1 className = "feature-box-title">{title}</h1>
            <p className = "feature-box-paragraph">{paragraph}</p>
            </div>
        </div>
    )
}

export default FeatureBox;