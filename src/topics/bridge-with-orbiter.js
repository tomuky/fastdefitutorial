import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const BridgeWithOrbiter = () => {
    return (
        <>
            <TopicTitle title="Bridge with Orbiter" icon="orbiter-logo.png"/>
            <TopicDescription>
                <p>Bridge between networks quickly and affordable</p>
                <p>You can bridge to Starknet from Ethereum, Optimism, Polygon, and others</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Go to <ExternalLink to='https://www.orbiter.finance/' title='orbiter.finance' icon='orbiter-logo.png'/></Step>
                <Step n='2'>Click to connect the Braavos wallet, and then click Connect in top-right to connect your <InternalLink to='/get-a-wallet' title='MetaMask' icon='metamask-logo.svg'/></Step>
                <Step type='indent'>Need to connect both your Braavos wallet and MetaMask wallet</Step>
                <Step n='3'>Choose ETH as the token, then choose the network to send from (where you might already have some ETH)</Step>
                <Step type="indent">You'll spend less on gas if sending from a layer 2 like Optimism and Polygon</Step>
                <Step n='4'>Enter amount of ETH to bridge, then click Send, confirm MetaMask prompts</Step>
                <Step n='5'>Done! Should take just a few minutes to complete.</Step>
            </TopicBody>
        </>
    )
}

export default BridgeWithOrbiter;