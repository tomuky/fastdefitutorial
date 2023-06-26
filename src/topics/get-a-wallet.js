import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const GetWallet = () => {
    return (
        <>
            <TopicTitle title="Get a wallet" icon="metamask-logo.svg"/>
            <div className={classes.description}>
                <p>The most popular wallet to use with DeFi is MetaMask</p>
                <p>Download the app on your phone and the browser extension</p>
            </div>
            <div className={classes.body}>
                <div className={classes.steps}>
                    <Step n='1'>Download <ExternalLink title='MetaMask' to='https://metamask.io/download/' icon='metamask-logo.svg'/> on your phone</Step>
                    <Step n='2'>Choose Create a new wallet</Step>
                    <Step n='3'>Follow on-screen instructions, <i>write down seed phrase on paper</i></Step>
                    <Step n='4'>Download <ExternalLink title='MetaMask' to='https://metamask.io/download/' icon='metamask-logo.svg'/> extension for Chrome browser</Step>
                    <Step n='5'>Choose restore wallet from seed phrase (the one you wrote down)</Step>
                    <Step n='6'>To get your public address, touch/click the "0x000...0000" in MetaMask</Step>
                    <Step n='7'>Go to <ExternalLink title='etherscan.io' to='https://etherscan.io' icon='etherscan-logo.png'/> or <ExternalLink title='polygonscan.com' to='https://polygonscan.com' icon='polygon-logo.png'/> and paste in your address to view it on a block explorer</Step>
                </div>
            </div>
        </>
    )
}

export default GetWallet;