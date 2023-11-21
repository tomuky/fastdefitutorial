import { useEffect } from 'react';
import classes from '../style/Navigation.module.css'
import NavigationGroup from './NavigationGroup';
import NavigationLink from './NavigationLink';
import NavigationLinkExternal from './NavigationLinkExternal';

const NavigationList = (props) => {

    useEffect(() => props.scrollHander(),[props]);

    return (
        <div id='left_pane_scroll' className={classes.left_pane_scroll}>

            <NavigationLink to='welcome' title='Hello' icon='welcome-logo.png'/>
            <NavigationLink to='first' title='First thing to try' icon='first-logo.png'/>

            <div className={classes.left_pane_divider}/>

            <NavigationLink to='what-is-defi' title='What is DeFi' icon='question-icon.png'/>
            <NavigationLink to='must-knows' title='The Must-knows' icon='important-icon.png'/>
            <NavigationLink to='get-a-wallet' title='Get a wallet' icon='metamask-logo.svg'/>
            <NavigationLink to='get-coinbase' title='Get Coinbase' icon='coinbase-logo.png'/>
            <NavigationLink to='track-your-portfolio' title='Track your portfolio' icon='zapper-logo.png'/>

            <div className={classes.left_pane_divider}/>

            <NavigationGroup group='polygon' title='Try Polygon' icon='polygon-logo.png'/>
            <NavigationGroup group='optimism' title='Try Optimism' icon='optimism-logo.png'/>
            <NavigationGroup group='arbitrum' title='Try Arbitrum' icon='arbitrum-logo.png'/>
            <NavigationGroup group='ethereum' title='Try Ethereum' icon='ethereum-logo.png'/>
            <NavigationGroup group='starknet' title='Try Starknet' icon='starknet-logo.png'/>

            <div className={classes.left_pane_divider}/>

            {/* <NavigationLink to='data-on-defillama' title='Data on DeFi Llama' icon='defillama-logo.png'/> */}
            {/* <NavigationLink to='swap-on-defillama' title='Swap on DeFi Llama' icon='defillama-logo.png'/> */}

            {/* <div className={classes.left_pane_divider}/> */}

            <NavigationLink to='redpill' title='Take the red pill' icon='redpill-icon.png'/>

            <div className={classes.left_pane_divider}/>

            <NavigationLinkExternal to='https://twitter.com/tomuky' title='Follow @tomuky' icon='twitter-logo.png'/>
            <NavigationLinkExternal to='mailto:tom@fastdefitutorial.com' title='Email @tomuky' icon='email-icon.png'/>

        </div>
    )
}

export default NavigationList;