/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import PhotoSingle from '../components/PhotoSingle'
import PhotoSet from '../components/PhotoSet'
import ImageSizer from '../components/ImageSizer'

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
      photoSet: null,
      photoSingle: null,
      sourceImage: 'http://i.imgur.com/y7yZHAF.jpg',
      isProcessing: false,
    }
  }

  render () {
    return (
      <div className='Index'>
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
        <ImageSizer
          sizes={sizes}
          ref='imageSizer'
          isProcessing={this.state.isProcessing}
          processImage={this.processImage.bind(this)}
          sourceImage={this.state.sourceImage} />
        <PhotoSet image={this.state.photoSet} />
        <PhotoSingle image={this.state.photoSingle} />
      </div>
    )
  }

  processImage (dataUrl) {
    this.setState({ isProcessing: true })
    this.drawCanvas(dataUrl)
  }

  drawCanvas (dataUrl) {
    this.setState({ photoSingle: dataUrl })
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

      this.setState({
        photoSet: canvas.toDataURL('image/jpg'),
        isProcessing: false,
      })

      const node = ReactDOM.findDOMNode(this.refs.imageSizer)
      if (window) window.scrollTo(0, node.scrollHeight + node.offsetHeight)
    }

    img.src = dataUrl
  }

  getSourceImage (e) {
    const file = e.target.files[0]
    const reader  = new FileReader()

    if (!file.type.match('image')) return alert('Must be an image :}')

    reader.onloadend = () => {
      this.setState({
        sourceImage: reader.result,
        photoSet: null,
        photoSingle: null,
      })
    }

    if (file) {
      reader.readAsDataURL(file)
    } else {
      new Error('No file detected')
    }
  }
}
