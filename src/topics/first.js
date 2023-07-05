import InternalLink from '../components/InternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const First = () => {
    return (
        <>
            <TopicTitle title="First thing to try" icon="first-logo.png"/>
            <div className={classes.description}>
                <p>Starting from step zero?</p>
                <p>Here's what you should try first.</p>
            </div>
            <div className={classes.body}>
                <div className={classes.steps}>
                    <Step n='1'>Know the <InternalLink title='must-knows' to='/must-knows' icon='important-icon.png'/></Step>
                    <Step n='2'>Set up a <InternalLink title='MetaMask' to='/get-a-wallet' icon='metamask-logo.svg'/> wallet</Step>
                    <Step n='3'>Buy $20 of USDC on <InternalLink title='Coinbase' to='/get-coinbase' icon='coinbase-logo.png'/></Step>
                    <Step n='4'>Send the USDC to your MetaMask over <InternalLink title='Polygon network' to='/try-polygon' icon='polygon-logo.png'/></Step>
                    <Step n='5'>Deposit $5 USDC into <InternalLink title='Aave' to='/save-with-aave' icon='aave-logo.png'/> to earn interest</Step>
                    <Step n='6'>Track deposit using <InternalLink title='Zapper' to='/track-your-portfolio' icon='zapper-logo.png'/></Step>
                </div>
            </div>
        </>
    )
}

export default First;