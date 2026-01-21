import '../Styles/header.css'
import React, { useState } from 'react'
import PokemonLogo from '../assets/logo-pokemon.png'


const Header = () => {
   
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <>
      <div className="images">
        <div className="logo">
          <img id="poke_logo" src='https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png' alt='logo' />
        </div>
        <div className="logo">
          <img id='shop' src='https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemoncenter-79x45.png' alt='shop' />
        </div>
        <div className="logo">
          <img id='about' src='https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/corporate-en.png' alt='about' />
        </div>
        <div className="logo">
          <img id='card_game' src='https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/tcg-175-en.png' alt='card-game' />
        </div>
        <div className="logo">
          <img id='legends' src='https://www.pokemon.com/static-assets/content-assets/cms2/img/misc/gus/promotions/pokemon-legends-z-a-176x50-en.png' alt='legends' />
        </div>
        <div className="logo">
          <img id='forums' src='https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/community-forums-175x50-en.png' alt='forums' />
        </div>
        <div className="logo">
          <img id='mobile' src='https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/mobile-apps-176x50-en.png' alt='mobile' />
        </div>
      </div>


<div className="mobile-toggle"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
  <div className="poke_logo">
          <img src={PokemonLogo} alt="logo" />
        </div>
  <i className="fa-solid fa-bars"></i>
</div>





      {/* <div className="navbar"> */}
      <div className={`navbar ${isMobileMenuOpen ? "mobile-open" : ""}`}>

        <div className="home common">
          <i class="fa-regular fa-house"></i>
          <span>Home</span>
          <div className="color-bar1"></div>
        </div>
        <div className="pokedex common">
          <i class="fa-brands fa-square-web-awesome-stroke"></i>
          <span>Pokédex</span>
          <div className="color-bar2"></div>
        </div>
        <div className="game common">
          <i class="fa-solid fa-puzzle-piece"></i>
          <span>Video Games & Apps</span>
          <div className="color-bar3"></div>
        </div>
        <div className="card-Game common">
          <i class="fa-brands fa-laravel"></i>
          <span>Trading Card Game</span>
          <div className="color-bar4"></div>
        </div>
        <div className="anime common">
          <i class="fa-regular fa-circle-play"></i>
          <span>Animation</span>
          <div className="color-bar5"></div>
        </div>
        <div className="event-play common">
          <i class="fa-solid fa-trophy"></i>
          <span>Play! Pokémon Events</span>
          <div className="color-bar6"></div>
        </div>
        <div className="news common">
          <i class="fa-regular fa-newspaper"></i>
          <span>News</span>
          <div className="color-bar7"></div>
        </div>
      </div>
      <header className='title'>
        <h1>PokéWorld Insights</h1>
        <p>Explore. Discover. Understand.</p>
      </header>
    </>
  )
}

export default Header