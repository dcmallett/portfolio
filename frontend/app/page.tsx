
import Home from '@/app/home/page'
import About from '@/app/about/page'
import Header from '@/components/Header'

const page = () => {
  return (
    <>
    <Header />
    <main className='min-h-screen bg-blue-50 text-gray-800 font-sans'>
      <section id='home'>
      <Home />
      </section>
      <section id='about'>
        <About />
      </section>
    </main>
    </>

  )
}



export default page