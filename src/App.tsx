import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Markets from "./pages/Markets";
import AIBot from "./pages/AIBot";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import SpotTrading from "./pages/SpotTrading";
import Futures from "./pages/Futures";
import ForexTrading from "./pages/ForexTrading";
import BinaryOptions from "./pages/BinaryOptions";
import Rewards from "./pages/Rewards";
import Leaderboard from "./pages/Leaderboard";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Support from "./pages/Support";
import FAQ from "./pages/support/FAQ";
import Contact from "./pages/support/Contact";
import Guides from "./pages/support/Guides";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import NotFound from "./pages/NotFound";
import DiversifiPlan from "./pages/DiversifiPlan";
import Referrals from "./pages/Referrals";
import AffiliateEarnings from "./pages/AffiliateEarnings";
import Deposit from "./pages/Deposit";
import Withdrawals from "./pages/Withdrawals";
import TransactionHistory from "./pages/TransactionHistory";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Documentation from "./pages/Documentation";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import CookiePolicy from "./pages/legal/CookiePolicy";
import AnalyticsHub from "./pages/AnalyticsHub";
import TradeDetails from "./pages/TradeDetails";
import ActivePlansList from "./pages/ActivePlansList";
import ActivePlanDetails from "./pages/ActivePlanDetails";
import NewsUpdates from "./pages/NewsUpdates";

// Admin Imports
import AdminLayout from "@/components/admin/AdminLayout";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import UserManagement from "@/pages/admin/UserManagement";
import AdminTransactionHub from "@/pages/admin/AdminTransactionHub";
import KYCManagement from "@/pages/admin/KYCManagement";
import PlanManagement from "@/pages/admin/PlanManagement";
import AuditLedger from "@/pages/admin/AuditLedger";
import NewsManagement from "@/pages/admin/NewsManagement";
import SystemConfig from "@/pages/admin/SystemConfig";
import AffiliateManagement from "@/pages/admin/AffiliateManagement";
import RewardsManagement from "@/pages/admin/RewardsManagement";
import AdminAnalytics from "@/pages/admin/AdminAnalytics";
import PortfolioJournal from "@/pages/admin/PortfolioJournal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Governance Hub Routes */}
            <Route path="/auth/admin/login" element={<AdminLogin />} />
            <Route path="/admin/*" element={<ProtectedRoute><AdminLayout><Routes>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="analytics" element={<AdminAnalytics />} />
                <Route path="journal" element={<PortfolioJournal />} />
                <Route path="ledger" element={<AuditLedger />} />
                <Route path="users" element={<UserManagement />} />
                <Route path="plans" element={<PlanManagement />} />
                <Route path="affiliate" element={<AffiliateManagement />} />
                <Route path="rewards" element={<RewardsManagement />} />
                <Route path="kyc" element={<KYCManagement />} />
                <Route path="deposits" element={<AdminTransactionHub />} />
                <Route path="withdrawals" element={<AdminTransactionHub />} />
                <Route path="news" element={<NewsManagement />} />
                <Route path="settings" element={<SystemConfig />} />
              </Routes></AdminLayout></ProtectedRoute>} />

            {/* Terminal Hub Routes */}
            <Route path="*" element={<Layout><Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/press" element={<Press />} />
                <Route path="/trade" element={<TradeDetails />} />
                <Route path="/markets" element={<Markets />} />
                <Route path="/support" element={<Support />} />
                <Route path="/support/faq" element={<FAQ />} />
                <Route path="/support/contact" element={<Contact />} />
                <Route path="/support/guides" element={<Guides />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                
                {/* Secure Protocol Layers */}
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/news-updates" element={<ProtectedRoute><NewsUpdates /></ProtectedRoute>} />
                <Route path="/active-plans" element={<ProtectedRoute><ActivePlansList /></ProtectedRoute>} />
                <Route path="/plan-details/:id" element={<ProtectedRoute><ActivePlanDetails /></ProtectedRoute>} />
                <Route path="/wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
                <Route path="/deposit" element={<ProtectedRoute><Deposit /></ProtectedRoute>} />
                <Route path="/withdrawals" element={<ProtectedRoute><Withdrawals /></ProtectedRoute>} />
                <Route path="/transactions" element={<ProtectedRoute><TransactionHistory /></ProtectedRoute>} />
                <Route path="/plan" element={<ProtectedRoute><DiversifiPlan /></ProtectedRoute>} />
                <Route path="/referrals" element={<ProtectedRoute><Referrals /></ProtectedRoute>} />
                <Route path="/affiliate-earnings" element={<ProtectedRoute><AffiliateEarnings /></ProtectedRoute>} />
                <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                <Route path="/ai-bot" element={<ProtectedRoute><AIBot /></ProtectedRoute>} />
                <Route path="/binary-options" element={<ProtectedRoute><BinaryOptions /></ProtectedRoute>} />
                <Route path="/forex-trading" element={<ProtectedRoute><ForexTrading /></ProtectedRoute>} />
                <Route path="/spot-trading" element={<ProtectedRoute><SpotTrading /></ProtectedRoute>} />
                <Route path="/futures" element={<ProtectedRoute><Futures /></ProtectedRoute>} />
                <Route path="/rewards" element={<ProtectedRoute><Rewards /></ProtectedRoute>} />
                <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
                <Route path="/analytics-hub" element={<ProtectedRoute><AnalyticsHub /></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
              </Routes></Layout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;