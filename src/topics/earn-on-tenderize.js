import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const EarnOnTenderize = () => {
    return (
        <>
            <TopicTitle title="Earn on Tenderize" icon="tenderize-logo.png"/>
            <TopicDescription>
                <p>Tenderize offers liquid staking of MATIC, GRT or LPT</p>
                <p>Deposit a token and get another one in return that represents your deposit</p>
                <p>Now you can potentially do more in DeFi with this receipt token</p>
            </TopicDescription>
            <TopicBody>
                <Step type='warning'>Tenderize is currently only on Arbitrum's test network for testing out, so you'll have to wait until they announce they're on Arbitrum mainnet to try with real tokens</Step>
                <Step n='1'>Go to <ExternalLink title="tenderize.me" to="https://cooking.tenderize.me/" icon="tenderize-logo.png"/> and click Connect Wallet</Step>
                <Step n='2'>If you're not prompted to switch to the <ExternalLink title="Arbitrum" to="try-arbitrum" icon="arbitrum-logo.png"/> network, click on Wrong Network in top right to switch</Step>
                <Step n='3'>We will try staking Livepeer tokens (LPT), so first we need to get LPT tokens</Step>
                <Step type='info'>Livepeer is a decentralized video infrastructure network. Here's a <ExternalLink title='quick primer' to='https://livepeer.org/primer'/></Step>
                <Step type='info'>Swap for some using <ExternalLink title="app.uniswap.org/swap" to="https://app.uniswap.org/swap?chain=arbitrum" icon="uniswap-logo.png"/></Step>
                <Step n='4'>Once you own some LPT, click on Livepeer in left pane and find an orchestrator in list</Step>
                <Step type="info">Preferrebly you simply choose one with high APY and decent TVL</Step>
                <Step n='5'>Type in desired amount to stake, then click Stake, and confirm txs</Step>
                <Step n='6'>Done! Rewards automatically accumulate. See your balance at top of page.</Step>
                <Step n='7'>To unstake, click Unstake. There may be a cooling period where you have to wait.</Step>
                <Step type='bonus'>Staking through Tenderize may earn you additional rewards from Tenderize</Step>
            </TopicBody>
        </>
    )
}

export default EarnOnTenderize;