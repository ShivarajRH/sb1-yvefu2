import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { AdsProvider } from './context/AdsContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PageAds from './components/ads/PageAds';
import WelcomeModal from './components/modals/WelcomeModal';
import { useWelcomeModal } from './hooks/useWelcomeModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import StocksPage from './pages/StocksPage';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import TermsPage from './pages/TermsPage';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  const { isOpen, closeModal } = useWelcomeModal();

  return (
    <Router>
      <AuthProvider>
        <CurrencyProvider>
          <WishlistProvider>
            <ThemeProvider>
              <AdsProvider>
                <div className="min-h-screen flex flex-col bg-theme-background text-theme-text">
                  <Navigation />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/search" element={<SearchPage />} />
                      <Route path="/stocks" element={<StocksPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/signup" element={<SignupPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route
                        path="/profile"
                        element={
                          <ProtectedRoute>
                            <ProfilePage />
                          </ProtectedRoute>
                        }
                      />
                      <Route
                        path="/wishlist"
                        element={
                          <ProtectedRoute>
                            <WishlistPage />
                          </ProtectedRoute>
                        }
                      />
                    </Routes>
                  </main>
                  <PageAds />
                  <Footer />
                  <WelcomeModal isOpen={isOpen} onClose={closeModal} />
                </div>
                <Toaster position="top-right" />
              </AdsProvider>
            </ThemeProvider>
          </WishlistProvider>
        </CurrencyProvider>
      </AuthProvider>
    </Router>
  );
}
