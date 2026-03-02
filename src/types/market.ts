export interface MarketAsset {
  symbol: string; // e.g., BTCUSDT
  name: string; // e.g., Bitcoin
  logo: string; // Path to logo image
  price: number;
  priceChange1h: number; // percentage change in 1 hour
  priceChange24h: number; // percentage change in 24 hours
  priceChange7d: number; // percentage change in 7 days
  marketCap: number;
  volume24h: number; // 24h trading volume
  circulatingSupply: number;
}