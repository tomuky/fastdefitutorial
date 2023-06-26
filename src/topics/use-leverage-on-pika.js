import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const LeverageTradeOnPika = () => {
    return (
        <>
            <TopicTitle title="Leverage Trade on Pika" icon="pika-logo.png"/>
            <TopicDescription>
                <p>Trade crypo with up to 100x leverage</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>step</Step>
            </TopicBody>
        </>
    )
}

export default LeverageTradeOnPika;