import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [commodity, setCommodity] = useState('');
    const [dateRange, setDateRange] = useState('');
    const [prediction, setPrediction] = useState(null);

    const applyFilters = async () => {
        try {
            const response = await axios.post('http://localhost:5000/predict/future', {
                commodity,
                dateRange
            });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Error fetching prediction:", error);
        }
    };

    return (
        <main style={{ display: 'flex', gap: '20px', padding: '20px' }}>
            <aside style={{ backgroundColor: '#CEE0F2', width: '250px', padding: '20px', paddingLeft: '10px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h3>User Profiles</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <img src="user.jpg" alt="User Profile Picture" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                    <span>Shaurya Verma</span>
                </div>
                <h3>Filters</h3>
                <div>
                    <input type="text" value={commodity} onChange={e => setCommodity(e.target.value)} placeholder="Commodity" style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                    <input type="text" value={dateRange} onChange={e => setDateRange(e.target.value)} placeholder="Date Range" style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                    <button onClick={applyFilters} style={{ backgroundColor: '#305881', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', fontSize: '14px' }}>Apply Filters</button>
                </div>
            </aside>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h3>Real-time Price Predictions</h3>
                    <div style={{ width: '100%', height: '400px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        {/* Placeholder for prediction results */}
                        {prediction && (
                            <div>
                                <h4>Prediction Result:</h4>
                                <pre>{JSON.stringify(prediction, null, 2)}</pre>
                            </div>
                        )}
                    </div>
                </section>

                <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h3>Historical Data Analysis</h3>
                    <div style={{ width: '100%', height: '400px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        {/* Placeholder for chart or other content */}
                    </div>
                </section>

                <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h3>Weather Conditions Impact</h3>
                    <div style={{ width: '100%', height: '400px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        {/* Placeholder for chart or other content */}
                    </div>
                </section>

                <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h3>Market Demand Trends</h3>
                    <div style={{ width: '100%', height: '400px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        {/* Placeholder for chart or other content */}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Dashboard;
