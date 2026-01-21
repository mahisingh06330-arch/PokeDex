// import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
// import '../Styles/navbar.css'
// import logo from '../assets/logo-pokemon.png'


// const Menu = () => (
//   <>
//   <a href="#"><i class="fa-regular fa-house"></i>Home</a>
//     <a href="#"><i class="fa-brands fa-square-web-awesome-stroke"></i>Pokédex</a>
//     <a href="#"> <i class="fa-solid fa-puzzle-piece"></i>Video Games & Apps</a>
//     <a href="#"><i class="fa-brands fa-laravel"></i>Trading Card Game</a>
//     <a href="#"><i class="fa-regular fa-circle-play"></i>Animation</a>
//   </>
// )

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   return (
//     <>
//     <div className="NAVBAR">
//       <div className="poke__navbar">
//         <div className="poke__navbar-links">
//           <div className="poke__navbar-links_logo">
//             <img src={logo} alt="logo" />
//           </div>
//           <div className="poke__navbar-links_container">
       
//           </div>
//         </div>
//         <div className="poke__navbar-menu">
//           {toggleMenu
//             ? <RiCloseLine  size={27} onClick={() => setToggleMenu(false)} />
//             : <RiMenu3Line  size={27} onClick={() => setToggleMenu(true)} />
//           }
//           {toggleMenu && (
//             <div className="poke__navbar-menu_container scale-up-center">
//               <div className="poke__navbar-menu-container-links">
//                 <Menu />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       </div>
//     </>
//   )
// }

// export default Navbar


import React, { useState } from "react";
import '../Styles/navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* TOP BAR */}
      <div className="nav-top">
        <div className="nav-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            alt="Pokemon Logo"
          />
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <span className="color home"></span>
          <i className="fa-solid fa-house"></i>
          Home
        </li>

        <li>
          <span className="color pokedex"></span>
          <i className="fa-solid fa-book"></i>
          Pokédex
        </li>

        <li>
          <span className="color games"></span>
          <i className="fa-solid fa-gamepad"></i>
          Video Games & Apps
        </li>

        <li>
          <span className="color cards"></span>
          <i className="fa-solid fa-clone"></i>
          Trading Card Game
        </li>

        <li>
          <span className="color anime"></span>
          <i className="fa-solid fa-play"></i>
          Animation
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
