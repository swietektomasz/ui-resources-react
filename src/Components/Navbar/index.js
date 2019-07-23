import React, { Component } from 'react'
import '../../Styles/Navbar/navbar.css'
import Nav from './Nav'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Nav path="" title={'Home'} />
        <Nav path="testexample" title={'Test example'} />
      </nav>
    )
  }
}
