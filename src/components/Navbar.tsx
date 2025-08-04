"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-lg sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 text-2xl font-bold tracking-tight text-blue-700 hover:text-blue-800 transition-colors" aria-label="Home">
            <div className="w-10 h-10 relative">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-blue-600 hover:text-blue-700 transition-colors"
                fill="currentColor"
              >
                {/* Catfish body */}
                <ellipse cx="45" cy="50" rx="35" ry="15" className="fill-blue-600"/>
                
                {/* Catfish head */}
                <ellipse cx="25" cy="50" rx="18" ry="12" className="fill-blue-700"/>
                
                {/* Catfish tail */}
                <path d="M80 50 L95 40 L95 45 L88 50 L95 55 L95 60 Z" className="fill-blue-500"/>
                
                {/* Top fin */}
                <path d="M40 35 L50 25 L60 35 L55 40 L45 40 Z" className="fill-blue-500"/>
                
                {/* Bottom fin */}
                <path d="M40 65 L50 75 L60 65 L55 60 L45 60 Z" className="fill-blue-500"/>
                
                {/* Side fins */}
                <ellipse cx="35" cy="42" rx="8" ry="4" className="fill-blue-500" transform="rotate(-20 35 42)"/>
                <ellipse cx="35" cy="58" rx="8" ry="4" className="fill-blue-500" transform="rotate(20 35 58)"/>
                
                {/* Whiskers (barbels) - characteristic of catfish */}
                <line x1="15" y1="48" x2="8" y2="45" stroke="currentColor" strokeWidth="2" className="stroke-blue-800"/>
                <line x1="15" y1="52" x2="8" y2="55" stroke="currentColor" strokeWidth="2" className="stroke-blue-800"/>
                <line x1="18" y1="46" x2="12" y2="42" stroke="currentColor" strokeWidth="1.5" className="stroke-blue-700"/>
                <line x1="18" y1="54" x2="12" y2="58" stroke="currentColor" strokeWidth="1.5" className="stroke-blue-700"/>
                
                {/* Eye */}
                <circle cx="22" cy="48" r="3" className="fill-white"/>
                <circle cx="23" cy="47" r="2" className="fill-blue-900"/>
                <circle cx="23.5" cy="46.5" r="0.8" className="fill-white"/>
                
                {/* Mouth */}
                <ellipse cx="12" cy="52" rx="3" ry="1.5" className="fill-blue-900"/>
              </svg>
            </div>
            <span>Penjualan Lele</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" 
              aria-label="Home"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" 
              aria-label="Produk"
            >
              Produk
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" 
              aria-label="Kontak"
            >
              Kontak
            </Link>
            <Link 
              href="/admin" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg" 
              aria-label="Admin Panel"
            >
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={handleToggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1" 
                onClick={handleCloseMenu}
                aria-label="Home"
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1" 
                onClick={handleCloseMenu}
                aria-label="Produk"
              >
                Produk
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1" 
                onClick={handleCloseMenu}
                aria-label="Kontak"
              >
                Kontak
              </Link>
              <Link 
                href="/admin" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg w-fit" 
                onClick={handleCloseMenu}
                aria-label="Admin Panel"
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 