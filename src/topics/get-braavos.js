import ExternalLink from '../components/ExternalLink';
import InternalLink from '../components/InternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const GetBraavos = () => {
    return (
        <>
            <TopicTitle title="Get Braavos" icon="braavos-logo.png"/>
            <div className={classes.description}>
                <p>Braavos is one of the best wallets for using Starknet</p>
                <p>Use your same Starknet address in both Chrome extension and mobile app</p>
            </div>
            <div className={classes.body}>
                <div className={classes.steps}>
                    <Step n='1'>Go to <ExternalLink title="braavos.app" to="https://braavos.app/" icon="braavos-logo.png"/>, click Download, and choose your browser</Step>
                    <Step n='2'>Click on the Braavos extention after downloading, choose Create a New Wallet, follow steps</Step>
                    <Step type='indent'>Be sure to write down your seed phrase on paper and keep it in a safe place</Step>
                    <Step n='3'>Choose Starknet Mainnet Alpha as your network</Step>
                    <Step n='4'>Deposit some ETH, so let's use <InternalLink title='Orbiter' to='/bridge-with-orbiter' icon='orbiter-logo.png'/> to bridge</Step>
                    <Step n='5'>After depositing some ETH to Braavos, click the button in Braavos to finish setting up your new account</Step>
                    <Step n='6'>Now you're ready to try stuff, like swapping on <InternalLink to='/swap-on-avnu' title='AVNU' icon='avnu-logo.png'/></Step>
                </div>
            </div>
        </>
    )
}

export default GetBraavos;