import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const SwapOnDefillama = () => {
    return (
        <>
            <TopicTitle title="Swap on DeFi Llama" icon="defillama-logo.png"/>
            <TopicDescription>
                <p>Hop is a bridge between chains like Ethereum, Polygon, and Optimism</p>
                <p>It makes sending tokens between networks quick, easy, and cheap</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Let's send some ETH from Polygon to Optimism (both are relatively cheap networks)</Step>
                <Step type='indent'>If you haven't yet, get started on <InternalLink title='Polygon' to='/try-polygon' icon='polygon-logo.png'/> first and then swap for some ETH on <InternalLink title='Quickswap' to='/swap-on-quickswap' icon='quickswap-logo.png'/></Step>
                <Step n='2'>Go to <ExternalLink title='app.hop.exchange/send' to='https://app.hop.exchange/#/send?sourceNetwork=polygon&destNetwork=optimism'/> and click Connect a Wallet</Step>
                <Step n='3'>Enter amount of ETH to bridge</Step>
                <Step n='4'>Click Approve and confirm in MetaMask (one-time thing), then click Send and confirm in MetaMask</Step>
                <Step n='5'>Done! Just wait until the ETH arrives in your wallet on the Optimism network</Step>
            </TopicBody>
        </>
    )
}

export default SwapOnDefillama;