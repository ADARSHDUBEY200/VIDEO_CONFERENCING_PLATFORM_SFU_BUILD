import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#0A0A1C] via-[#141A33] to-[#2A4F9E] text-white px-6 py-12 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

               
                <div>
                    <h1 className="text-4xl font-semibold mb-4">YOOM</h1>
                    <p className="text-sm leading-relaxed text-gray-300">
                        Astra Security Suite makes security simple and hassle-free for
                        thousands of websites & businesses worldwide.
                    </p>

                   
                    <div className="flex items-center gap-4 mt-6 text-xl">
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-square-instagram"></i>
                    </div>

                    
                    <p className="mt-6 text-gray-300 text-sm">See our glowing reviews on</p>
                    <div className="flex gap-4 mt-2">
                        <img src="/trustpilot-logo.png" className="h-6" alt="Trustpilot" />
                        <img src="/capterra-logo.png" className="h-6" alt="Capterra" />
                    </div>
                </div>

                
                <div>
                    <h3 className="font-semibold text-lg mb-4">Product</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li>Features</li>
                        <li>Agencies</li>
                        <li>Security Audits</li>
                        <li>Hacked Websites</li>
                        <li>E-Commerce</li>
                        <li>Affiliates</li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="font-semibold text-lg mb-4">CMS Security</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li>WordPress</li>
                        <li>Magento</li>
                        <li>Prestashop</li>
                        <li>Opencart</li>
                        <li>Joomla</li>
                        <li>Drupal</li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="font-semibold text-lg mb-4">Company</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li>About</li>
                        <li>Customers</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Knowledge Base</li>
                        <li>Demo</li>
                    </ul>
                </div>

            </div>

           
            <div className="max-w-7xl mx-auto mt-10 border-t border-gray-600 pt-6">
                <div className="flex flex-col md:flex-row justify-between text-sm text-gray-300">

                    <p>Made with ❤️ in 🇮🇳 🇺🇸 🇫🇷 🇩🇪</p>

                    <div className="flex gap-6 mt-3 md:mt-0">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Report a vulnerability</a>
                    </div>
                </div>

                <p className="text-gray-400 text-sm mt-4">
                    Copyright © 2025 ASTRA IT, Inc. All Rights Reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer