# Institutional Admin Integration Guide

This document outlines the governance protocols and technical architecture of the DiversiFi Admin Hub.

## 1. Access Protocol
The Governance Hub is segregated from the retail terminal for enhanced security.
- **Entry Point**: `/auth/admin/login`
- **Protected Routes**: `/admin/*`
- **Requirement**: Node must have the `role = 'admin'` attribute in the `profiles` registry.

## 2. Master Admin Authority
The system recognizes specific master email nodes that are granted automatic authority during initialization:
- `admin@gmail.com`
- `admin@diversifi.cc`

**Elevation Logic**: If these emails sign up via the retail terminal, an internal database trigger (`auto_confirm_admin`) automatically confirms their email to allow immediate institutional sync.

## 3. Database Governance
The admin system is powered by advanced PostgreSQL triggers and functions:

### is_admin() Function
A security definer function used by Row Level Security (RLS) to permit nodes to view global transactions, user lists, and KYC data.

### process_daily_yields() Procedure
The core engine that iterates through all active DFI Plans, calculates ROI, and credits wallets.
- **Yield Cap**: Enforces the 210% absolute profit limit.
- **Interest Overrides**: Automatically credits referrers with 10% of their direct network's daily yield.
- **Audit Logs**: Generates "ROI" and "Override" transaction nodes for every credit.

## 4. Manual Node Elevation
To promote a retail node to institutional authority, execute the following SQL in the terminal:

```sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'user@example.com';
```

## 5. Security Protocols
- **RLS Enforced**: All governance tables have Row Level Security enabled.
- **Encrypted Handshake**: API communications are protected via JWT-based node authentication.
- **Audit Ledger**: Every manual override or payout is logged in the permanent `transactions` hub.

## 6. Maintenance Cycle
- **Monday**: Payout Audit Cycle (Requests are reviewed).
- **Tuesday**: Global Sync Cycle (Capital is released to external BEP20 nodes).
- **Daily 00:00 UTC**: Yield distribution and interest override calculations.

---
*Protocol Status: Operational | Security Level: 4*