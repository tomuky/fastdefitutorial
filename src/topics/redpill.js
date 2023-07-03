import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';
import ExternalLink from '../components/ExternalLink';
import { Helmet } from 'react-helmet';

const Redpill = () => {
    return (
        <>
            <Helmet>
                <title>Red pill</title>
            </Helmet>
            <TopicTitle title="Take the red pill" icon="redpill-icon.png"/>
            <TopicDescription>
                <p>Material to help you go down the rabbit hole</p>
            </TopicDescription>
            <TopicBody>
                <Step>Read this article called <ExternalLink to='https://salomoncrypto.notion.site/0-Introduction-5e4227fec52d480f8048f4a454edb958' title='Inevitable Ethereum' icon='article-icon.png'/></Step>
                <Step>Listen to this episode of the Signal podcast called <ExternalLink to='https://open.spotify.com/episode/0MH4ZJVVAnVeEGMtj968fz' title='The Truth Machine' icon='podcast-icon.png'/> with Sergey Nazarov</Step>
                <Step>Watch this episode of Bankless called <ExternalLink to='https://www.youtube.com/watch?v=ln-DzXNfTGE&ab_channel=Bankless' title='Bull Case for Ethereum' icon='video-icon.png'/></Step>
            </TopicBody>
        </>
    )
}

export default Redpill;