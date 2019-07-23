import React, { Component, Fragment } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'

import '../Styles/Examples/testexample.css'
import Table from '../Components/Table'

export default class TestExample extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <h3>Card example</h3>
        <div className="container">
          <Card />
          <Card />
          <Card />
        </div>
        <h3>Table example</h3>
        <Table />
      </Fragment>
    )
  }
}
