import React, { Component } from 'react';
import { MenuItems } from './MenuItems'
import Item from 'antd/lib/list/Item';
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
        <img src={logo} alt='logo' className='co-logo'></img>
        <h1 className='navbar-logo'>Avernus</h1>
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