import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const StakeWithRocketpool = () => {
    return (
        <>
            <TopicTitle title="Stake with Rocketpool" icon="rocketpool-logo.png"/>
            <TopicDescription>
                <p>Rocketpool is a great way to stake ETH while helping Ethereum's decentralization</p>
                <p>Two options: be a node operator or simply hold some rETH tokens</p>
                <p>rETH is staked ETH and accrues value automatically</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>If you are interested in setting up hardware to operate a Rocketpool node, you can find more info about it on <ExternalLink to='https://rocketpool.net/node-operators' title='Rocketpool.net/node-operators' icon='rocketpool-logo.png'/></Step>
                <Step n='2'>Otherwise, most people will simply provide some ETH to support the protocol</Step>
                <Step type='indent'>Your ETH will be used by a decentralized network of node operators that pass on the yield to rETH holders</Step>
                <Step n='3'>Cheapest way to get rETH is to swap for some on Uniswap on the Optimism network</Step>
                <Step n='4'>Go to <ExternalLink to='https://app.uniswap.org/#/swap?inputCurrency=0x4200000000000000000000000000000000000006&outputCurrency=0x9bcef72be871e61ed4fbbc7630889bee758eb81d' title='app.uniswap.org' icon='uniswap-logo.png'/> and click to connect your wallet and make sure you're on the <InternalLink to='/try-optimism' title='Optimism' icon='optimism-logo.png'/> network</Step>
                <Step type='indent'>Buy ETH on <InternalLink to='/get-coinbase' title='Coinbase' icon='coinbase-logo.png'/> and withdraw to Optimism, or bridge ETH to Optimism using <InternalLink to='/bridge-with-hop' title='Hop' icon='hop-logo.png'/></Step>
                <Step n='5'>Choose ETH as 1st asset and rETH as 2nd, type in any amount</Step>
                <Step n='6'>Click Swap and confirm in Metamask</Step>
                <Step n='7'>Done! Simply holding rETH you are earning yield and contributing to Rocketpool's network of node operators</Step>
            </TopicBody>
        </>
    )
}

export default StakeWithRocketpool;