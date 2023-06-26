import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const TryEthereum = () => {
    return (
        <>
            <TopicTitle title="Try Ethereum" icon="ethereum-logo.png"/>
            <TopicDescription>
                <p>Ethereum can be expensive to use because its block space is prime real estate</p>
                <p>Better to try things on layer 2's like <InternalLink to='/try-optimism' title='Optimism' icon='optimism-logo.png'/> or <InternalLink to='/try-polygon' title='Polygon' icon='polygon-logo.png'/></p>
                <p>Some things are only available on mainnet</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Check <ExternalLink to='https://www.blocknative.com/gas-estimator' title='gas prices'/> before using Ethereum layer 1</Step>
                <Step n='2'>If gas (base fee) is above 40 then it could be too expensive to do transactions with small amounts, in which case you should stick to trying things on layer 2's</Step>
                <Step n='3'>Otherise, consider trying something like registering your .eth username on <InternalLink to='/get-ens' title='ENS' icon='ens-logo.png'/></Step>
            </TopicBody>
        </>
    )
}

export default TryEthereum;