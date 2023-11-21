import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';
import InternalLink from '../components/InternalLink';

const BorrowWithAave = () => {
    return (
        <>
            <TopicTitle title="Borrow with Aave" icon="aave-logo.png"/>
            <TopicDescription>
                <p>Aave is a borrowing and lending protocol</p>
                <p>Borrow tokens against your supplied collateral</p>
                <p>Your collateral can be liquidated if its value drops too much vs your debt</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Go to <ExternalLink title='app.aave.com' to='https://app.aave.com' icon='aave-logo.png'/> and connect your wallet in top right</Step>
                <Step n='2'><InternalLink title='Deposit some collateral' to='/save-with-aave'/> first if you haven't arleady</Step>
                <Step n='3'>Make sure your wallet is connected to the right network, for this we'll do Polygon</Step>
                <Step type='info'>Note the borrow APY (the cost to borrow) for assets in right column</Step>
                <Step n='4'>Choose an asset you'd like to borrow, let's try ETH, click Details</Step>
                <Step n='5'>Click Borrow, and type in an amount to borrow</Step>
                <Step type='info'>Typically safe to borrow half of your max amount allowed</Step>
                <Step type='info'>Note the Health Factor, above 2 is considered safe, clsoe to 1 is in danger</Step>
                <Step n='6'>Click Borrow and confirm txs to finish the process</Step>
                <Step n='7'>Done! Once the tx confirms, the asset is now in your wallet</Step>
                <Step n='8'>Check <ExternalLink title='Zapper.xyz' to='https://zapper.xyz' icon='zapper-logo.png'/> to see your Aave position</Step>
                <Step type='warning'>Monitor your Health Factor. If it drops, consider repaying the loan.</Step>
            </TopicBody>
        </>
    )
}

export default BorrowWithAave;