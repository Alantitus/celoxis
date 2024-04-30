import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import './App.css'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App
