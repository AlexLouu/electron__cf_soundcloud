import React, { Component } from 'react'

export default class Progress extends Component {
  render() {
    const bar = {
      maxWidth: '100%',
      width: '100%'
    }
    
    const label = {
      color: 'white'
    }

    return (
      <div class='ui teal progress'>
        <span style={label} class='label'>{this.props.elapsed}</span>
        <progress 
          class='bar'
          style={bar}
          value={this.props.position}
          max='1'/>
      </div>
    )
  }
}