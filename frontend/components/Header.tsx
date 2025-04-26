"use client"
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)


  const toggleMobileMenu = () => {  
    setisMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className='bg-white shadow-md fixed w-full z-50'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <nav className='flex justify-between items-center py-4'>
          <span className='text-2xl font-bold text-blue-900'>
            <Link href={'/home'}>DM</Link>
          </span>
          <button 
            className='md:hidden text-blue-900 focus:outline-none'
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            ): (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            )}
          </button>
          
          {/* Desktop Menu */}
          <ul className='hidden md:flex space-x-8'>
            <li>
              <Link 
                href='#home' 
                className='block py-3 px-4 text-blue-900 font-medium hover:bg-blue-50 hover-text-blue-500 transition-colors' 
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href='#about' 
                className='block py-3 px-4 text-blue-900 font-medium hover:bg-blue-50 hover-text-blue-500 transition-colors' 
              >
                About
              </Link>
            </li>
            <li>
              <a 
                href="#contact" 
                className='block py-3 px-4 text-blue-900 font-medium hover:bg-blue-50 hover-text-blue-500 transition-colors' 

              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className='block py-3 px-4 text-blue-900 font-medium hover:bg-blue-50 hover-text-blue-500 transition-colors' 
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden bg-white border-t border-blue-100'>
            <ul className='flex flex-col'>
              <li>
                <Link 
                  href='#home' 
                  className='block py-3 px-4 text-blue-900 font-medium hover:bg-blue-50 hover-text-blue-500 transition-colors' 
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href='#about' 
                  className='block py-3 px-4 text-blue-900 font-medium hover:bg-blue-50 hover-text-blue-500 transition-colors' 
                >
                  About
                </Link>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className='block py-3 px-4 text-blue-900 font-medium hover:bg-blue-50 hover-text-blue-500 transition-colors' 

                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className='block py-3 px-4 text-blue-900 font-medium hover:bg-blue-50 hover-text-blue-500 transition-colors' 
                >
                  Projects
                </a>
              </li>
            </ul>
          </div> 
        )}
      </div>
    </header>
  )
}

export default Header
