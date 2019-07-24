import React, { Component } from 'react'
import '../../Styles/Card/card.css'
import example1 from '../../Static/example1.jpg'

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="card__image" src={example1} alt="example1" />
        <div className="card__content">
          <h4 className="card__title">Lorem Ipsum</h4>
          <p className="card_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu quam lacus. Morbi
            suscipit consectetur elementum. Vestibulum id arcu vehicula, egestas urna et, iaculis
            est. Vestibulum ut rhoncus eros, et accumsan est.
          </p>
        </div>
      </div>
    )
  }
}
