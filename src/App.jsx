import Pokemon from './components/Pokemon.jsx'
import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

const App = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Pokemon/>
    <Footer/>
    </>
  )
}

export default App
