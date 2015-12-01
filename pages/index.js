/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'

const sizes = {
  picHeight: 300,
  picWidth: 300,
  border: 30,
}


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scale: 1,
      processedImage: '',
    }
  }

  render () {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Standard 135 film & print size in US, Canada, Australia and India. Called "10 × 15 cm" worldwide.</p>
        <AvatarEditor
          image="http://i.imgur.com/y7yZHAF.jpg"
          width={sizes.picWidth}
          height={sizes.picHeight}
          border={sizes.border}
          ref='editor'
          scale={this.state.scale} />
        <div>
          <label>Zoom:</label>
          <input
            type="range"
            min={0.1}
            max={5}
            step={0.1}
            defaultValue={this.state.scale}
            onChange={this.changeScale.bind(this)} />
          <button onClick={this.processImage.bind(this)}>Process</button>
        </div>
        <div>
          <canvas
            ref='canvas'
            width={900}
            height={600}></canvas>
        </div>
      </div>
    )
  }

  changeScale (e) {
    this.setState({ scale: parseFloat(e.target.value) })
  }

  processImage () {
    const dataUrl = this.refs.editor.getImage()
    this.drawCanvas(dataUrl)
    this.setState({ processedImage: dataUrl })
  }

  drawCanvas (dataUrl) {
    const canvas = this.refs.canvas
    if (!canvas) return console.log('Canvas not supported')

    const ctx = canvas.getContext('2d')
    const img = new Image(dataUrl)
    img.src = dataUrl
    for (let x = 0; x <= 3; x++) {
      for (let y = 0; y <= 2; y++) {
        ctx.drawImage(img, x * canvas.width / 3, y * canvas.height / 2)
      }
    }
  }
}
