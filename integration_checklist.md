# Supabase Integration Checklist

This document tracks the integration status of application pages with the Supabase backend.

## 🔐 Authentication & Profile (100%)
- [x] **Login** (`src/pages/Login.tsx`) - Uses `supabase.auth.signInWithPassword`.
- [x] **Signup** (`src/pages/Signup.tsx`) - Uses `supabase.auth.signUp`, creates `profiles` and `wallets` entries.
- [x] **Settings** (`src/pages/Settings.tsx`) - Fetches and updates `profiles` table.
- [x] **Admin Login** (`src/pages/admin/AdminLogin.tsx`) - Checks specific RLS role permissions.
- [x] **Forgot Password** (`src/pages/ForgotPassword.tsx`) - Uses Supabase Auth recovery.
- [x] **Reset Password** (`src/pages/ResetPassword.tsx`) - Uses Supabase Auth update user.

## 🏦 Financial Core (100%)
- [x] **Dashboard** (`src/pages/Dashboard.tsx`) - Real-time sync with `wallets` and `active_plans`.
- [x] **Wallet** (`src/pages/Wallet.tsx`) - Real-time sync with `wallets` and `transactions`. Handles fund consolidation.
- [x] **Deposit** (`src/pages/Deposit.tsx`) - Inserts into `transactions`, uploads receipts to Storage bucket.
- [x] **Withdrawals** (`src/pages/Withdrawals.tsx`) - Checks `wallets` balance, inserts `Withdrawal` transaction.
- [x] **Transactions History** (`src/pages/TransactionHistory.tsx`) - Fetches from `transactions` table.

## 📈 Trading & Strategy (100%)
- [x] **Diversifi Plan** (`src/pages/DiversifiPlan.tsx`) - Deducts from `wallets`, creates `active_plans` entry.
- [x] **AI Bot** (`src/pages/AIBot.tsx`) - Simulates trades and updates `wallets` (main_balance) + logs `ROI` transactions.
- [x] **Spot Trading** (`src/components/trading/TradePanel.tsx`) - Deducts/Credits `wallets`, logs `Trade` transactions.
- [x] **Futures Trading** (`src/components/trading/FuturesTradePanel.tsx`) - Deducts margin from `wallets`, logs `Trade` transactions.
- [x] **Forex Trading** (`src/pages/ForexTrading.tsx`) - Deducts margin from `wallets`, logs `Trade` transactions.
- [x] **Binary Options** (`src/pages/BinaryOptions.tsx`) - Deducts stake from `wallets`, logs `Trade` transactions.
- [x] **Signals** (`src/pages/Signals.tsx`) - Fetches data from `signals` table.
- [x] **Analytics Hub** (`src/pages/AnalyticsHub.tsx`) - Aggregates data from `transactions` table.

## 🤝 Network & Affiliates (100%)
- [x] **Referrals** (`src/pages/Referrals.tsx`) - Fetches profile referral codes and referral counts.
- [x] **Overrides** (`src/pages/Overrides.tsx`) - Fetches specific `Override` transactions and wallet balances.
- [x] **Rewards** (`src/pages/Rewards.tsx`) - Calculates progress based on `profiles` referral counts.
- [x] **Leaderboard** (`src/pages/Leaderboard.tsx`) - Aggregates `wallets` (roi_balance) and `profiles`.

## 🛠️ Support & Content (50%)
- [x] **Contact** (`src/pages/support/Contact.tsx`) - Inserts into `contact_messages` table.
- [x] **Blog** (`src/pages/Blog.tsx`) - Fetches from `posts` table.
- [ ] **Markets** (`src/pages/Markets.tsx`) - *Currently uses Binance WebSocket (External). No DB needed unless "Favorites" feature is added.*
- [ ] **FAQ/Guides/Docs** - *Currently Static Content. No DB required.*

## 🛡️ Admin Console (100%)
- [x] **Admin Dashboard** (`src/pages/admin/AdminDashboard.tsx`) - Aggregates total stats from `profiles`, `wallets`, `transactions`.
- [x] **User Management** (`src/pages/admin/UserManagement.tsx`) - CRUD operations on `profiles` table.
- [x] **Deposits/Withdrawals Hub** - Uses `TransactionHistory` component (Connected).

---

### 🟢 Status: Fully Integrated
The core trading, financial, and user management flows are fully connected to the database.