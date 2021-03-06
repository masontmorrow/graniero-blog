import React from 'react'
import { Link } from 'gatsby'
import search from '../img/search.svg'
import follow from '../img/follow.svg'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar" role="navigation" aria-label="main-navigation">
        <button className="logo">esc</button>
        {/* Hamburger menu */}
        {/* <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <div className="whitespace"></div>
        <button type="button">
          <img src={follow} alt="Social follow dropdown menu button"/>
        </button>
        <Link className="navbar-item" to="/products">
          Archivio
        </Link>
        <button type="button">
          <img src={search} alt="Search input trigger icon"/>
        </button>
  </nav>
  )}
}

export default Navbar
