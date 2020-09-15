import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems'
import './Navbar.css'
import { Button } from './Button'
import logo from '../Img/logo.png'

class Navbar extends Component {

  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className='NavbarItems'>
        <Link to='/'>
          <img src={logo} alt='logo' className='co-logo'></img>
        </Link>
        <Link to='/'>
          <h1 className='navbar-logo'>IAB</h1>
        </Link>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>{item.title}</a>
              </li>
            )
          })}
        </ul>
        <Button>Login</Button>
      </nav>
    )
  }
}

export default Navbar