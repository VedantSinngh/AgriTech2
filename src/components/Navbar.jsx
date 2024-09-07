// src/components/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <header className="bg-white p-4 shadow">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold flex items-center">
                    <img src={logo} alt="logo" className="h-6 mr-2 invert" />
                    AgriTech
                </div>
                <nav className="flex space-x-6">
                    <button onClick={() => handleNavigation('/')} className="text-gray-600 hover:text-black">Home</button>
                    <button onClick={() => handleNavigation('/how-it-works')} className="text-gray-600 hover:text-black">How It Works</button>
                    <button onClick={() => handleNavigation('/dashboard')} className="text-gray-600 hover:text-black">Dashboard</button>
                    <button onClick={() => handleNavigation('/settings')} className="text-gray-600 hover:text-black">Settings</button>
                </nav>
                <button 
                    onClick={() => handleNavigation('/signup')}
                    className="border px-4 py-2 rounded text-black hover:bg-gray-200"
                >
                    Sign In
                </button>
            </div>
        </header>
    );
};

export default Navbar;
