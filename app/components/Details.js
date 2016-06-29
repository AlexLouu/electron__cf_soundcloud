import React, { Component } from 'react'

export default class Details extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}