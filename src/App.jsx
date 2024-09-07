import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { UserProvider } from './context/UserContext'; // Import UserProvider

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home.jsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
// const PredictionAnalysis = lazy(() => import('./pages/PredictionAnalysis.jsx'));
const Settings = lazy(() => import('./pages/Settings.jsx'));
const Notification = lazy(() => import('./pages/Notification.jsx'));
const SignUp = lazy(() => import('./pages/SignUp.jsx'));
const HowItWorks = lazy(() => import('./pages/HowItWorks.jsx'));

// Component to conditionally render Navbar and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbarFooter = location.pathname !== '/signup';

  return (
    <div className="App">
      {showNavbarFooter && <Suspense fallback={<div>Loading Navbar...</div>}><Navbar /></Suspense>}
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </ErrorBoundary>
      {showNavbarFooter && <Suspense fallback={<div>Loading Footer...</div>}><Footer /></Suspense>}
    </div>
  );
};

function App() {
  return (
    <Router>
      <UserProvider> {/* Wrap with UserProvider */}
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/notification' element={<Notification />} />
            <Route path='/settings' element={<Settings />} />
            {/* <Route path='/prediction-analysis' element={<PredictionAnalysis />} /> */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/how-it-works' element={<HowItWorks />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </Layout>
      </UserProvider>
    </Router>
  );
}

export default App;
