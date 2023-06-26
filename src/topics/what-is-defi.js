import InternalLink from '../components/InternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const WhatIsDeFi = () => {
    return (
        <>
            <TopicTitle title="What is DeFi" icon="question-icon.png"/>
            <div className={classes.description}>
                <p>Decentralized finance is the idea of financial instruments without the need for trusted intermediaries</p>
            </div>
            <div className={classes.body}>
                <div className={classes.steps}>
                    <Step>Financial products and services built using verifiable immutable code</Step>
                    <Step>Most DeFi is on and around the Ethereum blockchain</Step>
                    <Step>No intermediaries or middle-men</Step>
                    <Step>Available to anyone in the world with an internet connection</Step>
                    <Step>No permission necessary to use. 24/7 365.</Step>
                    <Step>There are some things <InternalLink title='you should know' to='/must-knows' icon='important-icon.png'/> before starting</Step>
                </div>
            </div>
        </>
    )
}

export default WhatIsDeFi;