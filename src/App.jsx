import React from 'react'
import './App.css'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Icons from './components/Icons'
import NewArrrivcal from './components/Featured'
import Contact from './components/Contact'
import Goochi from './components/Goochi'

function App() {

  return (
    <div className="App">
        <Header />
        <Hero />
        <Gallery />
        <NewArrrivcal />
        <Icons />
        <Goochi />
        <Contact />
    </div>
  )
}

export default App
