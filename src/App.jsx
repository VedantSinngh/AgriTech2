import React, { Suspense, lazy } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; // Ensure this path is correct
import './App.css'; // Ensure this path is correct
import './styles/global.css';
import { DarkModeProvider } from './DarkModeContext';
import { useDarkMode } from './DarkModeContext';
import ReactDOM from 'react-dom';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Settings = lazy(() => import('./pages/Settings'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));

// Placeholder loading component
const Loading = () => <div>Loading...</div>;

const Layout = ({ children }) => {
  const path = window.location.pathname;
  return (
    <div>
      {path !== '/signup' && (
        <Suspense fallback={<Loading />}>
          <Navbar />
        </Suspense>
      )}
      <main>{children}</main>
      {path !== '/signup' && (
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
};

const App = () => {

  const { isDarkMode } = useDarkMode();

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Layout>
                  <Home />
                </Layout>
              </Suspense>
            }
          />

          <Route
            path="/settings"
            element={
              <Suspense fallback={<Loading />}>
                <Layout>
                  <Settings />
                </Layout>
              </Suspense>
            }
          />

          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Loading />}>
                <Layout>
                  <Dashboard />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/how-it-works"
            element={
              <Suspense fallback={<Loading />}>
                <Layout>
                  <HowItWorks />
                </Layout>
              </Suspense>
            }
          />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
