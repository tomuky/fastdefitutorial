import ExternalLink from '../components/ExternalLink';
import InternalLink from '../components/InternalLink';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const Welcome = () => {
    return (
        <>
            <TopicTitle title="Hello" icon="welcome-logo.png"/>
            <div className={classes.description}>
                <p>DeFi is finance using the blockchain.</p>
                <p>Try it out with these easy steps.</p>
                <p><InternalLink title='Start here' to='/first' icon='first-logo.png'/></p>
            </div>
        </>
    )
}

export default Welcome;