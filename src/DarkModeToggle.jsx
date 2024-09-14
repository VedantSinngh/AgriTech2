// src/DarkModeToggle.js
import React from 'react';
import { useDarkMode } from './DarkModeContext'; // Import the custom hook
import './styles/DarkModeToggle.css';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode(); // Access the context

    return (
        <div className="dark_mode">
            <input
                type="checkbox"
                className="dark_mode_input"
                id="darkmode-toggle"
                checked={isDarkMode}
                onChange={toggleDarkMode}
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <svg className="sun" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
                <svg className="moon" viewBox="0 0 24 24">
                    <path d="M21.64 13.88A9 9 0 0 1 12.12 4.36a7 7 0 1 0 9.52 9.52z" />
                </svg>
            </label>
        </div>
    );
};

export default DarkModeToggle; // Ensure this is the default export
