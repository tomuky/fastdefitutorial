import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const TryOptimism = () => {
    return (
        <>
            <TopicTitle title="Try Optimism" icon="optimism-logo.png"/>
            <TopicDescription>
                <p>Optimism is a Layer 2 on top of Ethereum, inheriting Ethereum security</p>
                <p>It zips up txs in bulk and uses <ExternalLink title='optimistic proofs' to='https://www.youtube.com/watch?t=263&v=7pWxCklcNsU&feature=emb_imp_woyt'/> to prove to Ethereum they are correct</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>You need ETH to pay for txs and your Optimism address is the same as your Ethereum address</Step>
                <Step n='2'>If you already have some ETH in your MetaMask wallet, you can simply use <InternalLink title='Hop' to='/bridge-with-hop' icon='hop-logo.png'/> to bridge to Optimism</Step>
                <Step n='3'>Or you could buy some ETH on <InternalLink title='Coinbase' to="/get-coinbase" icon='coinbase-logo.png'/>, and when sending your ETH out of Coinbase to your wallet, choose <InternalLink title='Optimism' to='/try-optimism' icon='optimism-logo.png'/> as the network to use</Step>
                <Step n='4'>Now you can try things like earning interest on <InternalLink title='Aave' to='/save-with-aave' icon='aave-logo.png'/> or earning bridge fees on <InternalLink title='Hop' to='/earn-on-hop' icon='hop-logo.png'/> or betting on sports with <InternalLink title='Overtime' to='/bet-with-overtime' icon='overtime-logo.png'/></Step>
            </TopicBody>
        </>
    )
}

export default TryOptimism;