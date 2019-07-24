import React, { Component } from 'react'

import '../../Styles/Table/table.css'

export default class Table extends Component {
  render() {
    return (
      <table>
        <caption>A typical table</caption>
        <tr>
          <td>First column</td>
          <td>Second column</td>
          <td>Third column</td>
        </tr>
        <tr>
          <td>First column</td>
          <td>Second column</td>
          <td>Third column</td>
        </tr>
      </table>
    )
  }
}
