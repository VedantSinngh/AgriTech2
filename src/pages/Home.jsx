import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You can also use fetch if you prefer
import Stats from '../components/Stats';
import leafImage from '../assets/leaf.png';

const Home = () => {
    const [activeUsers, setActiveUsers] = useState(null);
    const [dataSize, setDataSize] = useState(null);
    const [uploads, setUploads] = useState(null);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace these URLs with your actual API endpoints
                const usersResponse = await axios.get('/api/active-users');
                const dataSizeResponse = await axios.get('/api/data-size');
                const uploadsResponse = await axios.get('/api/uploads');
                const countriesResponse = await axios.get('/api/countries');
                
                setActiveUsers(usersResponse.data.activeUsers);
                setDataSize(dataSizeResponse.data.dataSize);
                setUploads(uploadsResponse.data.uploads);
                setCountries(countriesResponse.data.countries);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <section className="bg-blue-100 p-12 text-center md:text-left">
                <div className="container mx-auto grid md:grid-cols-2 gap-4 items-center">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Analyze and secure your agricultural data, effortlessly!</h1>
                        <p className="text-lg text-gray-600 mb-8">Empowering your foresight: Predict tomorrow’s prices today with future time data!</p>
                        <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700">Explore</button>
                    </div>
                    <div>
                        <img src={leafImage} alt="leaf icon" className="mx-auto mt-8 w-40 h-40" />
                    </div>
                </div>
            </section>

            <Stats 
                users={activeUsers !== null ? `${activeUsers} Active Users` : 'Loading...'} 
                dataSize={dataSize !== null ? `${dataSize} CSV Files` : 'Loading...'} 
                uploads={uploads !== null ? `${uploads} Data Uploads` : 'Loading...'}
                countries={countries.length > 0 ? `${countries.join(', ')}` : 'Loading...'}
            />
        </div>
    );
};

export default Home;
