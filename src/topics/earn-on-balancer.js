import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const EarnOnBalancer = () => {
    return (
        <>
            <TopicTitle title="Earn on Balancer" icon="balancer-logo.png"/>
            <TopicDescription>
                <p>Provide liquidty to asset pairs and earn fees from swaps</p>
                <p>Balancer has dynamic weights where pools can be 80/20 or 33/33/33 etc</p>
                <p>Important to know about <ExternalLink title='impermanent loss' to='https://finematics.com/impermanent-loss-explained/'/> which <i>could negate profits</i></p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Go to <ExternalLink title='app.balancer.fi/polygon' to='https://app.balancer.fi/#/polygon/' icon='balancer-logo.png'/>, click Connect Wallet, and be sure you're on the Polygon network</Step>
                <Step n='2'>A fun pool to try is the <ExternalLink title='WBTC/USDC/WETH pool' to='https://app.balancer.fi/#/polygon/pool/0x03cd191f589d12b0582a99808cf19851e468e6b500010000000000000000000a'/></Step>
                <Step type='indent'>The 'W' in WBTC and WETH just means the token is wrapped, behaves as BTC and ETH</Step>
                <Step type='indent'>A 33/33/33 pool like this automatically maintains 33% exposure to bitcoin, 33% to UDSC stablecoin, and 33% to ETH while you earn fees from others swapping between assets</Step>
                <Step n='3'>Click on Add Liquidity and type in amount of USDC to add</Step>
                <Step type='indent'>You could just add USDC and it'll spread it between the 3 for you</Step>
                <Step n='4'>Click Preview, click to Approve (one-time), then click to Add Liquidity</Step>
                <Step n='5'>Go to the <ExternalLink title='Portfolio' to='https://app.balancer.fi/#/polygon/portfolio'/> page to see your deposit</Step>
                <Step type='bonus'>Bonus: In some cases there are additional incentives for pools where you need to Stake your position to earn the additional rewards. You can do this on the <ExternalLink title='Portfolio' to='https://app.balancer.fi/#/polygon/portfolio'/> page.</Step>
            </TopicBody>
        </>
    )
}

export default EarnOnBalancer;