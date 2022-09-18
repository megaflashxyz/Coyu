import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.png'
const Header = () => {

    const     tweetText = encodeURIComponent(`type your thoughts here`)

    return ( 
        
            <div className="text-xl bg-white flex border-b border-gray-100 p-2">
					<Link to="/" className="flex items-center">
						<img src={logo} alt="logo" className="w-8 h-8 mx-4" />
						<h1 className="font-semibold">Coverview</h1>

					</Link>

					<div className="ml-auto md:mr-4 ">
						<Link to="/faq" className="text-gray-700 hover:text-gray-800 text-base font-Nunito mx-4"><span className="hidden md:inline-block">How to use</span></Link>
						<a href="https://www.megaflash.xyz" target="_parent" className="mx-2 bg-blue-400 md:text-sm text-xs rounded-full px-4 font-semibold text-white p-1">Home</a>
					</div>

				</div>
    
     );
}
 
export default Header;
