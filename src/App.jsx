import Pokemon from './Pokemon'
import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './app.css'

const App = () => {
  return (
    <>
    <Header/>
    <Pokemon/>
    <Footer/>
    </>
  )
}

export default App