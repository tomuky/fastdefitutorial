import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const EarnWithSynthetix = () => {
    return (
        <>
            <TopicTitle title="Earn on Synthetix" icon="synthetix-logo.png"/>
            <TopicDescription>
                <p>Synthetix provides liquidity for permissionless derivatives.</p>
                <p>Stake SNX to earn fees and rewards.</p>
                <p>To learn more read the <ExternalLink title="basics of staking" to='https://blog.synthetix.io/basics-of-staking-snx-2022/' icon='read-icon.png'/></p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>You need SNX on <InternalLink title='Optimism' to='/try-optimism' icon='optimism-logo.png'/>, swap for some on <InternalLink title='Uniswap' to='/swap-on-uniswap' icon='uniswap-logo.png'/> or borrow some on <InternalLink title='Aave' to='/borrow-with-aave' icon='aave-logo.png'/></Step>
                <Step type='info'>Borrowing SNX keeps you safe from SNX price movements, but you pay a small borrow APY</Step>
                <Step n='2'>Go to <ExternalLink to='https://staking.synthetix.io/' icon='synthetix-logo.png' title='app.synthetix.io'/> and click Connect Wallet in top right</Step>
                <Step type='info'>Make sure you're connected to the <InternalLink title='Optimism' to='/try-optimism' icon='optimism-logo.png'/> network in your wallet</Step>
                <Step n='3'>Click on Start Staking, click 100% (C-Ratio 500%), and then click Mint</Step>
                <Step type='info'>Keep your C-Ratio (collateralization ratio) near 500% to earn SNX rewards</Step>
                <Step n='4'>You will recieve the sUSD stablecoin in your wallet, this is your active debt</Step>
                <Step type='caution'>Important to understand your share of the <ExternalLink title="global debt pool" to='https://blog.synthetix.io/basics-of-staking-snx-2022/' icon='read-icon.png'/></Step>
                <Step n='5'>To best manage your debt, we will swap your sUSD to dSNX on <InternalLink title='toros.finance' to='https://toros.finance/vault/0x59babc14dd73761e38e5bda171b2298dc14da92d' icon='toros-logo.png'/></Step>
                <Step n='6'>Go to <InternalLink title='toros.finance' to='https://toros.finance/vault/0x59babc14dd73761e38e5bda171b2298dc14da92d' icon='toros-logo.png'/>, connect wallet, and buy dSNX with all your sUSD</Step>
                <Step n='7'>Done. Holding dSNX helps you hedge your debt responsibility</Step>
                <Step type="info">If your C-Ratio falls below 500%, swap some dSNX back to sUSD and use it to repay your debt</Step>
                <Step n='8'>Collete SNX rewards every Wednesday afternoon <ExternalLink title='here' to='https://staking.synthetix.io/'/></Step>
                <Step n='9'>You also earn protocol fees, which automatically pays down your debt</Step>
                <Step n='10'>Check <ExternalLink title='Zapper.xyz' to='https://zapper.xyz' icon='zapper-logo.png'/> to see your Synthetix position</Step>
            </TopicBody>
        </>
    )
}

export default EarnWithSynthetix;