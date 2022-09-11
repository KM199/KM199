import React, { useEffect } from 'react';
import ReactRotatingText from 'react-rotating-text';

const MiddleContent = () => {

    return (
        <div id="writing">
            <div id="writing-container">
                <div id="writing-title">
                    <h1>Your personal "<div className="effect">friend</div> that does{' '}
                    <span className="txt-rotate">
                    <ReactRotatingText
                        items={['Crypto".', 'web3".', `NFTs".`, `DeFi".`, `GameFi".`]}
                        />
                        </span></h1>
                </div>
                <div id="action-button">
                <button id="action-button1" onClick = {() => window.open('https://chrome.google.com/webstore/detail/hulio/olikokhekcibedhfkhbkmphgmopigibb')}>
                        <div className="buttonTitle">Download</div>
                    </button>
                    <button id="action-button2" onClick = {() => window.open('https://twitter.com/hulioapp')}>
                        <div className="buttonTitle">Twitter</div>
                    </button>
                </div>
                <div id="writing-paragraph">
                    <p className="paragraph-content">Learn your way around the ecosystem, stay safe, and even earn free Solana with ease. hulio helps activate passive crypto holders to become active web3 users. Whether a newcomer or veteran, hulio will enhance your adventures in the world of
                        crypto!</p>
                </div>
                <div id="vanity-metrics">
                    <div id="vanity1">
                        <h1>30+</h1>
                        <div className="vanity-writing">
                            Solana Partners
                        </div>
                    </div>
                    <div id="vanity2">
                        <h1>10,000+</h1>
                        <div className="vanity-writing">
                            Downloads
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default MiddleContent;