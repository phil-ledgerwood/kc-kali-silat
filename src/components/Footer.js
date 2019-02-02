import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
 
 render() {
   return (
  
    <footer className="container">
      <div id="footerMenu" className="navbar-menu">
        <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/">
            Home
            </Link>
            <Link className="navbar-item" to="/about-our-group">
            About Our Group
            </Link>
            <Link className="navbar-item" to="/about-kali">
            About Kali
            </Link>
            <Link className="navbar-item" to="/about-silat">
            About Silat
            </Link>
            <Link className="navbar-item" to="/equipment">
            Equipment
            </Link>
            <Link className="navbar-item" to="/contact">
            Contact
            </Link>
        </div>
      </div>
    </footer>
  )}
}

export default Footer
