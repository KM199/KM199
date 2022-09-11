import React from 'react';
import FeatureBox from '../feature-box/feature-box';

const Features = () => {
    return (
        <div className = "features-container" id="writing">
            <h1 id = "features-title">Features</h1>
            <div id = "features-box">
            <FeatureBox title = "Tutorials" paragraph = "We provide users with in-browser tutorials for dApps in the Solana ecosystem. Our guides explain what the dApps do, how they work, and walk users through practice exercises using real dApps."></FeatureBox>
            <FeatureBox title = "Safety" paragraph = "Avoid scams with our anti-phishing security popups. We verify each visited website with our decentralized database and on-chain verification."></FeatureBox>
            <FeatureBox title = "Earn Crypto" paragraph = "We provide users with free Solana when engaging in tutorials, allowing them to interact with dApps without having to buy crypto or owning any prior."></FeatureBox>
            </div>
        </div>
    )
}

export default Features;