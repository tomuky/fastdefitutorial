import InternalLink from '../components/InternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const MustKnows = () => {
    return (
        <>
            <TopicTitle title="The must-knows" icon="important-icon.png"/>
            <div className={classes.description}>
                <p>These are the things you must know before you get started</p>
            </div>
            <div className={classes.body}>
                <div className={classes.steps}>
                    <Step>Always try things with small amounts of money before using larger amounts</Step>
                    <Step>You need ether (ETH) to pay for gas to transact on the Ethereum network</Step>
                    <Step>Be aware that transactions on Ethereum can be expensive when the network is busy, so trying things on a "layer 2" like <InternalLink title='Optimism' to='/try-optimism' icon='optimism-logo.png'/> is more economical</Step>
                    <Step>Never share your seed phrase with anyone, or store it on your phone or computer. Write it down on physical paper!</Step>
                    <Step>Only send ether (ETH) to an Ethereum address, bitcoin to a Bitcoin addresses, etc</Step>
                    <Step>However, you can send and receive tokens (ERC-20's) with an Ethereum address since they are programmed on the Ethereum network</Step>
                    <Step>Now let's <InternalLink title='try something' to='/first' icon='first-logo.png'/></Step>
                </div>
            </div>
        </>
    )
}

export default MustKnows;