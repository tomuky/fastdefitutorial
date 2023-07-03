import { Outlet } from 'react-router-dom';
import classes from '../style/Main.module.css';
import MainNavigation from './MainNavigation';
import MobileHeader from '../components/MobileHeader';
import { Helmet } from 'react-helmet';

let RootLayout = () => {
    return (
        <div className={classes.layout}>
            <Helmet>
                <title>Fast DeFi Tutorial</title>
                <meta name="description" content="The fastest DeFi tutorial on Earth"/>
                <meta name="author" content="tomuky"/>
                <meta name="keywords" content="DeFi, crypto, ETH, Ethereum, BTC, Bitcoin, Tutorial, money, blockchain, decentralized, finance"/>

                <meta property="og:url" content="https://fastdefitutorial.com" />
                <meta property="og:title" content="Fast DeFi Tutorial" />
                <meta property="og:description" content="The fastest DeFi tutorial on Earth" />
                {/* <meta property="og:image" content={require(`../images/bolt-fb2.png`)}/> */}
                <meta property="og:image" content={require(`../images/fast-tw2.png`)}/>

                <meta name="twitter:title" content="Fast DeFi Tutorial"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@tomuky"/>
                <meta name="twitter:creator" content="@tomuky"/>
                <meta name="twitter:description" content="The fastest DeFi tutorial on Earth" />
                {/* <meta name="twitter:image" content={require(`../images/bolt-tw.png`)}/> */}
                <meta name="twitter:image" content={require(`../images/fast-tw2.png`)}/>
            </Helmet>
            <MainNavigation/>
            <MobileHeader/>
            <div className={classes.main}>
                <div className={classes.viewer}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default RootLayout;