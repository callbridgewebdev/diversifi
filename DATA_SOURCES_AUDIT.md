# Data Source Audit & Recommendations

## Current Data Status

| Section | Data Source | Real-Time? | Status |
| :--- | :--- | :--- | :--- |
| **Crypto Prices** | `wss://stream.binance.com:9443/ws/!ticker@arr` | ✅ Yes | **Live**. Uses Binance WebSocket for Price, Volume, and 24h Change. |
| **Crypto Metadata** | `src/data/market-assets.ts` | ❌ No | **Mocked**. Market Cap and Circulating Supply are simulated based on rank. |
| **Forex Prices** | `src/hooks/use-forex-prices.ts` | ❌ No | **Mocked**. Uses `Math.random()` to simulate tick movements for execution logic. |
| **Binary Options** | `src/hooks/use-forex-prices.ts` | ❌ No | **Mocked**. Payout percentages and strike prices are simulated. |
| **Charts** | TradingView Widget (Iframe) | ✅ Yes | **Live**. Visuals are real-time, but disconnected from execution logic. |

> **Critical Discrepancy**: In Forex and Binary Options, the *visual chart* is real (TradingView), but the *price used for trade execution* (`useForexPrices`) is random. This means a user could see a price of 1.0850 on the chart but execute a trade at a simulated price of 1.0855.

---

## API Recommendations (Forex & Binary)

To achieve 100% real-time data for execution logic, you need to replace `src/hooks/use-forex-prices.ts` with a real market data feed.

### 1. Twelve Data (Recommended for Dev/Startups)
- **Why**: Offers a **WebSocket** API for Forex and Crypto, which is essential for the "ticking" price effect needed in the terminal.
- **Free Tier**: 800 credits/day (good for testing).
- **Features**: Real-time bid/ask prices for major pairs (EUR/USD, USD/JPY).
- **Integration**:
  ```typescript
  const socket = new WebSocket('wss://ws.twelvedata.com/v1/quotes?apikey=YOUR_KEY');
  socket.send(JSON.stringify({ action: "subscribe", params: { symbols: "EUR/USD,USD/JPY" } }));
  ```

### 2. TraderMade
- **Why**: specialized in Forex data with a very reliable WebSocket feed.
- **Free Tier**: 1,000 requests/month (REST), trial for WebSocket.
- **Best For**: High-accuracy Forex feeds if you are willing to pay a small monthly fee for the WebSocket.

### 3. Polygon.io
- **Why**: Extremely high-performance, institutional-grade data.
- **Cost**: Paid (Starter plan ~$19/mo for Currencies).
- **Best For**: Production apps requiring <50ms latency.

### 4. OANDA API (Brokerage Integration)
- **Why**: If you intend to actually execute trades on the real market (not just a simulation/game), you must integrate with a broker like OANDA.
- **Features**: Provides both Data Streaming and Order Execution endpoints.

---

## Action Plan to Reach 100% Real-Time

1.  **Register** for an API key from **Twelve Data** (easiest start).
2.  **Create** a new hook `src/hooks/use-realtime-forex.ts` that connects to their WebSocket.
3.  **Replace** the import in `ForexTrading.tsx` and `BinaryOptions.tsx` to use the new hook.
4.  **Sync** the Chart widget symbol with the API symbol format to ensure the visual chart matches the execution price.