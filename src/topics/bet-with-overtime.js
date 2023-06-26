import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const BetWithOvertime = () => {
    return (
        <>
            <TopicTitle title="Bet with Overtime" icon="overtime-logo.png"/>
            <TopicDescription>
                <p>Overtime is a decentralised on-chain sports betting platform</p>
                <p>It is sports betting without the hassles and restrictions of traditional platforms</p>
                <p>You buy the token of an outcome. The prices of outcomes are the odds ($0.54 = 54%). If the outcome wins, the token becomes redeemable for $1, the others go to $0.</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Get some ETH and some USDC on the <InternalLink title='Optimism' to='/try-optimism' icon='optimism-logo.png'/> network</Step>
                <Step n='2'>Go to <ExternalLink title='overtimemarkets.xyz/#/markets' to='https://overtimemarkets.xyz/#/markets?referralId=0x5419c2900b238447848bfb16c6fab7c3c7143518' icon='overtime-logo.png'/> to see available markets</Step>
                <Step type='indent'>Just above the list of games, you can toggle between 3 different ways to show the odds. For this tutorial we will be using Normalized Implied Odds to easily know the price of 1 token for that outcome.</Step>
                <Step n='3'>Scroll or filter to find a game to bet on, and click it</Step>
                <Step n='4'>Next you'll see the outcomes you can bet on, with the Normalized Implied Odds, and helpful info when you hover</Step>
                <Step type='indent'>Example: 0.58 for Team 1 to win means you would pay $0.58 for 1 "Team 1 win" token that would be redeemable for $1.00 if Team 1 wins</Step>
                <Step n='5'>Click on an outcome to start the buying process</Step>
                <Step n='6'>You can use USDC, type in the amount you wish to wager, click buy, and confirm in Metamask</Step>
                <Step n='7'>If you win, come back to redeem your winnings on the <ExternalLink title='profile' to='https://overtimemarkets.xyz/#/profile'/> page. Good luck!</Step>
            </TopicBody>
        </>
    )
}

export default BetWithOvertime;