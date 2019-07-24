import React, { Component, Fragment } from 'react'

import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Table from '../Components/Table'

import '../Styles/Examples/testexample.css'

export default class TestExample extends Component {
  render() {
    return (
      <Fragment>
        <h3>Navbar example</h3>
        <Navbar />
        <h3>Card example</h3>
        <div className="card-container">
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
