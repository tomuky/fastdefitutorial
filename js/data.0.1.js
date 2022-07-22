let data = {
    'hello' : {
        title : 'Hello',
        icon : 'images/welcome-logo.png',
        descriptions : [
            "This is Fast DeFi Tutorial.",
            "Easy. Straight to the point. Step-by-step.",
            "No blogs or videos to rummage through.",
            "Questions? Reach out on <a href='https://twitter.com/tomuky' target='_blank'>Twitter</a><img src='images/twitter-logo.png' class='inline-icon'>",
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
            "Set up a <a href='#get-wallet' target='_blank'>MetaMask wallet</a>",
            "Buy $20 of USDC on <a href='#get-coinbase' target='_blank'>Coinbase</a>",
            "Send the USDC to your MetaMask over <a href='#try-polygon' target='_blank'>Polygon network</a>",
            "Swap some USDC for 1 MATIC using Polygon's gas-free swap",
            "Deposit $5 USDC into <a href='#save-with-aave' target='_blank'>Aave</a> to earn interest",
            "Track your deposit using <a href='#track-portfolio' target='_blank'>Zapper.fi</a>"
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
            "Download <a href='https://metamask.io/download/' target='_blank'>MetaMask</a> on your phone",
            "Choose Create a new wallet",
            "Follow on-screen instructions, <i>write down seed phrase on paper</i>",
            "Download <a href='https://metamask.io/download/' target='_blank'>MetaMask extension</a> in Chrome",
            "Choose restore wallet from seed phrase (the one you wrote down)",
            'To get your public address, touch/click the "0x000...0000" in MetaMask',
            "Go to <a href='https://etherscan.io/' target='_blank'>etherscan.io</a> or <a href='https://polygonscan.com/' target='_blank'>polygonscan.com</a> and paste in address to see it on a block explorer",
            "MetaMask is connected to Ethereum by default",
            "To add new networks, head to <a href='https://zapper.fi/' target='_blank'>zapper.fi</a> and choose other networks in bottom left",
            "Once a network is added, you can toggle between networks in MetaMask dropdown"
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
            "Sign up for a <a href='https://www.coinbase.com/join/davis_95' target='_blank'>Coinbase.com</a> account",
            "Connect your checking account",
            "<a href='https://www.coinbase.com/price/usdc' target='_blank'>Buy some USDC</a> (maybe $20 worth). USDC is a stablecoin, redeemable 1:1 for dollars."
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
            "Go to <a href='https://zapper.fi/' target='_blank'>zapper.fi</a>",
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
            "After setting up Coinbase, buy some USDC (a stablecoin)",
            "Once available, send USDC to your 0x00..00 address and <i>choose to use the Polygon network</i>",
            "View your address on <a href='https://polygonscan.com/' target='_blank'>polygonscan.com</a> to confirm it worked",
            "Select Polygon network in MetaMask network dropdown (if Polygon is not yet added to your MetaMask, go to <a href='https://zapper.fi/' target='_blank'>zapper.fi</a> and select Polygon in bottom left to have it automatically added to your MetaMask)",
            "Go to <a href='https://wallet.polygon.technology/gas-swap' target='_blank'>Polygon's gas-free swap</a> to swap $1 USDC to 1 MATIC (enough to pay for many Polygon network txs)"
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
            "Done. Check <a href='https://zapper.fi/' target='_blank'>zapper.fi</a> to see your Aave deposit"
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
            "Done. Check <a href='https://zapper.fi/' target='_blank'>zapper.fi</a> to see your Quickswap position",
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
            "Important to know about <a href='https://finematics.com/impermanent-loss-explained/' target='_blank'>impermanent loss</a> which <i>could negate profits</i>"
        ],
        steps : [
            "Go to <a href='https://polygon.balancer.fi/#/' target='_blank'>polygon.balancer.fi</a>",
            "Click Connect Wallet and choose MetaMask",
            "Fun pool to try is WBTC/USDC/WETH (w = wrapped) (don't have to worry about that)",
            "Find it and click it, then click Invest",
            "You can deposit with just USDC, Balancer will split it up between the 3 assets for you",
            "Click Review and Approve any tokens needed approval, then click Invest",
            "Done. Check <a href='https://zapper.fi/' target='_blank'>zapper.fi</a> to see your Balancer position"
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
            "Done. Check <a href='https://zapper.fi/' target='_blank'>zapper.fi</a> to see your mStable deposit"
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
            "Done. Check <a href='https://zapper.fi/' target='_blank'>zapper.fi</a> to see your Curve position",
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
            "let's send some ETH from Polygon to Optimism (both are cheaper networks)",
            "If you don't have ETH on Polygon yet, swap for some <a href='#swap-on-quickswap' target='_blank'>using Quickswap</a>",
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
        title : 'Earn fees on Hop',
        icon : 'images/hop-logo.png',
        descriptions : [
            "Hop is a bridge between chains like Ethereum, Polygon, and Optimism",
            "Provide liquidity to the bridge and earn fees from bridgers"
        ],
        steps : [
            "Go to <a href='https://app.hop.exchange/#/pool?sourceNetwork=polygon&destNetwork=polygon&token=ETH' target='_blank'>app.hop.exchange/#/pool</a>",
            "Let's try providing liquidity for ETH for Polygon bridge",
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
            "It zips up transactions in bulk and uses something called optimistic proofs to prove to Ethereum they are correct."
        ],
        steps : [
            "Your Optimism wallet address is the same as your Ethereum wallet address",
            "<a href='#bridge-with-hop' target='_blank'>Use the Hop bridge</a> to move some ETH to Optimism (ETH is used to pay for txs)",
            "Add the Optimism network to MetaMask by going to <a href='https://zapper.fi/' target='_blank'>zapper.fi</a>, connect your wallet, and toggle to the Optimism network in top right",
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
            "Make sure you're on the <a href='#try-optimism' target='_blank'>Optimism network<a>",
            "Go to <a href='https://overtimemarkets.xyz/#/markets' target='_blank'>overtimemarkets.xyz/#/markets</a> to see available markets",
            "Click on Open Markets on right side to see availabale games",
            "Click on a game to see detail on betting options",
            "Click on the USDC icon on top right to pay with USDC (swap using <a href='https://app.uniswap.org/#/swap?chain=optimism' target='_blank'>Uniswap</a> if you need some)",
            "Click on the team/outcome you want to bet on",
            "Enter amount of tokens you want",
            "Click Approve and confirm MetaMask prompts, then Buy and confirm MetaMask prompts",
            "All set. Wait for the outcome and hopefully redeem your winnings. Good luck!"
        ],
        list : []
    }
}

// ideas:
// buy nfts 
// bet on exotic markets
// lend/borrow nfts to earn yield
// 