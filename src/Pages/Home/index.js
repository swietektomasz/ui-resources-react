import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Choose one of the examples</h1>
        <ul>
          <li>
            <Link to="/testexample">Test example</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
