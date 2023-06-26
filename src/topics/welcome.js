import ExternalLink from '../components/ExternalLink';
import InternalLink from '../components/InternalLink';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const Welcome = () => {
    return (
        <>
            <TopicTitle title="Hello" icon="welcome-logo.png"/>
            <div className={classes.description}>
                <p>This is Fast DeFi Tutorial.</p>
                <p>DeFi is finance using the blockchain.</p>
                <p>Easy. Straight to the point. Step by step.</p>
                <p>Questions? Reach out on <ExternalLink title='Twitter' to='https://twitter.com/tomuky' icon='twitter-logo.png'/></p>
                <p><InternalLink title='Start here' to='/first' icon='first-logo.png'/></p>
            </div>
        </>
    )
}

export default Welcome;