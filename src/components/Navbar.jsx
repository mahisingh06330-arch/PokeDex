import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from './logo-pokemon.png'


const Menu = () => (
  <>
  <a href="#"><i class="fa-regular fa-house"></i>Home</a>
    <a href="#"><i class="fa-brands fa-square-web-awesome-stroke"></i>Pokédex</a>
    <a href="#"> <i class="fa-solid fa-puzzle-piece"></i>Video Games & Apps</a>
    <a href="#"><i class="fa-brands fa-laravel"></i>Trading Card Game</a>
    <a href="#"><i class="fa-regular fa-circle-play"></i>Animation</a>
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