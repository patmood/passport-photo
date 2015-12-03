/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'

const sizes = {
  picHeight: 600,
  picWidth: 600,
  border: 0,
}


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scale: 1,
      processedImage: '',
      sourceImage: 'http://i.imgur.com/y7yZHAF.jpg',
    }
  }

  componentDidMount () {
    this.drawCircleOverlay()
  }

  render () {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Standard 135 film & print size in US, Canada, Australia and India. Called "10 × 15 cm" worldwide.</p>
        <div>
          <input
            type='file'
            onChange={this.getSourceImage.bind(this)}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <AvatarEditor
            image={this.state.sourceImage}
            width={sizes.picWidth}
            height={sizes.picHeight}
            border={sizes.border}
            ref='editor'
            scale={this.state.scale} />
          <canvas
            width={sizes.picWidth}
            height={sizes.picHeight}
            ref='circleOverlay'
            style={{ pointerEvents: 'none', position: 'absolute', top: 0, left: 0 }}>
          </canvas>
        </div>
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
          <a href={this.state.processedImage} download="passport-photo.jpg">
          <img
            src={this.state.processedImage}
            style={{width: 600}} />
            Download Image
          </a>
        </div>
      </div>
    )
  }

  componentDidUpdate () {
    this.drawCircleOverlay()
  }

  changeScale (e) {
    this.setState({ scale: parseFloat(e.target.value) })
  }

  processImage () {
    const dataUrl = this.refs.editor.getImage()
    this.drawCanvas(dataUrl)
  }

  drawCanvas (dataUrl) {
    const canvas = document.createElement('canvas')
    if (!canvas) return console.log('Canvas not supported')

    canvas.width = sizes.picWidth * 3
    canvas.height = sizes.picHeight * 2

    const ctx = canvas.getContext('2d')
    const img = new Image()

    img.onload = () => {
      // Images in grid
      for (let x = 0; x <= 3; x++) {
        for (let y = 0; y <= 2; y++) {
          ctx.drawImage(img, x * canvas.width / 3, y * canvas.height / 2)
        }
      }

      // Draw gridlines
      ctx.strokeStyle = '#333'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2)
      ctx.lineTo(canvas.width, canvas.height / 2)
      ctx.moveTo(canvas.width / 3, 0)
      ctx.lineTo(canvas.width / 3, canvas.height)
      ctx.moveTo(2 * canvas.width / 3, 0)
      ctx.lineTo(2 * canvas.width / 3, canvas.height)
      ctx.closePath()
      ctx.stroke()

      this.setState({ processedImage: canvas.toDataURL('image/jpg') })
    }

    img.src = dataUrl
  }

  drawCircleOverlay () {
    const canvas = this.refs.circleOverlay
    const context = canvas.getContext('2d')
    var centerX = canvas.width / 2
    var centerY = canvas.height * 0.4
    var radius = canvas.width * 0.2

    context.beginPath()
    context.strokeStyle = '#003300'
    context.lineWidth = 5
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
    context.stroke()
    context.closePath()
  }

  getSourceImage (e) {
    const file = e.target.files[0]
    const reader  = new FileReader()

    if (!file.type.match('image')) return console.log('Not an image')

    reader.onloadend = () => {
      this.setState({ sourceImage: reader.result })
    }

    if (file) {
      reader.readAsDataURL(file)
    } else {
      new Error('No file detected')
    }
  }
}
