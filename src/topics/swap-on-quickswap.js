import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const SwapOnQuickswap = () => {
    return (
        <>
            <TopicTitle title="Swap on Quickswap" icon="quickswap-logo.png"/>
            <TopicDescription>
                <p>Quickswap is the leading decentralized exchange (DEX) on Polygon</p>
                <p>Swap between assets with near-zero transaction costs</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Go to <ExternalLink title='quickswap.exchange/swap' to='https://quickswap.exchange/#/swap?swapIndex=0&currency0=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&currency1=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619' icon='quickswap-logo.png'/></Step>
                <Step n='2'>Click Connect Wallet and choose MetaMask</Step>
                <Step type='indent'>Be sure to be on the Polygon network. If you aren't, it'll say Wrong Network. Click on Wrong Network to change networks, confirm in MetaMask</Step>
                <Step n='3'>Let's choose USDC as the From token and ETH as the To token</Step>
                <Step n='4'>Type in amount to swap, let's try $1</Step>
                <Step n='5'>Click to Approve token spending and confirm in MetaMask (one-time per asset)</Step>
                <Step n='6'>Click Swap and confirm in MetaMask</Step>
                <Step n='7'>Done. Once the tx goes through, you'll automatically have the ETH in your wallet</Step>
            </TopicBody>
        </>
    )
}

export default SwapOnQuickswap;