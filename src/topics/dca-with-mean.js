import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const DCAWithMean = () => {
    return (
        <>
            <TopicTitle title="DCA with Mean" icon="mean-logo.png"/>
            <TopicDescription>
                <p>Avoid the impossible task of timing the market by getting an average price over time</p>
                <p>DCA means Dollar Cost Average - buying the same dollar amount of an asset every day/week no matter the price</p>
                <p>Price goes up, your buys buy less. Price goes down, your buys buy more.</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Buy at least 100 USDC (for buying ETH later with) on <InternalLink to='/get-coinbase' title='Coinbase' icon='coinbase-logo.png'/> and withdraw it to your wallet on the <InternalLink to='/try-optimism' title='Optimism' icon='optimism-logo.png'/> network</Step>
                <Step type='indent'>Mean Finance is deployed on multiple networks so you could use Polygon or others</Step>
                <Step type='indent'>Be sure to have some ETH already there in your wallet on Optimism</Step>
                <Step n='2'>Go to <ExternalLink to='https://mean.finance/create' title='mean.finance/create' icon='mean-logo.png'/> to create a new DCA position</Step>
                <Step n='3'>Choose Optimism in dropdown, and then click Connect Wallet from top right</Step>
                <Step n='4'>Select USDC to Sell and ETH to Buy</Step>
                <Step n='5'>Type in total amount of USDC to use in this position</Step>
                <Step n='6'>Choose daily or weekly and then for how many times, I'd suggest to do weekly for 10 weeks, then click Continue</Step>
                <Step n='7'>If you'd like to earn yield on your assets while they are idle in the DCA position, click to enable and choose Aave as the platform</Step>
                <Step n='8'>Click Approve to allow USDC spending on Mean Finance, then click Create position, confirm Metamask prompts</Step>
                <Step type='indent'>If the Approve button takes awhile to change to Create after the transaction has been confirmed, refresh the page</Step>
                <Step n='9'>Done! Now go to <ExternalLink to='https://mean.finance/positions' title='mean.finance/positions' icon='mean-logo.png'/> to see all the details about the position</Step>
                <Step type='info'>See on-chain analytics about Mean on <ExternalLink to='https://dune.com/murathan/mean-finance' title='Dune.com' icon='dune-logo.png'/></Step>
            </TopicBody>
        </>
    )
}

export default DCAWithMean;