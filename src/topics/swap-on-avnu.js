import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';
import InternalLink from '../components/InternalLink';

const SwapOnAvnu = () => {
    return (
        <>
            <TopicTitle title="Swap on Avnu" icon="avnu-logo.png"/>
            <TopicDescription>
                <p>AVNU finds you the best price for your swap on Starknet</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Go to <ExternalLink to='https://app.avnu.fi/' title='app.avnu.fi' icon='avnu-logo.png'/> and connect your <InternalLink to='/get-braavos' title='Braavos wallet' icon='braavos-logo.png'/></Step>
                <Step n='2'>Choose the token you wish to swap from and the token you wish to swap into</Step>
                <Step n='3'>Click Swap and confirm the Braavos wallet prompt</Step>
                <Step n='4'>Done! AVNU finds you the best price for that swap.</Step>
            </TopicBody>
        </>
    )
}

export default SwapOnAvnu;