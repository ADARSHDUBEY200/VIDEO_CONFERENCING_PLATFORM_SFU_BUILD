import React from 'react'
import Link from "next/link"

const Navbar = () => {
    return (
        
        <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-[#0A0F1F] via-[#0C1F3A] to-[#1A3D8F] text-white shadow-md shadow-black hover:shadow-lg hover:shadow-black transition-all">
            <Link href="/"><h1 className="text-2xl font-bold cursor-pointer hover:text-gray-300">YOOM</h1></Link>
            <ul className="flex space-x-6">
                <li className="hover:text-gray-300 cursor-pointer font-bold text-[1.2rem]">Home</li>
                <li className="hover:text-gray-300 cursor-pointer font-bold text-[1.2rem]">About Us</li>
                <li className="hover:text-gray-300 cursor-pointer font-bold text-[1.2rem]">Contact</li>
                <li className="hover:text-gray-300 cursor-pointer font-bold text-[1.2rem]">Blog</li>
            </ul>
        </nav>
    )
}

export default Navbar