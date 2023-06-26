import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const TryPolygon = () => {
    return (
        <>
            <TopicTitle title="Try Polygon" icon="polygon-logo.png"/>
            <div className={classes.description}>
                <p>Polygon is cheap to use, good for trying things</p>
                <p>Polygon offers scaling solutions on and around Ethereum</p>
            </div>
            <div className={classes.body}>
                <div className={classes.steps}>
                    <Step n='1'>Your Polygon wallet address is the same as your Ethereum wallet address</Step>
                    <Step n='2'>After setting up <InternalLink title='Coinbase' to='/get-coinbase' icon='coinbase-logo.png'/>, buy some <ExternalLink title='USDC' to='https://www.coinbase.com/price/usdc' icon='usdc-logo.png'/> (a stablecoin)</Step>
                    <Step n='3'>Once available to send off Coinbase, send USDC to your 0x00..00 address and choose to use the Polygon network</Step>
                    <Step n='4'>You can search for and view your address on <ExternalLink title='polygonscan.com' to='https://polygonscan.com' icon='polygon-logo.png'/> to confirm it worked</Step>
                    <Step n='5'>Select Polygon network in MetaMask network dropdown</Step>
                    <Step type='indent'>If Polygon is not an option yet, go to <ExternalLink title='zapper.xyz' to='https://zapper.xyz' icon='zapper-logo.png'/>, connect wallet, and click the network icon button in top-right to have Zapper prompt MetaMask to add the network for you</Step>
                    <Step n='6'>Use <ExternalLink title="Polygon's gas-free swap" to='https://wallet.polygon.technology/' icon='polygon-logo.png'/> to do a one-time swap from USDC to MATIC, which is needed to pay for txs</Step>
                    <Step type='indent'>Click Proof of Stake, click Swap, connect with MetaMask, then select Swap for Gas in left column to swap $1 USDC to 1 MATIC, which is enough to pay for many txs</Step>
                    <Step n='7'>Next let's deposit some USDC into <InternalLink title='Aave' to='/save-with-aave' icon='aave-logo.png'/></Step>
                 </div>
            </div>
        </>
    )
}

export default TryPolygon;