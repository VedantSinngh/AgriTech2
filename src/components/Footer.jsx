import React from 'react';
import instagramIcon from '../assets/instagram.png'; // Adjust the path as needed
import twitterIcon from '../assets/twitter.png'; // Adjust the path as needed
import facebookIcon from '../assets/facebook.png'; // Adjust the path as needed

const Footer = () => (
    <footer className="bg-gray-200 py-8 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-80">
            <div className="px-4">
                <h3 className="font-bold">About</h3>
                <ul className="mt-2 space-y-2">
                    <li><a href="#" className="text-gray-600 hover:text-black">About us</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-black">Terms of use</a></li>
                </ul>
            </div>
            <div className="px-4 md:col-span-2 text-right">
                <h3 className="font-bold">Connect with us</h3>
                <div className="mt-2 flex justify-end space-x-4 ">
                    <a href="#" className="text-gray-600 hover:text-black">
                        <img src={instagramIcon} alt="Instagram" className="h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-black">
                        <img src={twitterIcon} alt="Twitter" className="h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-black">
                        <img src={facebookIcon} alt="Facebook" className="h-6" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
