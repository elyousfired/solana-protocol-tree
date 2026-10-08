import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CACHE_DIR = path.join(__dirname, '..', 'cache');

// Ensure cache directory exists
try {
  await fs.mkdir(CACHE_DIR, { recursive: true });
} catch {}

// Curated Deep Composability Trees for Solana Root Primitives
export const ROOT_PRIMITIVES_TREES = [
  {
    id: 'ore',
    name: 'ORE Protocol',
    symbol: 'ORE',
    category: 'Gamified Mining / PoW',
    categoryIcon: '⛏️',
    description: 'Proof-of-Work digital commodity protocol mined directly on the Solana blockchain with predictable supply issuance.',
    programId: 'oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp',
    legacyProgramId: 'oreoN2tQbHXVaZsr3pf66A48jUijmwCPSGZdjf पहचान',
    website: 'https://ore.supply',
    docs: 'https://docs.ore.supply',
    twitter: 'https://x.com/HardhatChad',
    creator: 'Hardhat Chad (@HardhatChad)',
    stats: {
      totalMiners: '124,000+',
      algorithm: 'Equihash / SHA-256 On-Chain Proof',
      rewardPerHash: '1 ORE / minute distributed',
      mcap: '$38,500,000'
    },
    subProtocols: [
      {
        id: 'ore-pool',
        name: 'Ore Mining Pool Network',
        relation: 'Mining Pool Aggregator',
        type: 'Pool Contract',
        description: 'Decentralized mining pool contract that aggregates hashing power from multiple independent workers and splits mining rewards.',
        programId: 'minePQK1Y3d463G8eE8dGhyD5Y2p2X9y1rT7m4K3jN1',
        token: 'Share Tokens (stORE)',
        status: 'Active'
      },
      {
        id: 'star-mining',
        name: 'Star Mining Protocol',
        relation: 'Stratum Bridge',
        type: 'Infrastructure',
        description: 'High-performance Stratum-to-Solana gateway allowing standard GPU/CPU mining rigs to mine ORE without local Solana node setup.',
        programId: 'starMiNGs9P2X8k4L1jM5v7N8q2R3t4Y5w6E7r8T9y0',
        token: 'Native ORE',
        status: 'Active'
      },
      {
        id: 'coal-protocol',
        name: 'Coal Protocol (COAL)',
        relation: 'Sister Mining Primitive',
        type: 'PoW Commodity',
        description: 'Community-forked proof-of-work digital asset launched using ORE architecture with higher inflation and alternative difficulty epoch curve.',
        programId: 'E39b1k8N4v7J8q2R3t4Y5w6E7r8T9y0P1jM5v7N8q2R',
        token: 'COAL',
        status: 'Active'
      },
      {
        id: 'meteora-ore-dlmm',
        name: 'Meteora DLMM ORE-SOL Pools',
        relation: 'Dynamic AMM Liquidity',
        type: 'DEX Liquidity',
        description: 'Dynamic concentrated liquidity bins capturing high miner arbitrage and swapping flow with zero impermanent loss volatility fee spikes.',
        programId: 'LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo',
        token: 'ORE / SOL',
        tvl: '$4,120,000',
        status: 'Active'
      },
      {
        id: 'raydium-ore-cpmm',
        name: 'Raydium ORE-SOL Pair',
        relation: 'Decentralized Trading Engine',
        type: 'AMM Liquidity',
        description: 'Canonical decentralized trading pool on Raydium CPMM for secondary market liquidity and automated buybacks.',
        programId: 'CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C',
        token: 'ORE / SOL',
        tvl: '$3,850,000',
        status: 'Active'
      },
      {
        id: 'ore-v1-escrow',
        name: 'ORE v1 to v2 Upgrade Escrow',
        relation: 'Supply Bridge',
        type: 'Token Migration',
        description: 'One-way 1:1 on-chain burn-and-mint migration contract converting legacy v1 tokens to production v2 token standard.',
        programId: 'migrATeQv8J7w6E5r4T3y2U1i0O9p8A7s6D5f4G3h2J',
        token: 'ORE v1 -> ORE v2',
        status: 'Completed'
      }
    ]
  },
  {
    id: 'raydium',
    name: 'Raydium Protocol',
    symbol: 'RAY',
    category: 'DEX & Liquidity Engine',
    categoryIcon: '⚡',
    description: 'Solanas leading automated market maker (AMM), CPMM, and Concentrated Liquidity Market Maker (CLMM) powering the majority of Solana token swaps.',
    programId: '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8',
    cpmmProgramId: 'CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C',
    clmmProgramId: 'CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK',
    website: 'https://raydium.io',
    stats: {
      tvl: '$1,840,000,000',
      dailyVolume: '$1,620,000,000',
      activePools: '42,000+'
    },
    subProtocols: [
      {
        id: 'trojan-bot',
        name: 'Trojan on Solana',
        relation: 'High-Frequency Trading Router',
        type: 'Telegram Trading Bot',
        description: 'Telegram bot processing over $100M daily trading volume by invoking Raydium AMM & CPMM contracts with private MEV bundle routing.',
        volume24h: '$85,000,000',
        status: 'Active'
      },
      {
        id: 'bonkbot',
        name: 'BonkBot',
        relation: 'Community Trading Engine',
        type: 'Telegram Trading Bot',
        description: 'Autonomous trading bot using Raydium SDK via CPI to execute instant token swaps and burning BONK with 100% of trading fee revenue.',
        volume24h: '$45,000,000',
        status: 'Active'
      },
      {
        id: 'photon-sol',
        name: 'Photon SOL Terminal',
        relation: 'Web Execution Client',
        type: 'Trading Terminal',
        description: 'Ultra-low latency web trading terminal directly executing RPC transactions against Raydium liquidity pools.',
        volume24h: '$120,000,000',
        status: 'Active'
      },
      {
        id: 'bullx-neo',
        name: 'BullX Trading Terminal',
        relation: 'Order Routing Client',
        type: 'Hybrid DEX Aggregator',
        description: 'Multi-chain DEX terminal routing swap orders directly to Raydium CLMM and CPMM contracts with limit order execution.',
        volume24h: '$65,000,000',
        status: 'Active'
      },
      {
        id: 'raydium-farms',
        name: 'Raydium Yield Farms & Dual Staking',
        relation: 'Liquidity Incentive Contract',
        type: 'Yield Farming',
        description: 'On-chain staking contracts distributing RAY and partner token rewards to liquidity providers across key pools.',
        tvl: '$240,000,000',
        status: 'Active'
      }
    ]
  },
  {
    id: 'sanctum',
    name: 'Sanctum Protocol',
    symbol: 'CLOUD',
    category: 'Liquid Staking Infrastructure',
    categoryIcon: '🌊',
    description: 'Solanas unified liquid staking infrastructure enabling seamless zero-slippage swaps between any LST via the Infinity multi-LST pool and Validator LST launchpad.',
    programId: '5ocnV1qiCgaQR8Jb8xWnVbApfayotuugQBNa3YWH388B',
    website: 'https://sanctum.so',
    stats: {
      tvl: '$1,320,000,000',
      totalLstsSupported: '35+ LSTs',
      infinityPoolTvl: '$480,000,000'
    },
    subProtocols: [
      {
        id: 'infinity-pool',
        name: 'Sanctum Infinity Pool (INF)',
        relation: 'Multi-LST Liquidity Reserve',
        type: 'Core Liquidity Pool',
        description: 'The global multi-LST liquidity pool that holds dozens of liquid staking tokens and dynamically auto-balances to maximize staking yields.',
        tvl: '$480,000,000',
        token: 'INF',
        status: 'Active'
      },
      {
        id: 'bonksol',
        name: 'bonkSOL Liquid Staking',
        relation: 'Community LST Integration',
        type: 'Branded Validator LST',
        description: 'Community validator liquid staking token minted via Sanctum Router, channeling MEV rewards and staking yields into BONK burns.',
        tvl: '$34,000,000',
        token: 'bonkSOL',
        status: 'Active'
      },
      {
        id: 'dripsol',
        name: 'dripSOL (DRiP Protocol)',
        relation: 'Creator Economy LST',
        type: 'Branded Validator LST',
        description: 'Staking token powering the DRiP Haus creator collective, funding daily digital collectibles drops with validator staking APY.',
        tvl: '$8,500,000',
        token: 'dripSOL',
        status: 'Active'
      },
      {
        id: 'sanctum-router',
        name: 'Sanctum LST Router',
        relation: 'Cross-LST Swap Engine',
        type: 'Atomic Routing Contract',
        description: 'The smart contract engine allowing any user or DEX to trade between any two Solana LSTs instantly with minimal slippage.',
        status: 'Active'
      }
    ]
  },
  {
    id: 'kamino',
    name: 'Kamino Finance',
    symbol: 'KMNO',
    category: 'Lending, Borrowing & Vaults',
    categoryIcon: '🏛️',
    description: 'Solanas institutional DeFi suite offering integrated money markets (Kamino Lend), automated liquidity vaults (k-Vaults), and leveraged yield strategies (Multiply).',
    programId: 'KLend2g3cP87fffoy8q1mQqGKjrxjC8boSyAYavgmjD',
    vaultProgramId: '6LtLpn8rw5DKUd9qbTg5CLfqdu9vnkk21KQXYZnZFhT5',
    website: 'https://kamino.finance',
    stats: {
      tvl: '$2,150,000,000',
      totalBorrowed: '$780,000,000',
      activeVaults: '120+'
    },
    subProtocols: [
      {
        id: 'kamino-multiply',
        name: 'Kamino Multiply Engine',
        relation: 'Leveraged Looping Engine',
        type: 'Structured Strategy',
        description: 'One-click flash-loan looping contract enabling leveraged exposure to JitoSOL, mSOL, and stablecoins with automated liquidation shields.',
        tvl: '$380,000,000',
        status: 'Active'
      },
      {
        id: 'kamino-vaults',
        name: 'Kamino Automated Liquidity Vaults',
        relation: 'CLMM Auto-Rebalancer',
        type: 'Automated Market Maker Vaults',
        description: 'Smart contracts automatically managing concentrated liquidity ranges on Raydium, Orca, and Meteora to maximize fee yields and eliminate range dropouts.',
        tvl: '$450,000,000',
        status: 'Active'
      },
      {
        id: 'kamino-lend-main',
        name: 'Kamino Main Lending Market',
        relation: 'Core Money Market',
        type: 'Lending & Collateral Pool',
        description: 'Multi-asset collateral pool allowing lending and borrowing of SOL, LSTs, USDC, USDT, and crypto assets with dynamic interest rate curves.',
        tvl: '$1,320,000,000',
        status: 'Active'
      }
    ]
  },
  {
    id: 'pump-fun',
    name: 'Pump.fun Platform',
    symbol: 'PUMP',
    category: 'Fair Launch Bonding Curves',
    categoryIcon: '🚀',
    description: 'Decentralized token launchpad using mathematical bonding curves to prevent presales, rug pulls, and team allocations, auto-migrating to Raydium upon liquidity cap.',
    programId: '6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P',
    website: 'https://pump.fun',
    stats: {
      dailyRevenue: '$2,800,000',
      totalTokensCreated: '3,800,000+',
      migratedToRaydium: '48,000+'
    },
    subProtocols: [
      {
        id: 'pump-migration',
        name: 'Pump Raydium Migration Contract',
        relation: 'Automatic Liquidity Seeder',
        type: 'AMM Bridge',
        description: 'On-chain migration contract that burns the bonding curve tokens and seeds $12,000 liquidity onto Raydium with burned LP tokens once a token reaches $69k market cap.',
        status: 'Active'
      },
      {
        id: 'pumpportal',
        name: 'PumpPortal Live Gateway',
        relation: 'Lightning Sniper Engine',
        type: 'Developer API & WebSocket Relay',
        description: 'WebSocket transaction relay and CPI contract allowing algorithmic traders to snipe new bonding curve launches in under 20 milliseconds.',
        status: 'Active'
      },
      {
        id: 'pump-advanced',
        name: 'Pump Advanced Trading Terminal',
        relation: 'Official Trading Suite',
        type: 'Trading UI Terminal',
        description: 'Pro trading interface featuring real-time candle charts, holder bubble maps, and instant priority gas execution.',
        status: 'Active'
      }
    ]
  },
  {
    id: 'jupiter',
    name: 'Jupiter Exchange',
    symbol: 'JUP',
    category: 'Liquidity Aggregator & Perps',
    categoryIcon: '🪐',
    description: 'Solanas essential liquidity routing backbone connecting all DEXs, orderbooks, and AMMs, alongside Jupiter Perps, Limit Orders, and DCA contracts.',
    programId: 'JUP6LkbZbjS1jKKwapdHNy74bHT3TL5vBRWuvFusJu5',
    perpsProgramId: 'PERPHjGBqRHArX4DySjwM6UJHiR3sWAatqfdBS283T',
    website: 'https://jup.ag',
    stats: {
      dailyVolume: '$2,450,000,000',
      jlpPoolTvl: '$1,250,000,000',
      perpsDailyVolume: '$850,000,000'
    },
    subProtocols: [
      {
        id: 'jupiter-perps',
        name: 'Jupiter Perpetuals & JLP Pool',
        relation: 'Decentralized Perps Engine',
        type: 'Derivatives Exchange',
        description: 'Multi-asset liquidity pool (JLP) backing leverage trading up to 100x on SOL, ETH, and BTC with 75% of trading fees distributed back to JLP holders.',
        tvl: '$1,250,000,000',
        token: 'JLP',
        status: 'Active'
      },
      {
        id: 'jupiter-dca',
        name: 'Jupiter DCA Smart Contracts',
        relation: 'Automated Investing Program',
        type: 'Algorithmic Order Engine',
        description: 'Non-custodial smart contracts executing periodic micro-swaps across pre-set time intervals with zero extra gas cost for investors.',
        tvl: '$95,000,000',
        status: 'Active'
      },
      {
        id: 'jupiter-limit-order',
        name: 'Jupiter Limit Order Engine',
        relation: 'Orderbook Matching Contract',
        type: 'On-Chain Limit Orders',
        description: 'Decentralized keeper network fulfilling limit orders by monitoring on-chain price points across all Solana AMMs.',
        status: 'Active'
      },
      {
        id: 'ape-pro',
        name: 'Ape.pro Memecoin Hub',
        relation: 'Social Trading Terminal',
        type: 'Consumer DEX',
        description: 'Mobile-first memecoin trading platform powered by Jupiter Routing and MEV-shielded transaction execution.',
        status: 'Active'
      }
    ]
  },
  {
    id: 'drift',
    name: 'Drift Protocol',
    symbol: 'DRIFT',
    category: 'Perpetuals & Multi-Asset Exchange',
    categoryIcon: '🏄',
    description: 'Full-featured decentralized exchange offering cross-collateralized perps, spot borrowing/lending, prediction markets, and automated asset vaults.',
    programId: 'dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH',
    website: 'https://drift.trade',
    stats: {
      tvl: '$740,000,000',
      dailyVolume: '$620,000,000',
      cumulativeVolume: '$42,000,000,000'
    },
    subProtocols: [
      {
        id: 'drift-perps-engine',
        name: 'Drift v2 Perps Engine',
        relation: 'Derivatives Order Matching',
        type: 'DAMM / JIT Auction',
        description: 'Just-in-time (JIT) Dutch auction matching engine combining decentralized orderbooks with dynamic AMM liquidity pools.',
        status: 'Active'
      },
      {
        id: 'drift-spot-lending',
        name: 'Drift Spot Lending & Margin Pool',
        relation: 'Collateral Money Market',
        type: 'Spot Lending',
        description: 'Cross-margin borrow/lend pool enabling traders to post yield-bearing collateral like JitoSOL to fund active leverage positions.',
        tvl: '$380,000,000',
        status: 'Active'
      },
      {
        id: 'bet-prediction',
        name: 'BET Prediction Markets by Drift',
        relation: 'Prediction Market Engine',
        type: 'Binary Options',
        description: 'Decentralized prediction market contracts allowing users to trade on election, sports, and macro-financial outcomes with instant USDC settlement.',
        status: 'Active'
      }
    ]
  },
  {
    id: 'jito',
    name: 'Jito Network',
    symbol: 'JTO',
    category: 'MEV Staking & Restaking',
    categoryIcon: '🥩',
    description: 'Solanas leading MEV infrastructure protocol capturing validator searcher tip bundles, operating the JitoSOL liquid staking pool and Jito Restaking network.',
    programId: 'Jito4APyf642JPZPx3hGc6WWJ8zPKtRbRs4P815Awbb',
    website: 'https://jito.network',
    stats: {
      tvl: '$3,180,000,000',
      totalStakedSol: '14,200,000 SOL',
      mevTipDistribution: '$180,000,000+ Distributed'
    },
    subProtocols: [
      {
        id: 'jitosol-pool',
        name: 'JitoSOL Liquid Staking Pool',
        relation: 'Staking & MEV Yield Engine',
        type: 'Liquid Staking Pool',
        description: 'The largest liquid staking pool on Solana, distributing standard Proof-of-Stake validator rewards plus on-chain MEV searcher tips directly into the token value.',
        tvl: '$3,180,000,000',
        token: 'JitoSOL',
        status: 'Active'
      },
      {
        id: 'jito-restaking',
        name: 'Jito Restaking Network',
        relation: 'Actively Validated Services (AVS)',
        type: 'Shared Security Layer',
        description: 'Cross-chain restaking framework allowing SOL and JitoSOL to secure external networks, oracles, and Layer-2 rollups in exchange for additional yield.',
        tvl: '$120,000,000',
        token: 'VRT',
        status: 'Active'
      },
      {
        id: 'jito-block-engine',
        name: 'Jito Block Engine & Tip Accounts',
        relation: 'MEV Auction Highway',
        type: 'Validator Infrastructure',
        description: 'High-throughput private mempool and auction engine allowing arbitrage searchers to submit transaction bundles without risking network spam.',
        status: 'Active'
      }
    ]
  }
];

// Curated Solana SVM Layer-2 Rollups & Scaling Networks
export const CURATED_SOLANA_L2_PROTOCOLS = [
  {
    id: 'sonic-svm',
    name: 'Sonic SVM',
    symbol: 'SONIC',
    category: 'SVM Rollup & Gaming L2',
    categoryIcon: '⚡',
    isRootPrimitive: false,
    programId: 'Sonic11111111111111111111111111111111111111',
    tvl: 68500000,
    website: 'https://sonic.game',
    twitter: 'SonicSVM',
    description: 'First atomic SVM Layer-2 rollup enabling sovereign Web3 games on Solana with custom fee markets.',
    subProtocolsCount: 12,
    subProtocols: []
  },
  {
    id: 'soon-svm',
    name: 'SOON SVM',
    symbol: 'SOON',
    category: 'SVM Rollup Stack',
    categoryIcon: '⚡',
    isRootPrimitive: false,
    programId: 'SOON111111111111111111111111111111111111111',
    tvl: 45000000,
    website: 'https://soo.network',
    twitter: 'soon_svm',
    description: 'Modular rollup stack delivering high-performance SVM execution to Ethereum, Bitcoin, and Cosmos ecosystems.',
    subProtocolsCount: 6,
    subProtocols: []
  },
  {
    id: 'magicblock',
    name: 'MagicBlock Ephemeral Rollups',
    symbol: 'MBLK',
    category: 'Ephemeral Rollup L2',
    categoryIcon: '⚡',
    isRootPrimitive: false,
    programId: 'Magic111111111111111111111111111111111111111',
    tvl: 18000000,
    website: 'https://magicblock.gg',
    twitter: 'magicblock',
    description: 'On-demand micro-rollups executing high-frequency state updates off-chain and settling back to Solana L1.',
    subProtocolsCount: 8,
    subProtocols: []
  },
  {
    id: 'light-protocol',
    name: 'Light Protocol (ZK Compression)',
    symbol: 'LIGHT',
    category: 'ZK Compression & Scaling',
    categoryIcon: '⚡',
    isRootPrimitive: false,
    programId: 'cmtDvXumGCrqC1Age74AVPhYWVXJMd8PJSawuhK6oED',
    tvl: 32000000,
    website: 'https://lightprotocol.com',
    twitter: 'LightProtocol',
    description: 'ZK state compression primitive scaling Solana ledger capacity by 1000x with privacy-preserving compressed accounts.',
    subProtocolsCount: 15,
    subProtocols: []
  },
  {
    id: 'grass-network',
    name: 'Grass Network (L2 Data Rollup)',
    symbol: 'GRASS',
    category: 'Data Rollup & DePIN L2',
    categoryIcon: '⚡',
    isRootPrimitive: false,
    programId: 'Grass111111111111111111111111111111111111111',
    tvl: 85000000,
    website: 'https://getgrass.io',
    twitter: 'getgrass_io',
    description: 'Decentralized data rollup processing web scraping validation proofs onto Solana via zero-knowledge settlement.',
    subProtocolsCount: 4,
    subProtocols: []
  },
  {
    id: 'eclipse-svm',
    name: 'Eclipse SVM',
    symbol: 'ECLIPSE',
    category: 'SVM Rollup',
    categoryIcon: '⚡',
    isRootPrimitive: false,
    programId: 'Eclps111111111111111111111111111111111111111',
    tvl: 110000000,
    website: 'https://eclipse.builders',
    twitter: 'EclipseFND',
    description: 'Ethereum L2 powered by the Solana Virtual Machine (SVM) utilizing Celestia for modular data availability.',
    subProtocolsCount: 9,
    subProtocols: []
  },
  {
    id: 'rome-protocol',
    name: 'Rome Protocol',
    symbol: 'ROME',
    category: 'Shared Sequencer & SVM L2',
    categoryIcon: '⚡',
    isRootPrimitive: false,
    programId: 'Rome111111111111111111111111111111111111111',
    tvl: 15000000,
    website: 'https://romeprotocol.xyz',
    twitter: 'RomeProtocol',
    description: 'Shared sequencer using Solana as the consensus layer for cross-rollup atomic composability.',
    subProtocolsCount: 3,
    subProtocols: []
  },
  {
    id: 'termina-svm',
    name: 'Termina SVM',
    symbol: 'TERM',
    category: 'SVM App-Rollup Network',
    categoryIcon: '⚡',
    isRootPrimitive: false,
    programId: 'Term111111111111111111111111111111111111111',
    tvl: 12000000,
    website: 'https://termina.technology',
    twitter: 'termina_tech',
    description: 'Platform allowing developers to deploy sovereign SVM rollups and appchains with dedicated blockspace.',
    subProtocolsCount: 5,
    subProtocols: []
  }
];

// Fetch all 451+ Solana Protocols from DefiLlama and merge with our deep Dependency Tree
export async function getSolanaCompleteEcosystem(forceRefresh = false) {
  const cacheFile = path.join(CACHE_DIR, 'solana_deep_ecosystem.json');
  
  if (!forceRefresh) {
    try {
      const cached = await fs.readFile(cacheFile, 'utf8');
      const data = JSON.parse(cached);
      if (data && data.protocols && (Date.now() - data.timestamp < 1000 * 60 * 30)) {
        return data;
      }
    } catch {}
  }

  let defillamaProtocols = [];
  try {
    const res = await fetch('https://api.llama.fi/protocols', { signal: AbortSignal.timeout(10000) });
    if (res.ok) {
      const all = await res.json();
      defillamaProtocols = all.filter(p => (p.chains || []).includes('Solana'));
    }
  } catch (err) {
    console.warn('[SolanaRegistry] Warning fetching DefiLlama protocols:', err.message);
  }

  // Build clean dictionary of all protocols
  const masterList = [];
  const processedSlugs = new Set();

  // 1. First add curated Root Primitives with their children
  for (const root of ROOT_PRIMITIVES_TREES) {
    processedSlugs.add(root.id);
    masterList.push({
      id: root.id,
      name: root.name,
      symbol: root.symbol,
      category: root.category,
      categoryIcon: root.categoryIcon,
      isRootPrimitive: true,
      programId: root.programId,
      website: root.website,
      description: root.description,
      stats: root.stats || {},
      subProtocolsCount: (root.subProtocols || []).length,
      subProtocols: root.subProtocols || []
    });
  }

  // 1.5 Add curated Solana SVM Layer-2 and execution rollups
  for (const l2 of CURATED_SOLANA_L2_PROTOCOLS) {
    if (!processedSlugs.has(l2.id)) {
      processedSlugs.add(l2.id);
      masterList.push({
        ...l2,
        defillamaSlug: l2.id,
        defillamaId: null
      });
    }
  }

  // 2. Add all DefiLlama protocols
  for (const p of defillamaProtocols) {
    const slug = (p.slug || p.name || '').toLowerCase().replace(/[^a-z0-9]/g, '-');
    if (processedSlugs.has(slug)) {
      // Merge TVL if available
      const existing = masterList.find(x => x.id === slug);
      if (existing) {
        existing.tvl = p.tvl || 0;
        existing.defillamaSlug = p.slug;
        existing.defillamaId = p.id;
      }
      continue;
    }

    processedSlugs.add(slug);
    masterList.push({
      id: slug,
      name: p.name,
      symbol: p.symbol === '-' ? null : p.symbol,
      category: p.category || 'DeFi',
      categoryIcon: getCategoryIcon(p.category),
      isRootPrimitive: false,
      programId: null,
      tvl: p.tvl || 0,
      website: p.url || null,
      twitter: p.twitter || null,
      description: p.description || `${p.name} operating on the Solana ecosystem.`,
      defillamaSlug: p.slug,
      defillamaId: p.id,
      subProtocolsCount: 0,
      subProtocols: []
    });
  }

  // Compute aggregate metrics
  const totalProtocols = masterList.length;
  const withTvl = masterList.filter(p => (p.tvl || 0) > 0).length;
  const withToken = masterList.filter(p => p.symbol).length;
  const totalSubProtocols = masterList.reduce((acc, p) => acc + (p.subProtocolsCount || 0), 0);
  const totalTvl = masterList.reduce((acc, p) => acc + (p.tvl || 0), 0);

  // Group by category
  const categoriesMap = {};
  for (const p of masterList) {
    const c = p.category || 'Other';
    if (!categoriesMap[c]) categoriesMap[c] = { name: c, count: 0, totalTvl: 0 };
    categoriesMap[c].count++;
    categoriesMap[c].totalTvl += (p.tvl || 0);
  }

  // Group protocols by Architecture Layer (L0, L1, L2, L3, L4)
  const layersMap = {
    L0: {
      code: 'L0',
      title: 'Layer 0: Interoperability, Oracles & Infrastructure',
      subtitle: 'Cross-chain bridges, decentralized oracles, and DePIN physical networks.',
      icon: '🌐',
      color: 'blue',
      badgeClass: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      count: 0,
      totalTvl: 0,
      protocols: []
    },
    L1: {
      code: 'L1',
      title: 'Layer 1: Base Consensus, Staking & Native Primitives',
      subtitle: 'Solana base consensus, validator engines, native staking, and native PoW commodities (ORE).',
      icon: '💎',
      color: 'emerald',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      count: 0,
      totalTvl: 0,
      protocols: []
    },
    L2: {
      code: 'L2',
      title: 'Layer 2: SVM Rollups & Execution Scaling',
      subtitle: 'Secondary execution networks, gaming SVM rollups, and ephemeral state channels settling to Solana.',
      icon: '⚡',
      color: 'purple',
      badgeClass: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      count: 0,
      totalTvl: 0,
      protocols: []
    },
    L3: {
      code: 'L3',
      title: 'Layer 3: Core DeFi & Liquidity Primitives',
      subtitle: 'Automated market makers (AMMs), decentralized lending, orderbooks, and liquidity engines.',
      icon: '🏦',
      color: 'amber',
      badgeClass: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      count: 0,
      totalTvl: 0,
      protocols: []
    },
    L4: {
      code: 'L4',
      title: 'Layer 4: Aggregators, Launchpads & Consumer Apps',
      subtitle: 'Routing aggregators, token launchpads, Telegram trading bots, and end-user applications.',
      icon: '🚀',
      color: 'pink',
      badgeClass: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      count: 0,
      totalTvl: 0,
      protocols: []
    }
  };

  for (const p of masterList) {
    p.layer = assignProtocolLayer(p);
    const lCode = p.layer.code;
    if (layersMap[lCode]) {
      layersMap[lCode].count++;
      layersMap[lCode].totalTvl += (p.tvl || 0);
      layersMap[lCode].protocols.push({
        id: p.id,
        name: p.name,
        symbol: p.symbol,
        category: p.category,
        categoryIcon: p.categoryIcon,
        tvl: p.tvl,
        website: p.website,
        description: p.description,
        isRootPrimitive: p.isRootPrimitive,
        layerReason: p.layer.reason
      });
    }
  }

  const result = {
    success: true,
    timestamp: Date.now(),
    lastUpdated: new Date().toISOString(),
    summary: {
      totalProtocols,
      rootPrimitivesCount: ROOT_PRIMITIVES_TREES.length,
      subProtocolsCount: totalSubProtocols,
      protocolsWithTvl: withTvl,
      protocolsWithToken: withToken,
      totalTvlUsd: totalTvl
    },
    categories: Object.values(categoriesMap).sort((a, b) => b.count - a.count),
    layers: layersMap,
    globalLayers: GLOBAL_LAYERS_REGISTRY,
    rootPrimitives: ROOT_PRIMITIVES_TREES,
    protocols: masterList
  };

  try {
    await fs.writeFile(cacheFile, JSON.stringify(result, null, 2), 'utf8');
  } catch {}

  return result;
}

export function assignProtocolLayer(protocol) {
  const name = (protocol.name || '').toLowerCase();
  const cat = (protocol.category || '').toLowerCase();
  const desc = (protocol.description || '').toLowerCase();
  const id = (protocol.id || '').toLowerCase();

  // L0: Bridges, Cross-Chain, Oracles, DePIN, Infrastructure
  if (
    cat.includes('bridge') || cat.includes('cross chain') || cat.includes('oracle') ||
    cat.includes('depin') || cat.includes('infrastructure') ||
    name.includes('wormhole') || name.includes('pyth') || name.includes('debridge') ||
    name.includes('switchboard') || name.includes('allbridge') || name.includes('helium') ||
    name.includes('render') || name.includes('hivemapper') || name.includes('layerzero') ||
    name.includes('mayan') || name.includes('teleport') || name.includes('axelar') ||
    name.includes('chainlink')
  ) {
    return {
      code: 'L0',
      title: 'Layer 0: Interoperability, Oracles & Infrastructure',
      badge: 'L0 Infra & Cross-Chain',
      color: 'blue',
      reason: 'Underlying data availability, oracle feeds, hardware networks (DePIN), or cross-chain bridge messaging.'
    };
  }

  // L2: SVM Rollups, Off-chain execution, Ephemeral Rollups, Scaling
  if (
    cat.includes('rollup') || cat.includes('l2') || cat.includes('scaling') ||
    name.includes('sonic') || name.includes('soon') || name.includes('magicblock') ||
    name.includes('eclipse') || name.includes('light protocol') || name.includes('ephemeral') ||
    name.includes('rome') || name.includes('termina') ||
    desc.includes('rollup') || desc.includes('svm l2') || desc.includes('layer 2')
  ) {
    return {
      code: 'L2',
      title: 'Layer 2: SVM Rollups & Execution Scaling',
      badge: 'L2 SVM Scaling',
      color: 'purple',
      reason: 'Secondary execution environment, horizontal scaling, or ephemeral rollup settling onto Solana.'
    };
  }

  // L1: Base Consensus, Validator infrastructure, Native Staking & Digital Commodities
  if (
    cat.includes('liquid staking') || cat.includes('staking') || cat.includes('mining') || cat.includes('pow') ||
    name.includes('solana') || name.includes('ore') || name.includes('jito') || name.includes('marinade') ||
    name.includes('blazestake') || name.includes('solblaze') || name.includes('coal') || name.includes('miner') ||
    desc.includes('proof-of-work') || desc.includes('validator') || desc.includes('mev')
  ) {
    return {
      code: 'L1',
      title: 'Layer 1: Base Consensus, Staking & Native Primitives',
      badge: 'L1 Base & PoW Commodity',
      color: 'emerald',
      reason: 'Solana base consensus, validator engines, native staking, and native digital commodities like ORE.'
    };
  }

  // L4: Aggregators, Launchpads, Telegram Bots, Consumer Apps, NFTs, Social
  if (
    cat.includes('launchpad') || cat.includes('telegram bot') || cat.includes('bot') ||
    cat.includes('nft') || cat.includes('gaming') || cat.includes('social') ||
    cat.includes('indexes') || cat.includes('luck') || cat.includes('prediction') ||
    name.includes('jupiter') || name.includes('pump.fun') || name.includes('sanctum') ||
    name.includes('trojan') || name.includes('bonkbot') || name.includes('photon') ||
    name.includes('bullx') || name.includes('tensor') || name.includes('magic eden') ||
    desc.includes('aggregator') || desc.includes('launchpad') || desc.includes('trading bot')
  ) {
    return {
      code: 'L4',
      title: 'Layer 4: Aggregators, Consumer Apps & Bots',
      badge: 'L4 Apps & Aggregators',
      color: 'pink',
      reason: 'End-user client applications, routing aggregators, launchpads, and high-frequency trading bots.'
    };
  }

  // L3: Core DeFi & Liquidity Primitives (DEX, AMM, Lending, Perps, Yield)
  return {
    code: 'L3',
    title: 'Layer 3: Core DeFi & Liquidity Primitives',
    badge: 'L3 Liquidity & Money Market',
    color: 'amber',
    reason: 'Smart contract liquidity pools, automated market makers, lending money markets, and perpetuals.'
  };
}

export const GLOBAL_LAYERS_REGISTRY = [
  {
    layer: 'L0',
    title: 'Layer 0: Interoperability, Consensus Frameworks & Shared Infrastructure',
    description: 'The foundational substrate enabling multiple independent blockchains to communicate, bridge assets, share security, or verify data.',
    color: 'blue',
    protocols: [
      { name: 'Cosmos (Tendermint/IBC)', category: 'Interoperability Hub', symbol: 'ATOM', role: 'Inter-Blockchain Communication protocol connecting sovereign Appchains.' },
      { name: 'Polkadot', category: 'Shared Security Substrate', symbol: 'DOT', role: 'Relay chain providing pooled security and cross-consensus messaging (XCM).' },
      { name: 'LayerZero', category: 'Omnichain Messaging', symbol: 'ZRO', role: 'Cross-chain communication primitive for arbitrary message passing.' },
      { name: 'Wormhole', category: 'Cross-Chain Relayer', symbol: 'W', role: 'Generic messaging protocol bridging Solana, Ethereum, and 30+ chains.' },
      { name: 'Celestia', category: 'Modular Data Availability', symbol: 'TIA', role: 'Pluggable DA layer ordered for rollups and sovereign L2/L3 execution.' },
      { name: 'Pyth Network', category: 'High-Fidelity Oracle Substrate', symbol: 'PYTH', role: 'First-party sub-second financial market oracle broadcasting to 50+ chains.' },
      { name: 'Chainlink (CCIP)', category: 'Cross-Chain Interoperability', symbol: 'LINK', role: 'Cross-chain protocol for tokens and arbitrary data transfer.' },
      { name: 'EigenLayer', category: 'Restaking Substrate', symbol: 'EIGEN', role: 'Shared cryptoeconomic security layer powering Actively Validated Services (AVSs).' }
    ]
  },
  {
    layer: 'L1',
    title: 'Layer 1: Sovereign Base Consensus & Settlement Blockchains',
    description: 'Sovereign monolithic or modular blockchains responsible for consensus, direct state execution, and native settlement.',
    color: 'emerald',
    protocols: [
      { name: 'Solana', category: 'High-Performance Monolithic L1', symbol: 'SOL', role: 'Proof-of-History (PoH) single-state high throughput execution engine (65k TPS).' },
      { name: 'Ethereum', category: 'Decentralized Settlement L1', symbol: 'ETH', role: 'Global state machine and primary settlement foundation for rollup ecosystems.' },
      { name: 'Bitcoin', category: 'Proof-of-Work Monetary L1', symbol: 'BTC', role: 'Decentralized digital commodity and secure immutable monetary ledger.' },
      { name: 'Sui Network', category: 'Object-Centric Move L1', symbol: 'SUI', role: 'Parallel execution blockchain using object-centric data model and Narwhal/Bullshark.' },
      { name: 'Aptos', category: 'Move Execution L1', symbol: 'APT', role: 'Parallelized Block-STM Move smart contract execution blockchain.' },
      { name: 'Avalanche', category: 'Multi-Subnet Consensus L1', symbol: 'AVAX', role: 'Avalanche consensus protocol powering Primary Network and custom Subnets.' },
      { name: 'NEAR Protocol', category: 'Sharded L1', symbol: 'NEAR', role: 'Nightshade dynamic state sharding blockchain with account abstraction.' },
      { name: 'ORE Protocol (on Solana)', category: 'Solana PoW Commodity', symbol: 'ORE', role: 'Fair-launch digital commodity primitive directly mined on Solana runtime.' }
    ]
  },
  {
    layer: 'L2',
    title: 'Layer 2: Execution Rollups, SVM Scaling & State Offloading',
    description: 'Secondary execution networks that bundle transactions to reduce gas fees, increase speed, and settle proofs onto an L1 base layer.',
    color: 'purple',
    protocols: [
      { name: 'Arbitrum One', category: 'Optimistic Rollup (EVM)', symbol: 'ARB', role: 'Dominant Ethereum L2 rollup with Nitro execution stack and multi-billion TVL.' },
      { name: 'Base (Coinbase)', category: 'OP Stack Rollup', symbol: 'BASE', role: 'Consumer-focused Ethereum L2 built on Optimisms OP Stack with low fees.' },
      { name: 'Sonic SVM', category: 'Solana SVM Layer 2', symbol: 'SONIC', role: 'First atomic SVM rollup designed specifically for sovereign Web3 gaming on Solana.' },
      { name: 'SOON SVM', category: 'Solana Stack Rollup', symbol: 'SOON', role: 'Decoupled SVM rollup delivering Solana execution speed to Ethereum and beyond.' },
      { name: 'MagicBlock Ephemeral Rollups', category: 'Solana Ephemeral State L2', symbol: 'MBLK', role: 'Micro-rollups spun up on demand for millisecond gaming ticks, settled back to Solana.' },
      { name: 'Eclipse', category: 'SVM on Ethereum L2', symbol: 'ECLIPSE', role: 'First Ethereum L2 powered by Solana Virtual Machine using Celestia DA.' },
      { name: 'Polygon PoS / zkEVM', category: 'ZK & Sidechain Scaler', symbol: 'POL', role: 'Aggregated blockchain network connecting Ethereum execution via zero-knowledge proofs.' },
      { name: 'Optimism (OP Mainnet)', category: 'Superchain Rollup', symbol: 'OP', role: 'Foundational OP Stack rollups forming an interconnected Superchain mesh.' }
    ]
  },
  {
    layer: 'L3',
    title: 'Layer 3: Application-Specific Chains & Hyper-Specialized Environments',
    description: 'Custom app-chains built on top of Layer 2s for zero-cost transactions, custom token gas, dedicated throughput, or hyper-focused app economies.',
    color: 'amber',
    protocols: [
      { name: 'Degen Chain', category: 'Arbitrum Orbit L3', symbol: 'DEGEN', role: 'Ultra-low cost L3 built on Base / Arbitrum Orbit for community micro-transactions.' },
      { name: 'Xai Network', category: 'Arbitrum Orbit Gaming L3', symbol: 'XAI', role: 'Gaming-centric L3 blockchain enabling gasless wallet interactions for video games.' },
      { name: 'ApeChain', category: 'Arbitrum Orbit L3', symbol: 'APE', role: 'Dedicated entertainment and gaming chain powered by ApeCoin on Arbitrum.' },
      { name: 'Termina / SVM Subnets', category: 'Solana App-Rollup L3', symbol: 'TERM', role: 'Modular SVM execution network enabling custom rollups on top of Solana roots.' },
      { name: 'Lens Network', category: 'Social L3 (zkSync Hyperchain)', symbol: 'LENS', role: 'Decentralized social graph processing millions of micro-actions off-L1.' }
    ]
  }
];

function getCategoryIcon(cat) {
  if (!cat) return '🧩';
  const c = cat.toLowerCase();
  if (c.includes('dex')) return '⚡';
  if (c.includes('lending')) return '🏛️';
  if (c.includes('liquid staking') || c.includes('staking')) return '🌊';
  if (c.includes('derivatives') || c.includes('perpetual')) return '🏄';
  if (c.includes('mining') || c.includes('pow')) return '⛏️';
  if (c.includes('depin')) return '📡';
  if (c.includes('bridge')) return '🌉';
  if (c.includes('yield')) return '🌾';
  if (c.includes('rwa')) return '🏢';
  if (c.includes('launchpad')) return '🚀';
  if (c.includes('oracle')) return '🔮';
  if (c.includes('gaming') || c.includes('nft')) return '🎮';
  return '🧩';
}
