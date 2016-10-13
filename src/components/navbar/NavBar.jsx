import React, { PropTypes } from 'react';

/** Styles */
import 'suitcss-utils-flex';
import '../../style/colors.css';
import './navbar.css';

/** Component */
const NavBar = ({ logo, children }) => (
  <div className="Navbar u-flex u-flexAlignItemsCenter">
    <img className="Navbar-icon" src={logo} role="presentation" />
    { children && <ul className="Navbar-items u-flex">
      { React.Children.map(children, (link, idx) => (
        <li className="Navbar-item" key={idx}>{link}</li>
      )) }
    </ul>
    }
  </div>
)

NavBar.propTypes = {
  logo: PropTypes.string.isRequired
}

export default NavBar;