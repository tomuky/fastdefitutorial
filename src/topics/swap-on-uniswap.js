import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const BetWithOvertime = () => {
    return (
        <>
            <TopicTitle title="Swap on Uniswap" icon="uniswap-logo.png"/>
            <TopicDescription>
                <p>Uniswap is the original and most famous decentralized exchange</p>
                <p>Swap tokens directly from/to your wallet</p>
                <p>Uniswap is deployed on a few networks but is cheap to try on Optimism</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Get some ETH on the <InternalLink title='Optimism' to='/try-optimism' icon='optimism-logo.png'/> network</Step>
                <Step n='2'>Go to <ExternalLink title='app.uniswap.org' to='https://app.uniswap.org' icon='uniswap-logo.png'/> and click Connect to connect wallet</Step>
                <Step n='3'>Let's try swapping some ETH into WBTC</Step>
                <Step type='indent'>The 'W' in WBTC just means it's wrapped BTC and behaves just as BTC</Step>
                <Step n='4'>Choose ETH in first box, WBTC in 2nd, then type in amount, click swap, and confirm in MetaMask</Step>
                <Step n='5'>Done. Once the tx confirms on the network, you'll have the WBTC in your MetaMask wallet</Step>
            </TopicBody>
        </>
    )
}

export default BetWithOvertime;