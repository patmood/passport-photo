/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import './index.scss'

import AvatarEditor from 'react-avatar-editor'
import PhotoStandard from '../components/PhotoStandard'
import RangeInput from '../components/RangeInput'
import { partial } from 'lodash'

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
    this.changeScale = this.changeScale.bind(this)
  }

  componentDidMount () {
    this.drawCircleOverlay()
  }

  render () {
    return (
      <div className='Index'>
        <h1>Passport Photo Maker</h1>
        <p>Photo shops charge around $20 for a set of passport photos!</p>
        <p>Make your own and print them at a standard photo kiosk for as little as $0.10</p>
        <div className='upload-box'>
          <p>Upload your photo:</p>
          <input
            type='file'
            onChange={this.getSourceImage.bind(this)}
          />
        </div>
        <p>Zoom and crop your photo below:</p>
        <div style={{ position: 'relative', width: sizes.picWidth, margin: 'auto' }}>
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
          <i
            onClick={partial(this.changeScale, -0.1)}
            className='fa fa-minus-circle'
            style={{position: 'absolute', top: 30, left: 30, fontSize: 82}}></i>
          <i
            onClick={partial(this.changeScale, 0.1)}
            className='fa fa-plus-circle'
            style={{position: 'absolute', top: 30, right: 30, fontSize: 82}}></i>
        </div>
        <div className='zoom-controls'>
          <div className='zoom-out'>
            <i className='fa fa-minus'></i>
          </div>
          <div className='slider'>
            <RangeInput
              min={0.1}
              max={5}
              step={0.1}
              defaultValue={this.state.scale}
              onChange={this.handleRangeChange.bind(this)} />
          </div>
          <div className='zoom-in'>
            <i className='fa fa-plus'></i>
          </div>
        </div>
        <div>
          <button onClick={this.processImage.bind(this)} className='btn btn-green'>Process</button>
        </div>
        <PhotoStandard image={this.state.processedImage}/>
      </div>
    )
  }

  componentDidUpdate () {
    this.drawCircleOverlay()
  }

  handleRangeChange (e) {
    this.setState({ scale: parseFloat(e.target.value) })
  }

  changeScale (delta) {
    const scale = this.state.scale + delta
    this.setState({ scale })
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
      this.setState({
        sourceImage: reader.result,
        processedImage: null,
      })
    }

    if (file) {
      reader.readAsDataURL(file)
    } else {
      new Error('No file detected')
    }
  }
}
