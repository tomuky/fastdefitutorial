import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const LeverageOnKwenta = () => {
    return (
        <>
            <TopicTitle title="Leverage on Kwenta" icon="kwenta-logo.png"/>
            <TopicDescription>
                <p>Trade synthetic perpetuals with up to 50x leverage</p>
                <p>What are perpetuals? Learn more <ExternalLink title='here' to='https://docs.kwenta.io/using-kwenta/perpetual-futures' icon='read-icon.png'/></p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Go to <ExternalLink title='kwenta.eth.limo' to='https://kwenta.eth.limo/market/?accountType=smart_margin&asset=sETH' icon='kwenta-logo.png'/></Step>
            </TopicBody>
        </>
    )
}

export default LeverageOnKwenta;