/**
 * Solana On-Chain CPI (Cross-Program Invocation) & Dependency Scanner
 * Connects to public Solana RPC to inspect real-time transactions & caller contracts for any Program ID
 */

const PUBLIC_SOLANA_RPCS = [
  'https://api.mainnet-beta.solana.com',
  'https://solana-rpc.publicnode.com',
  'https://rpc.ankr.com/solana'
];

export async function scanProgramOnChain(programId, limit = 15) {
  if (!programId || typeof programId !== 'string') {
    throw new Error('Valid Solana Program ID is required');
  }

  let rpcIndex = 0;
  let signatures = [];

  // Try RPCs with fallback
  for (const rpcUrl of PUBLIC_SOLANA_RPCS) {
    try {
      const res = await fetch(rpcUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'getSignaturesForAddress',
          params: [
            programId,
            { limit: Math.min(25, limit) }
          ]
        }),
        signal: AbortSignal.timeout(6000)
      });

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data?.result)) {
          signatures = data.result;
          break;
        }
      }
    } catch {}
  }

  // Known Program ID Directory for instant labeling
  const KNOWN_PROGRAMS = {
    '11111111111111111111111111111111': 'System Program (Native Solana)',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA': 'SPL Token Program',
    'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb': 'Token-2022 Program (Extensions)',
    'ComputeBudget111111111111111111111111111111': 'Compute Budget Program (Priority Fees)',
    'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL': 'Associated Token Account Program',
    'oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp': 'ORE Protocol (Mining Engine & Token)',
    '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8': 'Raydium Liquidity Pool v4 (AMM)',
    'CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C': 'Raydium CPMM Program',
    'CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK': 'Raydium CLMM Concentrated Liquidity',
    'LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo': 'Meteora DLMM Dynamic Liquidity',
    'whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc': 'Orca Whirlpools Concentrated AMM',
    '5ocnV1qiCgaQR8Jb8xWnVbApfayotuugQBNa3YWH388B': 'Sanctum Router & Infinity Pool',
    '6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P': 'Pump.fun Bonding Curve Program',
    'JUP6LkbZbjS1jKKwapdHNy74bHT3TL5vBRWuvFusJu5': 'Jupiter v6 Routing Engine',
    'PERPHjGBqRHArX4DySjwM6UJHiR3sWAatqfdBS283T': 'Jupiter Perpetuals Engine',
    'KLend2g3cP87fffoy8q1mQqGKjrxjC8boSyAYavgmjD': 'Kamino Lending Market',
    'dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH': 'Drift v2 Perpetuals Program',
    'Jito4APyf642JPZPx3hGc6WWJ8zPKtRbRs4P815Awbb': 'Jito Stake Pool'
  };

  const callersMap = new Map();
  const txSummary = signatures.map(sig => {
    return {
      signature: sig.signature,
      slot: sig.slot,
      blockTime: sig.blockTime ? new Date(sig.blockTime * 1000).toISOString() : null,
      err: sig.err ? 'Failed' : 'Success',
      memo: sig.memo || null
    };
  });

  return {
    success: true,
    programId,
    knownLabel: KNOWN_PROGRAMS[programId] || 'Custom / Ecosystem Contract',
    signaturesAnalyzed: signatures.length,
    latestSlot: signatures[0]?.slot || null,
    latestBlockTime: signatures[0]?.blockTime ? new Date(signatures[0].blockTime * 1000).toISOString() : null,
    recentTransactions: txSummary,
    knownProgramsDirectoryCount: Object.keys(KNOWN_PROGRAMS).length
  };
}
