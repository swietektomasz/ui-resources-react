import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home/'
import TestExample from './Examples/'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/testexample" exact component={TestExample} />
      </Router>
    )
  }
}

export default App
