import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const SaveWithAave = () => {
    return (
        <>
            <TopicTitle title="Save with Aave" icon="aave-logo.png"/>
            <TopicDescription>
                <p>Aave is a borrowing and lending protocol</p>
                <p>Deposit assets to earn interest from borrowers</p>
                <p>Borrowers have to deposit collateral before borrowing</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Go to <ExternalLink title='app.aave.com' to='https://app.aave.com' icon='aave-logo.png'/> and select the Polygon market</Step>
                <Step n='2'>Click top right button to Connect Wallet, choose Browser Wallet</Step>
                <Step n='3'>Click Supply for USDC in left pane list of Assets to supply</Step>
                <Step n='4'>Type in amount to deposit</Step>
                <Step n='5'>Click Approve and confirm in MetaMask (one-time Approval per asset)</Step>
                <Step n='6'>Click Supply and confirm in MetaMask</Step>
                <Step n='7'>Done. Check <ExternalLink title='Zapper.xyz' to='https://zapper.xyz' icon='zapper-logo.png'/> to see your Aave deposit</Step>
            </TopicBody>
        </>
    )
}

export default SaveWithAave;