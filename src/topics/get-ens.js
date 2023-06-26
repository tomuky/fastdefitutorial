import InternalLink from '../components/InternalLink';
import ExternalLink from '../components/ExternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import TopicBody from '../components/TopicBody';
import TopicDescription from '../components/TopicDescription';

const GetENS = () => {
    return (
        <>
            <TopicTitle title="Get .eth name" icon="ens-logo.png"/>
            <TopicDescription>
                <p>Register a human readable address like yourname.eth to map to your ugly long wallet address</p>
                <p>Your .eth name is perceived as your username for web3/crypto</p>
                <p>Consider privacy when choosing a name</p>
            </TopicDescription>
            <TopicBody>
                <Step n='1'>Have some ETH on Ethereum in your <InternalLink go='/get-a-wallet' title='Metamask' icon='metamask-logo.svg'/> wallet</Step> 
                <Step n='2'>Go to <ExternalLink to='https://app.ens.domains/' title='app.ens.domains' icon='ens-logo.png'/> and connect your wallet</Step>
                <Step n='3'>Search for a name you like, and if it's available, click it</Step>
                <Step n='4'>Register for 1 year, choose Ethereum as payment method</Step>
                <Step n='5'>Check the box to link this new .eth name to your current address, click Next</Step>
                <Step n='6'>Now you have the option to fill out more of your ENS profile, or click Skip</Step>
                <Step type='indent'>You can map many things to your .eth name like a profile picture, twitter account, personal website, along with crypto addresses for other assets like Bitcoin and Doge</Step>
                <Step n='7'>Follow the on-screen instructions to finally register your .eth on Ethereum</Step>
                <Step n='8'>Done! You now have your own .eth name to use around web3/crypto</Step>
                <Step type='bonus'>Mapping info like your twitter or website is a good way for others to have the canonical source of truth for your public digital stuff because <span style={{"textDecoration":"underline"}}>only you</span> can control those mappings</Step>
            </TopicBody>
        </>
    )
}

export default GetENS;