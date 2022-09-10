import '../../styles/styles.css' 


const Litepaper = () => {
    return (
        <div className="litepaper-container" id = "writing">
            <h1 id = "litepaper-title">Litepaper</h1>
            <div className="scroll">
                <p style={{ color: 'white' }}><h3>hulio.app Litepaper</h3>
                    <br />
                    Our goal is to make sure the next “1B+ crypto users” are not just passive holders, but engaged, educated, and active web3 community members. We plan to accomplish this through increasing security for web3 users and providing a on chain “Coinbase Earn” type program for teaching users about the Solana dApp ecosystem. These two features will lower the barrier to entry for passive holders and help enable them to become active web3 users.
                    <br />
                    <br />
                    <h3>How it Works</h3>
                    <br />
                    <h3>Security</h3>
                    One of the biggest problems facing crypto users is the issue of security. Phishing links, “copycat” websites, and hacks are common dangers web3 community members face. We help combat these through our website verification process. Our team collects lists of known reputable projects and known scams, then displays the website’s “trust status” when a user visits it. For trusted websites, we display a transaction on the blockchain signed by our or the project’s dev team verifying that the URL being visited is the one associated with the official project’s smart contract.
                    <br />
                    <br />
                    <h3>Tutorials</h3>
                    Holding crypto is only half of the fun. Many new users aren’t aware that dApps and other projects on Solana exist, much less know how to use them. We want to change that. hulio offers in-browser interactive tutorials for some of the biggest projects on Solana, walking users through how to use each application step by step. During the tutorial, users are awarded Solana (and in the future native token for the project as well), providing incentive and the ability to interact with the blockchain without having to have owned crypto prior. We’re constantly adding tutorials, educating new users and helping early stage projects gain informed and engaged traction.
                    <br />
                    <br />
                    <h3>Discover</h3>
                    Since we verify each web3 website a user visits, we can follow where Solana community traffic is being directed. This allows us to find the best new projects before anyone else. After a security check, we display these budding new projects on our “explore” page, exposing users to the newest frontier of the ecosystem.
                    <br />
                    <br />
                    <h3>Demo Video</h3>
                    <br />
                    https://youtu.be/Dq0MKkCk99s
                    <br />
                    <br />
                    <h3>Installation of hulio Video</h3>
                    <br />
                    https://youtu.be/TOdbDQ44sC4
                    <br />
                    <br />
                    <h3>How We Built hulio and Future Plans</h3>
                    <br />
                    hulio is currently comprised of the website, the chrome extension, and a simple express postgresql backend hosted on heroku. The file structure can be seen below:
                    <br />
                    Current technical design can be vastly improved as we outline our plans for doing so below, however how the extension currently works is --
                    <br />
                    <br />
                    <h3>Welcome Page</h3>
                    <br />
                    After the user installs the extension they are directed to a welcome page where they are able to learn about the extension and then proceed to the dApp explore page.
                    <br />
                    <br />
                    <h3>Explore Page</h3>
                    <br />
                    The Hulio explore page provides users with a curated list of dApps that have interactive tutorials. Users are able to complete tutorials and learn about dApp functionality for a reward. The hulio explore page is a great way for new web3 users to get an idea of what dApps are out there and what problems they solve.
                    <br />
                    <br />
                    <h3>Interactive Tutorial</h3>
                    <br />
                    The benefit to being a web extension is that hulio is able to overlay the tutorial directly on the dApp that the user is learning about. This is done by a series of popups that the extension has hard-coded through a series of divs getting appended to the website. After the tutorial is complete and the user has shown proficiency with the dApp, the user is automatically rewarded / airdropped tokens. Currently this is handled by the heroku backend utilizing solana web3js.
                    <br />
                    <br />
                    <h3>Website Safety</h3>
                    <br />
                    The hulio extension provides users with safety suggestions whenever they land on a web3 enabled website based on if the website is in our database. Currently our web3 detection script can be improved, however it operates by checking website html for any mentions of web3 keywords such as 'connect wallet'. If the detection scripts triggers, then it is checked again our postgresql database through the express backend and if not found, the user is warned that the website has not yet been verified, and they have to verify the website URL in order to continue. We do this in an effort to prevent users from landing on phishing websites or risky dApps.
                    <br />
                    <br />
                    <h3>Settings</h3>
                    <br />
                    <br />
                    <h3>Extension settings currently include:</h3>
                    <br />

                    toggling on / off website safety recommendations
                    <br />
                    toggling on / off tutorials
                    <br />
                    advanced settings to view backend information and user specific data such as their personal trusted website list
                    <br />
                    <br />
                    <h3>Future Plans</h3>
                    <br />
                    Our current backend infrastructure is not quite production ready. Improvements include:
                    <br />
                    improving the web3 detection script
                    <br />
                    transitioning website components to react
                    <br />
                    cleaning up and streamlining safety popup code
                    <br />
                    improving backend security
                    <br />
                    adding additional database columns
                    <br />
                    expanding the dapp explore page
                    <br />
                    building tutorials for and supporting additional dapps
                    <br />
                    more coming soon...</p>
            </div>
            <div className="infoButtons"><button id="action-button1" onClick = {() => window.open('https://docs.google.com/presentation/d/1voLaGQ93hmkyzcT5xl4rcQb-_wgRvSuW7KEf2tH71cE/edit?usp=sharing')}>Deck</button> <button id="action-button2" onClick = {() => window.open('https://youtu.be/Dq0MKkCk99s')}>Video</button></div>
        </div>
    )
}

export default Litepaper;