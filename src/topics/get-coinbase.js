import ExternalLink from '../components/ExternalLink';
import InternalLink from '../components/InternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const GetCoinbase = () => {
    return (
        <>
            <TopicTitle title="Get Coinbase" icon="coinbase-logo.png"/>
            <div className={classes.description}>
                <p>The most trusted and most widely used platform for buying crypto with your bank account</p>
            </div>
            <div className={classes.body}>
                <div className={classes.steps}>
                    <Step n='1'>Sign up for a <ExternalLink title='Coinbase.com' to='https://www.coinbase.com/join/davis_95' icon='coinbase-logo.png'/> account</Step>
                    <Step n='2'>Connect your checking account</Step>
                    <Step n='3'>Buy some <ExternalLink title='USDC' to='https://www.coinbase.com/price/usdc' icon='usdc-logo.png'/> (maybe $20 worth to try stuff)</Step>
                    <Step type='indent'>USDC is a stablecoin, redeemable 1:1 for dollars</Step>
                    <Step n='4'>Send your USDC to your wallet address over the <InternalLink title='Polygon' to='/try-polygon' icon='polygon-logo.png'/> network</Step>
                </div>
            </div>
        </>
    )
}

export default GetCoinbase;