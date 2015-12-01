/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { scale: 1 }
  }

  render () {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Coming soon.</p>
        <AvatarEditor
          image="http://i.imgur.com/y7yZHAF.jpg"
          width={250}
          height={250}
          border={50}
          scale={this.state.scale} />
        <input type="range" min={0.1} max={5} step={0.1} defaultValue={this.state.scale} onChange={this.changeScale.bind(this)}/>
      </div>
    )
  }

  changeScale (e) {
    this.setState({ scale: e.target.value })
  }

}
