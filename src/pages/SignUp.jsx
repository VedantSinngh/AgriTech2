import React from 'react';
import appleIcon from '../assets/apple-icon.png'; // Update with your actual paths
import googleIcon from '../assets/Google Logo.png';

const SignUp = () => (
    <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-1/3 bg-gray-700 rounded-lg p-10">
            <h2 className="text-3xl font-bold mb-6">Welcome To AgriTech</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-400 text-sm mb-2">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="paradox@gmail.com"
                        className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-400 text-sm mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="6+ strong character"
                        className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="repeat-password" className="block text-gray-400 text-sm mb-2">Confirm password</label>
                    <input
                        type="password"
                        id="repeat-password"
                        placeholder="6+ strong character"
                        className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>
                <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center text-sm text-gray-400">
                        <input type="checkbox" className="form-checkbox text-yellow-800 mr-2" />
                        Remember for 30 days
                    </label>
                    <a href="#" className="text-sm text-gray-400">Forgot password?</a>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-gray-200"
                >
                    Create an account
                </button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-400 mb-4">Sign Up with</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="p-2 rounded-lg w-8 h-10 invert">
                        <img src={appleIcon} alt="Apple" />
                    </a>
                    <a href="#" className="p-2 rounded-lg w-11 h-12">
                        <img src={googleIcon} alt="Google" />
                    </a>
                </div>
            </div>
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">Don't have an account? <a href="#" className="text-white-500">Sign Up</a></p>
            </div>
        </div>
    </div>
);

export default SignUp;
