import React from 'react'
const page = () => {
  return (
    <>
    <section className='pt-20 min-h-screen flex items-center'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='mx-w-lg'>
          <h1 className='typing-animation text-4xl md:text-5xl font-bold text-blue-900 mb-6'>
            Daniel Mallett
          </h1>
          <p className='text-lg text-gray-500 mb-8 typeing-animation'>
              A passionate Full Stack Developer with a knack for creating innovative solutions. I specialize in full-stack development, with a focus on building scalable and efficient applications. My goal is to leverage technology to solve real-world problems and enhance user experiences.
          </p>
          <a href="#projects" className="bg-blue-500 hover:bg-blue-900 text-white px-6 py-3 rounded font-medium transition-colors duration-300">
              View my work
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default page
