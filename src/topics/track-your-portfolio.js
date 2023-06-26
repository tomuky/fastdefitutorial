import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const TrackWithZapper = () => {
    return (
        <>
            <TopicTitle title="Track your portfolio" icon="zapper-logo.png"/>
            <div className={classes.description}>
                <p>Zapper is the most popular way to track your DeFi portfolio</p>
            </div>
            <div className={classes.body}>
                <div className={classes.steps}>
                    <Step n='1'>Go to <ExternalLink title='zapper.xyz' to='https://zapper.xyz' icon='zapper-logo.png'/></Step>
                    <Step n='2'>Click Connect Wallet and choose MetaMask</Step>
                    <Step n='3'>Zapper will read in all your balances and positions from the blockchain</Step>
                    <Step n='4'>You can even perform some DeFi transactions all within the Zapper interface</Step>
                </div>
            </div>
        </>
    )
}

export default TrackWithZapper;