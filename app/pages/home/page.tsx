import React from 'react'
import Link from 'next/link'
const Page = () => {
  return (
    <section className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='animate-fade-in'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-600 bg-clip-text text-transparent animate-glow'>
            Daniel Mallett
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up'>
            Full Stack Developer & Creative Problem Solver
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in'>
            <Link href={'#projects'}
              className='bg-gradient-to-r from purple-500 to pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
            >
            View my work
            </Link>
            <Link href={'#contact'}
              className='border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105'
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className='mt-16'>
          <div className='w-32 h-32 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-pulse'></div>
        </div>
      </div>
    </section>
  )
}

export default Page
