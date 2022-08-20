let data = {
    'hello' : {
        title : 'Hello',
        icon : 'images/welcome-logo.png',
        descriptions : [
            "This is Fast DeFi Tutorial.",
            "DeFi is finance using the blockchain.",
            "Easy. Straight to the point. Step-by-step.",
            "Questions? Reach out on <a href='https://twitter.com/tomuky' target='_blank'>Twitter</a><img src='images/twitter-logo.png' class='inline-icon'>",
            "To get started, <a href='#first-thing' subject='first-thing'>click here</a><img src='images/first-logo.png' class='inline-icon'>"
        ],
        steps : [

        ],
        list : [
            
        ]
    },
    'missing' : {
        title : 'Uh oh!',
        icon : 'images/missing-icon.png',
        descriptions : [
            "Looks like you found a broken link",
            "See if you can find the page in the menu"
        ],
        steps : [

        ],
        list : [
            
        ]
    },
    'first-thing' : {
        title : 'First thing to try',
        icon : 'images/first-logo.png',
        descriptions : [
            "Starting from step 0?",
            "Here's what you should try first."
        ],
        list : [],
        steps : [
            "Know the <a href='#must-knows' subject='must-knows'>must-knows</a><img src='images/important-icon.png' class='inline-icon'> of DeFi",
            "Set up a <a href='#get-wallet' subject='get-wallet'>MetaMask</a><img src='images/metamask-logo.svg' class='inline-icon'> wallet",
            "Buy $20 of USDC on <a href='#get-coinbase' subject='get-coinbase'>Coinbase</a><img src='images/coinbase-logo.png' class='inline-icon'>",
            "Send the USDC to your MetaMask over <a href='#try-polygon' subject='try-polygon'>Polygon network</a><img src='images/polygon-logo.png' class='inline-icon'>",
            "Deposit $5 USDC into <a href='#save-with-aave' subject='save-with-aave'>Aave</a><img src='images/aave-logo.png' class='inline-icon'> to earn interest",
            "Track deposit using <a href='#track-portfolio' subject='track-portfolio'>Zapper.fi</a><img src='images/zapper-logo.png' class='inline-icon'>"
        ]
    },
    'must-knows' : {
        title : 'The must-knows',
        icon : 'images/important-icon.png',
        descriptions : [
            'Here are a few things you absolutely must know!'
        ],
        steps : [],
        list : [
            "Always try things with small amounts of money before using larger amounts",
            "You need ether (ETH) to pay for gas to transact on the Ethereum network",
            "Make sure network gas prices aren't too high befor trying things, which could negate any positive yield",
            "Never share your seed phrase or store them on your phone or computer. Write it down on paper!",
            "Only send ether to an ether address, bitcoin to a bitcoin addresses, etc",
            "However, you can send and receive ERC20 tokens with an Ethereum address since they are programmed on the Ethereum network",
            "Ether (ETH) is the asset and Ethereum is the network",
            "Now let's <a href='#first-thing' subject='first-thing'>try something</a><img src='images/first-logo.png' class='inline-icon'>"
        ]
    },
    'what-is-defi' : {
        title : 'What is DeFi',
        icon : 'images/question-icon.png',
        descriptions : [],
        steps : [],
        list : [
            "Short for Decentralized Finance",
            "Financial products and services built as immutable verifiable code",
            "Most of DeFi is built on the Ethereum blockchain",
            "No intermediaries or middle-men",
            "Available to anyone in the world with an internet connection",
            "No permission necessary to use. 24/7 365.",
            "There are some <a href='#must-knows' subject='must-knows'>things you should</a> know before starting"
        ]
    },
    'get-wallet' : {
        title : 'Get a wallet',
        icon : 'images/metamask-logo.svg',
        descriptions : [
            "The most popular wallet to use with DeFi is MetaMask.",
            "You'll want the app on your phone and the browser extension."
        ],
        steps : [
            "Download <a href='https://metamask.io/download/' target='_blank'>MetaMask</a><img src='images/metamask-logo.svg' class='inline-icon'> on your phone",
            "Choose Create a new wallet",
            "Follow on-screen instructions, <i>write down seed phrase on paper</i>",
            "Download <a href='https://metamask.io/download/' target='_blank'>MetaMask extension</a> in Chrome",
            "Choose restore wallet from seed phrase (the one you wrote down)",
            'To get your public address, touch/click the "0x000...0000" in MetaMask',
            "Go to <a href='https://etherscan.io/' target='_blank'>etherscan.io</a> or <a href='https://polygonscan.com/' target='_blank'>polygonscan.com</a> and paste in address to see it on a block explorer",
            "MetaMask is connected to Ethereum by default",
            "To add new networks, head to <a href='https://zapper.fi/' target='_blank'>zapper.fi</a><img src='images/zapper-logo.png' class='inline-icon'> and choose other networks in top right",
            "Once a network is added, you can toggle between networks in MetaMask dropdown",
            "Next let's <a href='#get-coinbase' subject='get-coinbase'>get some USDC on Coinbase</a><img src='images/coinbase-logo.png' class='inline-icon'>"
        ],
        list : []
    },
    'get-coinbase' : {
        title : 'Get Coinbase',
        icon : 'images/coinbase-logo.png',
        descriptions : [
            "The most trusted and most widely used platform for buying crypto with your bank account"
        ],
        steps : [
            "Sign up for a <a href='https://www.coinbase.com/join/davis_95' target='_blank'>Coinbase.com</a><img src='images/coinbase-logo.png' class='inline-icon'> account",
            "Connect your checking account",
            "<a href='https://www.coinbase.com/price/usdc' target='_blank'>Buy some USDC</a> (maybe $20 worth). USDC is a stablecoin, redeemable 1:1 for dollars.",
            "Next let's send <a href='#try-polygon' subject='try-polygon'>USDC to the Polygon network</a><img src='images/polygon-logo.png' class='inline-icon'>"
        ],
        list : []
    },
    'track-portfolio' : {
        title : 'Track your portfolio',
        icon : 'images/zapper-logo.png',
        descriptions : [
            "Zapper.fi is the most popular way to track your DeFi portfolio."
        ],
        steps : [
            "Go to <a href='https://zapper.fi/' target='_blank'>zapper.fi</a><img src='images/zapper-logo.png' class='inline-icon'>",
            "Click Connect Wallet and choose MetaMask",
            "Zapper.fi will read in all your balances and positions from the blockchain",
            "You can even perform some DeFi transactions all within their app"
        ],
        list : []
    },
    'try-polygon' : {
        title : 'Try Polygon',
        icon : 'images/polygon-logo.png',
        descriptions : [
            "Polygon is cheaper than Ethereum to use, making it great to try things.",
            "Polygon builds scaling solutions on and around Ethereum."
        ],
        steps : [
            "Your Polygon wallet address is the same as your Ethereum wallet address",
            "After setting up <a href='https://www.coinbase.com/join/davis_95' target='_blank'>Coinbase</a><img src='images/coinbase-logo.png' class='inline-icon'>, buy some USDC (a stablecoin)",
            "Once available, send USDC to your 0x00..00 address and <i>choose to use the Polygon network</i>",
            "View your address on <a href='https://polygonscan.com/' target='_blank'>polygonscan.com</a> to confirm it worked",
            "Select Polygon network in MetaMask network dropdown (if Polygon is not yet added to your MetaMask, go to <a href='https://zapper.fi/' target='_blank'>zapper.fi</a> and select Polygon in bottom left to have it automatically added to your MetaMask)",
            "Go to <a href='https://wallet.polygon.technology/gas-swap' target='_blank'>Polygon's gas-free swap</a> to swap $1 USDC to 1 MATIC (enough to pay for many Polygon network txs)",
            "Next let's <a href='#save-with-aave' subject='save-with-aave'>deposit some USDC into Aave</a><img src='images/aave-logo.png' class='inline-icon'>"
        ],
        list : []
    },
    'save-with-aave' : {
        title : 'Save with Aave',
        icon : 'images/aave-logo.png',
        descriptions : [
            "<a href='https://aave.com/' target='_blank'>Aave</a> is a borrowing and lending protocol",
            "Deposit assets to earn interest from borrowers",
            "Borrowers first deposit assets (ETH) as collateral to borrow others (USDC)"
        ],
        steps : [
            "Go to <a href='https://app.aave.com/?marketName=proto_polygon_v3' target='_blank'>app.aave.com</a> and select the Polygon market",
            "Click top right button to Connect Wallet, choose Browser Wallet",
            "Click Supply for USDC in left pane list of Assets to supply",
            "Type in amount to deposit",
            "Click Approve and confirm MetaMask prompt",
            "Click Supply and confirm MetaMask prompt",
            "Done. Check <a href='https://zapper.fi/' target='_blank'>zapper.fi</a><img src='images/zapper-logo.png' class='inline-icon'> to see your Aave deposit"
        ],
        list : []
    },
    'swap-on-quickswap' : {
        title : 'Swap on Quickswap',
        icon : 'images/quickswap-logo.png',
        descriptions : [
            "Quickswap is the leading decentralized exchange on Polygon",
            "Swap between assets with near-zero transaction costs"
        ],
        steps : [
            "Go to <a href='https://quickswap.exchange/#/swap' target='_blank'>quickswap.exchange/swap</a>",
            "Choose USDC as the From token",
            "Choose ETH as the To token",
            "Type in amount of USDC to swap",
            "Click Approve and confirm MetaMask prompt",
            "Click Swap and confirm MetaMask prompt",
            "Done. You now have ETH in your wallet"
        ],
        list : []
    },
    'earn-on-quickswap' : {
        title : 'Earn on Quickswap',
        icon : 'images/quickswap-logo.png',
        descriptions : [
            "Provide liquidty and earn fees from swaps",
            "A pool is 2 tokens 50/50 in value which automatically rebalances to remain 50/50",
            "Important to know about <a href='https://finematics.com/impermanent-loss-explained/' target='_blank'>impermanent loss</a> which <i>could negate profits</i>"
        ],
        steps : [
            "Go to <a href='https://info.quickswap.exchange/#/pairs' target='_blank'>info.quickswap.exchange/pairs</a>",
            "Here you see a list of pools and their annualized APY from earning fees",
            "Go to <a href='https://quickswap.exchange/#/pools' target='_blank'>quickswap.exchange/pools</a>",
            "We'll do USDC as Token 1 and ETH as Token 2",
            "Click to Approve tokens, confirm MetaMask prompt",
            "Click to Supply, click to Confirm Supply, confirm MetaMask prompt",
            "Done. Check <a href='https://zapper.fi/' target='_blank'>zapper.fi</a><img src='images/zapper-logo.png' class='inline-icon'> to see your Quickswap position",
            'You received "LP Tokens" that represent your deposit in that specific pool',
            "You automatically accrue fees simply by holding the tokens"
        ],
        list : []
    },
    'play-no-loss-lottery' : {
        title : 'Play a no-loss lottery',
        icon : 'images/pooltogether-logo.png',
        descriptions : [
            "Deposit into a pool and win all the interest accrued on the entire pool",
            "You never lose your deposit, withdraw it anytime"
        ],
        steps : [
            "Go to <a href='https://app.pooltogether.com/deposit?network=polygon' target='_blank'>app.pooltogether.com</a>",
            "Click Connect Wallet and choose MetaMask",
            "Enter amount of USDC you wish to deposit",
            "Click to Review deposit, confirm, confirm MetaMask prompt",
            "Done. Draws are daily so check the Prizes tab tomorrow!",
            "Check <a href='https://zapper.fi/' target='_blank'>zapper.fi</a><img src='images/zapper-logo.png' class='inline-icon'> to see your Pooltogether position"
        ],
        list : []
    },
    'earn-on-balancer' : {
        title : 'Earn on Balancer',
        icon : 'images/balancer-logo.png',
        descriptions : [
            "Provide liquidty and earn fees from swaps",
            "Balancer has dynamic weights and mixes",
            "Pools can be 80/20 or 33/33/33 etc",
            "Important to know about <a href='https://finematics.com/impermanent-loss-explained/' target='_blank'>impermanent loss</a> which <i>could negate profits</i>"
        ],
        steps : [
            "Go to <a href='https://polygon.balancer.fi/#/' target='_blank'>polygon.balancer.fi</a>",
            "Click Connect Wallet and choose MetaMask",
            "Fun pool to try is WBTC/USDC/WETH (w = wrapped) (don't have to worry about that)",
            "Find it and click it, then click Invest",
            "You can deposit with just USDC, Balancer will split it up between the 3 assets for you",
            "Click Review and Approve any tokens needed approval, then click Invest",
            "Done. Check <a href='https://zapper.fi/' target='_blank'>zapper.fi</a><img src='images/zapper-logo.png' class='inline-icon'> to see your Balancer position"
        ],
        list : []
    },
    'save-with-mstable' : {
        title : 'Save with mStable',
        icon : 'images/mstable-logo.png',
        descriptions : [
            "<a href='https://mstable.org/' target='_blank'>mStable</a> is a decentralized stablecoin ecosystem",
            "Deposit and earn yield from swap fees and DeFi lending markets"
        ],
        steps : [
            "View APY stats at <a href='https://mstable.app/#/musd/stats' target='_blank'>mstable.app/#/musd/stats</a> and click Ethereum logo (top right) to switch to Polygon network",
            "Go to <a href='https://mstable.app/#/musd/save' target='_blank'>mstable.app/#/musd/save</a>",
            "Click Connect Wallet and choose MetaMask",
            "Make sure you're still on Polygon network",
            "Click on asset dropdown to select USDC to deposit",
            "Enter amount you wish to deposit, then click Mint and Save",
            "Click Approve Exact, confirm MetaMask prompt",
            "Click Mint and Save, click Send Transaction popup, then confirm MetaMask prompt",
            "Done. Check <a href='https://zapper.fi/' target='_blank'>zapper.fi</a><img src='images/zapper-logo.png' class='inline-icon'> to see your mStable deposit"
        ],
        list : []
    },
    'earn-on-curve' : {
        title : 'Earn on Curve',
        icon : 'images/curve-logo.png',
        descriptions : [
            "Curve is a decentralized exchange specialized for swapping stablecoins",
            "Supply liquidity and earn swap fees"
        ],
        steps : [
            "Go to <a href='https://polygon.curve.fi/' target='_blank'>polygon.curve.fi</a>",
            "Scroll to Curve Pools to see pools and APY stats",
            "Click on <a href='https://polygon.curve.fi/aave' target='_blank'>aDAI + aUSDC + aUSDT pool</a>",
            "Click on <a href='https://polygon.curve.fi/aave/deposit' target='_blank'>Deposit<a> in very top menu",
            'Uncheck "Use maximum amount" and enter amount of USDC you want to supply',
            "Click Deposit & Stake in gauge (stake in gauge to earn additional rewards)",
            "There may be 4 MetaMask prompts to confirm: Approve, Deposit token, Approe, Deposit into Gauge",
            "Refresh the page to now see your Staked Share near the bottom",
            "Done. Check <a href='https://zapper.fi/' target='_blank'>zapper.fi</a><img src='images/zapper-logo.png' class='inline-icon'> to see your Curve position",
            "To withdraw, click on <a href='https://polygon.curve.fi/aave/withdraw' target='_blank'>Withdraw</a> on top menu, look for Unstake and then Withdraw (pay attention to Withdraw % to get all USDC back)"
        ],
        list : []
    },
    'bridge-with-hop' : {
        title : 'Bridge with Hop',
        icon : 'images/hop-logo.png',
        descriptions : [
            "Hop is a bridge between chains like Ethereum, Polygon, and Optimism",
            "It makes sending tokens between networks quick, easy, and cheap"
        ],
        steps : [
            "Let's send some ETH from Polygon to Optimism (both are cheaper networks)",
            "If you don't have ETH on Polygon yet, swap for some <a href='#swap-on-quickswap' subject='swap-on-quickswap>using Quickswap</a>",
            "Go to <a href='https://app.hop.exchange/#/send' target='_blank'>app.hop.exchange/#/send</a>",
            "Choose ETH to send, Polygon as From network, and Optism as To network",
            "Make sure you are currently connected to the Polygon network in MetaMask",
            "Enter amount of ETH to send",
            "Click Approve and confirm MetaMask prompt, click Send and confirm MetaMask prompt",
            "Once the tx has enough confirmations, your ETH will show up on Optimism"
        ],
        list : []
    },
    'earn-on-hop' : {
        title : 'Earn on Hop',
        icon : 'images/hop-logo.png',
        descriptions : [
            "Hop is a bridge between chains like Ethereum, Polygon, and Optimism",
            "Provide liquidity to the bridge and earn fees from bridgers"
        ],
        steps : [
            "Go to <a href='https://defillama.com/yields?project=hop-protocol' target='_blank'>DeFiLlama.com</a> to see list of Hop pool APYs",
            "Let's try providing liquidity for ETH for the Polygon bridge",
            "Go to <a href='https://app.hop.exchange/#/pool?sourceNetwork=polygon&destNetwork=polygon&token=ETH' target='_blank'>app.hop.exchange/#/pool</a>",
            "Choose ETH and Polygon",
            "Enter amount of ETH you wish to deposit",
            "Click Add Liquidity, and should be a popup to Approve first",
            "Confirm MetaMask prompts, and you're done",
            "You should see your position stats near the bottom of the page",
            "Note the current APY you are earning from fees"
        ],
        list : []
    },
    'try-optimism' : {
        title : 'Try Optimism',
        icon : 'images/optimism-logo.png',
        descriptions : [
            "Optimism is a Layer 2 on top of Ethereum, inheriting Ethereum security.",
            "It zips up txs in bulk and uses optimistic proofs to prove to Ethereum they are correct."
        ],
        steps : [
            "You need ETH to pay for txs, and your Optimism address is the same as your Ethereum address",
            "To get on Optimism, you can either 1) buy ETH on <a href='#get-coinbase' subject='get-coinbase'>Coinbase</a><img src='images/coinbase-logo.png' class='inline-icon'>, withdraw to <a href='#try-polygon' subject='try-polygon'>Polygon</a><img src='images/polygon-logo.png' class='inline-icon'>, then use <a href='#bridge-with-hop' subject='bridge-with-hop'>Hop Bridge</a><img src='images/hop-logo.png' class='inline-icon'> to Optimism or 2) buy ETH on <a href='#get-cryptocom' subject='get-cryptocom'>Crypto.com</a><img src='images/cryptocom-logo.png' class='inline-icon'> and withdraw to Optimism",
            "Add the Optimism network to MetaMask by going to <a href='https://zapper.fi/' target='_blank'>zapper.fi</a><img src='images/zapper-logo.png' class='inline-icon'>, connect your wallet, and toggle to the Optimism network in top right",
            "You can use the block explorer <a href='https://optimistic.etherscan.io/' target='_blank'>optimistic.etherscan.io</a> to view your address and transactions",
            "Now you're ready to try things on Optimism"
        ],
        list : []
    },
    'bet-on-sports' : {
        title : 'Bet on sports',
        icon : 'images/overtime-logo.png',
        descriptions : [
            "Overtime is a decentralised on-chain sports betting platform",
            "It is sports betting without the hassles and restrictions of traditional platforms",
            "You buy the token of the team/outcome you're betting on. The prices of the teams/outcomes can be considered the odds ($0.54 = 54%). If that team wins, the token becomes redeemable for $1, the others go to $0. Example: bet $10 on a token that costs $0.50, you get 20 tokens, if that team wins, you redeem the 20 tokens for $20. Learn more about Overtime <a href='https://medium.com/@OvertimeMarkets.xyz/sports-fans-hold-onto-your-seats-the-excitement-of-sports-trading-is-coming-to-the-blockchain-e8ea9b174bd6' target='_blank'>here</a>."
        ],
        steps : [
            "Make sure you're on the <a href='#try-optimism' subject='try-optimism'>Optimism<a><img src='images/optimism-logo.png' class='inline-icon'> network",
            "Go to <a href='https://overtimemarkets.xyz#/markets?referralId=0x5419c2900b238447848bfb16c6fab7c3c7143518' target='_blank'>overtimemarkets.xyz/#/markets</a> to see available markets",
            "Click on Open Markets on right side to see availabale games",
            "Click on a game to see detail on betting options",
            "Click on the USDC icon on top right to pay with USDC (swap using <a href='https://app.uniswap.org/#/swap?chain=optimism' target='_blank'>Uniswap</a> if you need some)",
            "Click on the team/outcome you want to bet on",
            "Enter amount of tokens you want",
            "Click Approve and confirm MetaMask prompts, then Buy and confirm MetaMask prompts",
            "All set. Wait for the outcome and hopefully redeem your winnings. Good luck!"
        ],
        list : []
    },
    'get-cryptocom' : {
        title : 'Get Crypto.com',
        icon : 'images/cryptocom-logo.png',
        descriptions : [
            "You can buy ETH on Crypto.com and withdraw straight to the Optimism<img src='images/optimism-logo.png' class='inline-icon'> network",
            "Buying ETH with your bank account <span style='color:red;font-style:bold;'>can take a few days</span> to clear your bank, but you save on fees"
        ],
        steps : [
            "Download the <a href='https://crypto.com/us/app' target='_blank'><img src='images/cryptocom-logo.png' class='inline-icon'>Crypto.com app</a> on your phone and setup an account",
            "Click on Accounts, click Fiat Wallet to set that up first",
            "Go to Home, click Deposit, depsoit fiat from bank account, choose Link Bank Account",
            "After linking account, choose amount of USD to deposit and click deposit (no fees)",
            "May take up to 7 days for funds to clear your bank. You could wait until then before proceeding.",
            "To buy ETH, click Home, then Buy, click to use your Fiat Wallet choose Ethereum, and Buy ETH",
            "After funds clear your bank you can send from Crypto.com to your own wallet",
            "Go to Accounts, click Crypto Wallet, then Ethereum",
            "Click Transfer, Withdraw, External Wallet, click to Add Wallet Address to Withdrawal Whitelist",
            "Important: Choose OP (Optimism) when selecting network",
            "Paste in your ETH wallet address (may have to copy it from your MetaMask on your computer, then email it to your phone) and give it a nickname",
            "Crypto.com may prompt to enable 2FA authentication. Highly recommended you do this.",
            "After whitelisting this OP address, click to Withdraw ETH, enter amount, then click Withdraw, Confirm."
        ],
        list : []
    },
    'check-gas' : {
        title : 'Check Ethereum gas',
        icon : 'images/gas-logo.png',
        descriptions : [
            "Gas prices to transact on Ethereum can sometimes be too high to try things",
            "Networks like <a href='#try-optimism' subject='try-optimism'>Optimism<a><img src='images/optimism-logo.png' class='inline-icon'> help scale Ethereum to more people with cheaper costs",
            "Ethereum mainnet is becoming the home for large financial transactions"
        ],
        steps : [
            "Go to <a href='https://www.blocknative.com/gas-estimator' target='_blank'>blocknative.com/gas-estimator</a>",
            "The important number is the Base Fee near the bottom of the graphic",
            "If Base Fee > 50 I would wait until gas is lower before transacting on Ethereum",
            "To easily see gas levels, click Download the Extension"
        ],
        list : []
    },
    'get-ens' : {
        title : 'Get .eth name',
        icon : 'images/ens-logo.png',
        descriptions : [
            "Register a human readable address to map to your ugly long wallet address",
            "your .eth name is perceived as your username for web3",
            "Consider privacy when choosing a name"
        ],
        steps : [
            "<a href='#check-gas' subject='check-gas'>Check gas<a><img src='images/gas-logo.png' class='inline-icon'> to make sure it's not too high",
            "Go to <a href='https://app.ens.domains/' target='_blank'>app.ens.domains</a> and search for a name you'd like to claim",
            "If available, choose number of years, then click Request to Register",
            "Confirm MetaMask tx, then it makes you wait 1 minute",
            "Once ready, click to confirm to register your name",
            "After claiming, you need to set the Reverse Record of your address so the blockchain knows the .eth name goes to your address",
            "On the My Account page, expand Primary ENS Name section, choose your new name in dropdown and confirm",
            "To learn more about Ethereum Name Service (ENS) go <a href='https://ens.domains/' target='_blank'>here</a>",
            "Another handy tool to explore names is <a href='https://ens.tools/domains' target='_blank'>ens.tools</a><img src='images/ens-tools-logo.png' class='inline-icon'>"
        ],
        list : []
    }
}

// ideas:
// buy nfts on opensea
// bet on exotic markets
// lend/borrow nfts to earn yield
// lens protocol
// barnbridge
// livepeer staking
// the graph (tenderize?)
// indexcoop MNYe
// defillama.com
// bullish case on tokens that actually do something
// get a .eth name
// crypto.com eth onramp to optimism
