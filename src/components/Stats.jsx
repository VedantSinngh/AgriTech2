import React from 'react';
import usersIcon from '../assets/users.png'; // Update with your actual icon paths
import databaseIcon from '../assets/database.png';
import uploadIcon from '../assets/upload.png';
import compassIcon from '../assets/compass.png';

const Stats = ({ users, dataSize, uploads, countries }) => (
    <section className="bg-white py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-200 p-8 rounded">
                <p className="text-2xl font-bold">{users}</p>
                <p className="text-gray-600">Active users</p>
                <img src={usersIcon} alt="Users" className="mt-5 mb-8 inline-block w-15 h-12" />
            </div>
            <div className="bg-blue-200 p-8 rounded">
                <p className="text-2xl font-bold">{dataSize}</p>
                <p className="text-gray-600">Data insights</p>
                <img src={databaseIcon} alt="Database" className="mt-5 inline-block w-15 h-12" />
            </div>
            <div className="bg-blue-200 p-8 rounded">
                <p className="text-2xl font-bold">{uploads}</p>
                <p className="text-gray-600">Data uploaded</p>
                <img src={uploadIcon} alt="Uploads" className="mt-5 inline-block w-15 h-12" />
            </div>
            <div className="bg-gray-200 p-8 rounded">
                <p className="text-2xl font-bold">{countries}</p>
                <p className="text-gray-600">Country</p>
                <img src={compassIcon} alt="Areas" className="mt-5 inline-block w-15 h-12" />
            </div>
        </div>
    </section>
);

export default Stats;
