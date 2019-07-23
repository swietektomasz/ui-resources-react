import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../../Styles/Navbar/Nav/nav.css'

export default class Nav extends Component {
  render() {
    const { title, path } = this.props
    return (
      <NavLink
        exact
        to={`/${path}`}
        activeClassName="navbar__link__active"
        className="navbar__link"
      >
        {title}
      </NavLink>
    )
  }
}
