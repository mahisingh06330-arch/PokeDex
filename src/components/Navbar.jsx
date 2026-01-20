import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from './logo-pokemon.png'


const Menu = () => (
  <>
  <a href="#">Home</a>
    <a href="#">Pokédex</a>
    <a href="#">Video Games & Apps</a>
    <a href="#">Trading Card Game</a>
    <a href="#">Animation</a>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
    <div className="NAVBAR">
      <div className="poke__navbar">
        <div className="poke__navbar-links">
          <div className="poke__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="poke__navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="poke__navbar-menu">
          {toggleMenu
            ? <RiCloseLine  size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line  size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="poke__navbar-menu_container scale-up-center">
              <div className="poke__navbar-menu-container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  )
}

export default Navbar