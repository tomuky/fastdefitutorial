import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const TradeOptionsOnLyra = () => {
    return (
        <>
            <TopicTitle title="Trade Options on Lyra" icon="lyra-logo.png"/>
            <TopicDescription>
                <p>Uniswap is the original and most famous decentralized exchange</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>step</Step>
            </TopicBody>
        </>
    )
}

export default TradeOptionsOnLyra;