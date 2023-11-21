import InternalLink from '../components/InternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const TryStarknet = () => {
    return (
        <>
            <TopicTitle title="Try Starknet" icon="starknet-logo.png"/>
            <TopicDescription>
                <p>Starknet is a Validity Rollup Layer 2 on Ethereum.</p>
                <p>Starknet uses STARK proofs to zip up txs in bulk to Ethereum.</p>
                <p>Different than other rollups because it's not "EVM compatible"</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Download the <InternalLink to='/get-braavos' title='Braavos Wallet' icon='braavos-logo.png'/> to use Starknet</Step>
                <Step n='2'>Bridge some ETH from another network into Starknet with <InternalLink to='/bridge-with-orbiter' title='Orbiter' icon='orbiter-logo.png'/></Step>
                <Step n='3'>After Braavos is set up, you're ready to try stuff, like swapping on <InternalLink to='/swap-on-avnu' title='AVNU' icon='avnu-logo.png'/> or earning fees on <InternalLink to='/earn-on-jediswap' title='JediSwap' icon='jediswap-logo.png'/></Step>
                <Step type='info'>Starknet is still in alpha stage so it can be risky</Step>
                <Step type='info'>Sometimes wallet upgrades are required, in which case you will see a button show up inside your wallet</Step>
            </TopicBody>
        </>
    )
}

export default TryStarknet;