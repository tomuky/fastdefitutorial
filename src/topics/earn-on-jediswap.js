import ExternalLink from '../components/ExternalLink';
import InternalLink from '../components/InternalLink';
import Step from '../components/Step';
import TopicTitle from '../components/TopicTitle';
import classes from '../style/Topic.module.css';

const EarnOnJediSwap = () => {
    return (
        <>
            <TopicTitle title="Earn on JediSwap" icon="jediswap-logo.png"/>
            <div className={classes.description}>
                <p>Provide liquidity to JediSwap pools and earn fees</p>
                <p>JediSwap is similar to UniswapV2 with a simple AMM model</p>
            </div>
            <div className={classes.body}>
                <div className={classes.steps}>
                    <Step n='1'>Go to <ExternalLink to='https://info.jediswap.xyz/home' title='info.jediswap.xyz' icon='jediswap-logo.png'/> to see the latest yield on pools</Step>
                    <Step n='2'>Let's provide liquidity to the <ExternalLink to='https://info.jediswap.xyz/pair/0x4d0390b777b424e43839cd1e744799f3de6c176c7e32c1812a41dbd9c19db6a' title='ETH/USDC pool'/>, so click to see the pool details, and click Add Liquidity at the top right</Step>
                    <Step type='indent'>If you don't have some USDC, swap for some using <InternalLink to='/swap-on-avnu' title='AVNU' icon='avnu-logo.png'/></Step>
                    <Step n='3'>Click to Connect your <InternalLink to='/get-braavos' title='Braavos wallet' icon='braavos-logo.png'/></Step>
                    <Step n='4'>Choose ETH and USDC as the tokens, and enter desired amounts</Step>
                    <Step n='5'>Click Supply, and confirm transaction prompts in Braavs</Step>
                    <Step n='6'>Done! You are now earning swap fees from other people</Step>
                    <Step type='indent'>The process to remove liquidity is similar</Step>
                </div>
            </div>
        </>
    )
}

export default EarnOnJediSwap;