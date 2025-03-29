import React from 'react'

export default function Footer() {
  return (
    <div><footer className="flex flex-col items-center p-6 bg-gray-800 text-gray-200">

    
    <div className="text-2xl font-bold mb-4">

        Online Bookshop
    </div>
   
    <nav className="space-x-4">

        <a href="#about" className="hover:underline">About Us</a>
        <a href="#privacy" className="hover:underline">Privacy Policy</a>
        <a href="#terms" className="hover:underline">Terms of Service</a>
        <a href="#contact" className="hover:underline">Contact Us</a>

    </nav>
    
    <div className="mt-4 text-sm">

        © 2025 Online Bookshop. All rights reserved.
    </div>
</footer>
</div>
  )
}
