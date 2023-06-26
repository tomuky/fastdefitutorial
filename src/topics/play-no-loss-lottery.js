import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const PlayNoLossLottery = () => {
    return (
        <>
            <TopicTitle title="Play a no-loss lottery" icon="pooltogether-logo.png"/>
            <TopicDescription>
                <p>Deposit into a pool and win all the interest accrued on the entire pool</p>
                <p>You never lose your deposit, withdraw it anytime</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Go to <ExternalLink title='app.pooltogether.com/deposit' to='https://app.pooltogether.com/deposit' icon='pooltogether-logo.png'/>, click Connect Wallet, and choose MetaMask</Step>
                <Step n='2'>Be sure to be on the Polygon network</Step>
                <Step n='3'>Click on Deposit to Win, and choose the "Lowest Network Fees" deposit option</Step>
                <Step n='4'>Type in the amount of USDC you wish to deposit and click Review deposit</Step>
                <Step n='5'>Click to Approve, confirm in MetaMask, then click to Deposit, confirm in MetaMask</Step>
                <Step n='6'>You can view your deposit on the <ExternalLink title='Account' to='https://app.pooltogether.com/account'/> page</Step>
                <Step n='7'>Check the <ExternalLink title='Prizes' to='https://app.pooltogether.com/prizes'/> page daily (or every few days) to see if you've won!</Step>
            </TopicBody>
        </>
    )
}

export default PlayNoLossLottery;