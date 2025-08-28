import { NextApiRequest, NextApiResponse } from 'next';

// List of known bot user agents
const BOT_USER_AGENTS = [
  'Googlebot',
  'Bingbot',
  'Slurp',
  'DuckDuckBot',
  'Baiduspider',
  'YandexBot',
  'facebookexternalhit',
  'Twitterbot',
  'LinkedInBot',
  'WhatsApp',
  'SkypeUriPreview',
  'crawler',
  'spider',
  'bot'
];

// Simple bot detection
function isBot(userAgent: string): boolean {
  if (!userAgent) return true; // No user agent = suspicious
  
  const ua = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(botUA => ua.includes(botUA.toLowerCase()));
}

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 5; // 5 requests per minute
  
  const current = rateLimitStore.get(ip);
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  const userAgent = req.headers['user-agent'] || '';
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  const ipString = Array.isArray(ip) ? ip[0] : ip;
  
  // Check if request is from a bot
  if (isBot(userAgent)) {
    return res.status(403).json({ message: 'Access denied' });
  }
  
  // Check rate limiting
  if (!checkRateLimit(ipString)) {
    return res.status(429).json({ message: 'Too many requests' });
  }
  
  // Optional referer check - only validate if present
  const referer = req.headers.referer;
  const host = req.headers.host;
  
  // If referer exists, validate it. If not, allow (some browsers don't send referer)
  if (referer) {
    const validHosts = [
      host,
      'localhost:3000',
      'localhost',
      'yokota.dev',
      'www.yokota.dev'
    ].filter(Boolean);
    
    const isValidReferer = validHosts.some(validHost => 
      referer.includes(validHost as string)
    );
    
    if (!isValidReferer) {
      return res.status(403).json({ message: 'Invalid referer' });
    }
  }
  
  // Generate vCard content
  const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:Rodrigo Yokota
N:Yokota;Rodrigo;;;
ORG:Software Engineer
TITLE:Software Engineer
TEL:+55 44 99951-5457
EMAIL:rodrigo@yokota.dev
URL:https://yokota.dev
URL:https://github.com/ryok90
URL:https://linkedin.com/in/rodrigo-yokota
NOTE:Software Engineer passionate about building great products
END:VCARD`;

  // Set headers for file download
  res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="rodrigo-yokota.vcf"');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  return res.status(200).send(vCardContent);
}