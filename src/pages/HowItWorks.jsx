// src/pages/HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
    return (
        <div className="bg-gray-100 font-sans">
            <div className="max-w-7xl mx-auto p-4">

                {/* Title */}
                <h1 className="text-2xl font-bold mt-6">Predict Commodity Prices</h1>

                {/* Filters */}
                <div className="flex space-x-2 mt-4">
                    <button className="bg-gray-200 px-4 py-2 rounded">All</button>
                    <button className="bg-gray-200 px-4 py-2 rounded">About</button>
                    <button className="bg-gray-200 px-4 py-2 rounded">Data</button>
                    {/* <button className="bg-gray-200 px-4 py-2 rounded">Collections</button> */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Gallery</button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="display1.jpeg" alt="Price Prediction Model" className="w-full h-50 object-cover" />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="display10.jpeg" alt="Customizable Filters" className="w-full h-full object-cover" />
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="display3.jpeg" alt="Data Visualization Tools" className="w-full h-50 object-cover" />
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="display4.jpeg" alt="Alerts & Notifications" className="w-full h-full object-cover" />
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="display5.jpeg" alt="User Profiles" className="w-full h-full object-cover" />
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="display6.jpeg" alt="Data Visualization" className="w-full h-50 object-cover" />
                    </div>

                    {/* Card 7 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="display7.jpeg" alt="Alerts & Updates" className="w-full h-full object-cover" />
                    </div>

                    {/* Card 8 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="display8.jpeg" alt="User Preferences" className="w-full h-50 object-cover" />
                    </div>
                </div>

            
            </div>
        </div>
    );
};

export default HowItWorks;