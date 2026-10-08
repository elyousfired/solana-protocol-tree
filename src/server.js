import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getSolanaCompleteEcosystem, ROOT_PRIMITIVES_TREES } from './solanaRegistry.js';
import { scanProgramOnChain } from './cpiScanner.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3005;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

export async function handleRequest(req, res) {
  const host = req.headers.host || `localhost:${PORT}`;
  const reqUrl = new URL(req.url, `http://${host}`);
  const pathname = reqUrl.pathname;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    // API 1: Complete Solana Ecosystem & Composability Tree
    if (pathname === '/api/solana/tree' && req.method === 'GET') {
      const forceRefresh = reqUrl.searchParams.get('refresh') === 'true';
      const data = await getSolanaCompleteEcosystem(forceRefresh);
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      });
      res.end(JSON.stringify(data));
      return;
    }

    // API 2: Specific Root Primitive Tree (e.g. ORE, Raydium, Pump.fun, Sanctum)
    if (pathname === '/api/solana/primitive' && req.method === 'GET') {
      const primitiveId = (reqUrl.searchParams.get('id') || 'ore').toLowerCase();
      const primitive = ROOT_PRIMITIVES_TREES.find(p => p.id === primitiveId || p.symbol.toLowerCase() === primitiveId);
      if (!primitive) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Primitive not found in root registry' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, primitive }));
      return;
    }

    // API 3: Live On-Chain Program Scanner
    if (pathname === '/api/solana/scan' && req.method === 'GET') {
      const programId = reqUrl.searchParams.get('programId') || 'oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp';
      const limit = parseInt(reqUrl.searchParams.get('limit') || '15', 10);
      try {
        const scanResult = await scanProgramOnChain(programId, limit);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(scanResult));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
      return;
    }

    // Static Files
    let filePath = pathname === '/' ? path.join(PUBLIC_DIR, 'index.html') : path.join(PUBLIC_DIR, pathname);
    try {
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      const content = await fs.readFile(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } catch (err) {
    console.error('Server error:', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, error: err.message }));
  }
}

if (!process.env.VERCEL) {
  const server = http.createServer(handleRequest);
  server.listen(PORT, () => {
    console.log(`\n================================================================`);
    console.log(`🌲 Solana Deep Protocol & Composability Tree running!`);
    console.log(`🌐 Dashboard URL:    http://localhost:${PORT}`);
    console.log(`📡 Tree API:         http://localhost:${PORT}/api/solana/tree`);
    console.log(`⛏️ ORE Primitive:    http://localhost:${PORT}/api/solana/primitive?id=ore`);
    console.log(`🔍 Program Scanner:  http://localhost:${PORT}/api/solana/scan?programId=oreV2ZymfFTXgxcWizeN6uFzrhK4Y93X82JbJ4s5gWJ`);
    console.log(`================================================================\n`);
  });
}

export default handleRequest;
