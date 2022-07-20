let data = {
    'hello' : {
        title : 'Hello',
        icon : 'images/welcome-logo.png',
        descriptions : [
            "This is Fast DeFi Tutorial.",
            "Easy. Straight to the point. Step-by-step.",
            "No blogs or videos to rummage through.",
            "Questions? Reach out on <a href='https://twitter.com/tomuky' target='_new'>Twitter</a><img src='images/twitter-logo.png' class='inline-icon'>",
            "Select from the menu to get started"
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
        steps : [],
        list : [
            "Buy $20 of USDC on <a href='#get-coinbase' target='_new'>Coinbase</a>",
            "Set up <a href='#get-wallet' target='_new'>MetaMask wallet</a>",
            "Send the USDC to your MetaMask over <a href='#try-polygon' target='_new'>Polygon network</a>",
            "Swap some USDC for 1 MATIC using Polygon's gas-free swap",
            "Deposit $5 USDC into <a href='#save-with-aave' target='_new'>Aave</a> to earn interest",
            "Track your deposit using <a href='#track-portfolio' target='_new'>Zapper.fi</a>"
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
            "Ether (ETH) is the asset and Ethereum is the network"
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
            "No permission necessary to use. 24/7 365."
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
            "Download <a href='https://metamask.io/download/' target='_new'>MetaMask</a> on your phone",
            "Choose Create a new wallet",
            "Follow on-screen instructions, <i>write down seed phrase on paper</i>",
            "Download <a href='https://metamask.io/download/' target='_new'>MetaMask extension</a> in Chrome",
            "Choose restore wallet from seed phrase (the one you wrote down)",
            'To get your public address, touch/click the "0x000...0000" in MetaMask',
            "Go to <a href='https://etherscan.io/' target='_new'>etherscan.io</a> or <a href='https://polygonscan.com/' target='_new'>polygonscan.com</a> and paste in address to see it on a block explorer"
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
            "Sign up for a <a href='https://www.coinbase.com/join/davis_95' target='_new'>Coinbase.com</a> account",
            "Connect your checking account",
            "<a href='https://www.coinbase.com/price/usdc' target='_new'>Buy some USDC</a> (maybe $20 worth). USDC is a stablecoin, redeemable 1:1 for dollars."
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
            "Go to <a href='https://zapper.fi/' target='_new'>zapper.fi</a>",
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
            "After setting up Coinbase, buy some USDC (a stablecoin)",
            "Once available, send USDC to your 0x00..00 address and <i>choose to use the Polygon network</i>",
            "View your address on <a href='https://polygonscan.com/' target='_new'>polygonscan.com</a> to confirm it worked",
            "Go to <a href='https://wallet.polygon.technology/gas-swap' target='_new'>Polygon's gas-free swap</a> to swap $1 USDC to 1 MATIC (enough to pay for many Polygon network txs)"
        ],
        list : []
    },
    'save-with-aave' : {
        title : 'Save with Aave',
        icon : 'images/aave-logo.png',
        descriptions : [
            "<a href='https://aave.com/' target='_new'>Aave</a> is a borrowing and lending protocol",
            "Deposit assets to earn interest from borrowers",
            "Borrowers first deposit assets (ETH) as collateral to borrow others (USDC)"
        ],
        steps : [
            "Go to <a href='https://app.aave.com/?marketName=proto_polygon_v3' target='_new'>app.aave.com</a> and select the Polygon market",
            "Click top right button to Connect Wallet, choose Browser Wallet",
            "Click Supply for USDC in left pane list of Assets to supply",
            "Type in amount to deposit",
            "Click Approve and confirm MetaMask prompt",
            "Click Supply and confirm MetaMask prompt",
            "Done. Check <a href='https://zapper.fi/' target='_new'>zapper.fi</a> to see your Aave deposit"
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
            "Go to <a href='https://quickswap.exchange/#/swap' target='_new'>quickswap.exchange/swap</a>",
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
            "Important to know about <a href='https://finematics.com/impermanent-loss-explained/' target='_new'>impermanent loss</a> which <i>could negate profits</i>"
        ],
        steps : [
            "Go to <a href='https://info.quickswap.exchange/#/pairs' target='_new'>info.quickswap.exchange/pairs</a>",
            "Here you see a list of pools and their annualized APY from earning fees",
            "Go to <a href='https://quickswap.exchange/#/pools' target='_new'>quickswap.exchange/pools</a>",
            "We'll do USDC as Token 1 and ETH as Token 2",
            "Click to Approve tokens, confirm MetaMask prompt",
            "Click to Supply, click to Confirm Supply, confirm MetaMask prompt",
            "Done. Check <a href='https://zapper.fi/' target='_new'>zapper.fi</a> to see your Quickswap position",
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
            "Go to <a href='https://app.pooltogether.com/deposit?network=polygon' target='_new'>app.pooltogether.com</a>",
            "Click Connect Wallet and choose MetaMask",
            "Enter amount of USDC you wish to deposit",
            "Click to Review deposit, confirm, confirm MetaMask prompt",
            "Done. Draws are daily so check the Prizes tab tomorrow!"
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
            "Important to know about <a href='https://finematics.com/impermanent-loss-explained/' target='_new'>impermanent loss</a> which <i>could negate profits</i>"
        ],
        steps : [
            "Go to <a href='https://polygon.balancer.fi/#/' target='_new'>polygon.balancer.fi</a>",
            "Click Connect Wallet and choose MetaMask",
            "Fun pool to try is WBTC/USDC/WETH (w = wrapped) (don't have to worry about that)",
            "Find it and click it, then click Invest",
            "You can deposit with just USDC, Balancer will split it up between the 3 assets for you",
            "Click Review and Approve any tokens needed approval, then click Invest",
            "Done. Check <a href='https://zapper.fi/' target='_new'>zapper.fi</a> to see your Balancer position"
        ],
        list : []
    },
    'save-with-mstable' : {
        title : 'Save with mStable',
        icon : 'images/mstable-logo.png',
        descriptions : [
            "<a href='https://mstable.org/' target='_new'>mStable</a> is a decentralized stablecoin ecosystem",
            "Deposit and earn yield from swap fees and DeFi lending markets"
        ],
        steps : [
            "View APY stats at <a href='https://mstable.app/#/musd/stats' target='_new'>mstable.app/#/musd/stats</a> and click Ethereum logo (top right) to switch to Polygon network",
            "Go to <a href='https://mstable.app/#/musd/save' target='_new'>mstable.app/#/musd/save</a>",
            "Click Connect Wallet and choose MetaMask",
            "Make sure you're still on Polygon network",
            "Click on asset dropdown to select USDC to deposit",
            "Enter amount you wish to deposit, then click Mint and Save",
            "Click Approve Exact, confirm MetaMask prompt",
            "Click Mint and Save, click Send Transaction popup, then confirm MetaMask prompt",
            "Done. Check <a href='https://zapper.fi/' target='_new'>zapper.fi</a> to see your mStable deposit"
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
            "Go to <a href='https://polygon.curve.fi/' target='_new'>polygon.curve.fi</a>",
            "Scroll to Curve Pools to see pools and APY stats",
            "Click on <a href='https://polygon.curve.fi/aave' target='_new'>aDAI + aUSDC + aUSDT pool</a>",
            "Click on <a href='https://polygon.curve.fi/aave/deposit' target='_new'>Deposit<a> in very top menu",
            'Uncheck "Use maximum amount" and enter amount of USDC you want to supply',
            "Click Deposit & Stake in gauge (stake in gauge to earn additional rewards)",
            "There may be 4 MetaMask prompts to confirm: Approve, Deposit token, Approe, Deposit into Gauge",
            "Refresh the page to now see your Staked Share near the bottom",
            "Done. Check <a href='https://zapper.fi/' target='_new'>zapper.fi</a> to see your Curve position",
            "To withdraw, click on <a href='https://polygon.curve.fi/aave/withdraw' target='_new'>Withdraw</a> on top menu, look for Unstake and then Withdraw (pay attention to Withdraw % to get all USDC back)"
        ],
        list : []
    }
}

// ideas:
// lend/borrow nfts to earn yield
// 