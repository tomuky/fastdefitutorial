import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const EarnWithHop = () => {
    return (
        <>
            <TopicTitle title="Earn on Hop" icon="hop-logo.png"/>
            <TopicDescription>
                <p>Hop is a bridge between chains like Ethereum, Polygon, and Optimism</p>
                <p>Provide liquidity to the bridge and earn fees from bridgers</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Let's try providing liquidity for ETH to Hop's Polygon bridge</Step>
                <Step type='indent'>If you haven't yet, get started on <InternalLink title='Polygon' to='/try-polygon' icon='polygon-logo.png'/> first and then swap for some ETH on <InternalLink title='Quickswap' to='/swap-on-quickswap' icon='quickswap-logo.png'/></Step>
                <Step n='2'>Go to <ExternalLink title='app.hop.exchange/pool' to='https://app.hop.exchange/#/pools?token=ETH'/> and click Connect a Wallet</Step>
                <Step n='3'>Click the ETH Polygon Pool</Step>
                <Step n='4'>Type in amount of WETH to add to pool, ignore hETH</Step>
                <Step type='indent'>The 'W' in WETH just means the token is wrapped, behaves as ETH</Step>
                <Step n='5'>Click on Preview, then Deposit + Stake</Step>
                <Step n='6'>Complete the list of transactions it shows</Step>
                <Step type='indent'>When/if MetaMask asks to set a spending cap for your WETH, choose max</Step>
                <Step n='7'>Done! You are now earning the fees people pay to bridge, plus HOP token incentives</Step>
                <Step n='8'>View your deposits on the <ExternalLink title='Pool' to='https://app.hop.exchange/#/pools'/> page and on <InternalLink title='Zapper.xyz' to='/track-your-portfolio' icon='zapper-logo.png'/></Step>
            </TopicBody>
        </>
    )
}

export default EarnWithHop;