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

export default class extends Component {
  constructor(props) {
    super(props)
    this.startDemo = this.startDemo.bind(this)
    this.state = {
      scale: 1,
      photoSet: null,
      photoSingle: null,
      sourceImage: null,
      isProcessing: false,
      sizes: {
        picHeight: 600,
        picWidth: 600,
      },
    }
  }

  startDemo () {
    this.setState({ sourceImage: '/demo-photo.jpg' })
  }

  componentDidMount () {
    const size = Math.min(600, window.innerWidth - 50)
    this.setState({
      sizes: {
        picHeight: size,
        picWidth: size,
      }
    })
  }

  render () {
    return (
      <div className='Index'>
        <section className='section'>
          <p>Photo shops charge around $20 for a set of passport photos!</p>
          <p>Make your own and print them at a standard photo kiosk for around $0.10</p>
          <h2>Step 1: Choose a photo</h2>
          <div className='upload-box rounded'>
            <p>Upload your photo:</p>
            <input
              type='file'
              onChange={this.getSourceImage.bind(this)}
            />
            <p>Not ready? Try our test image:</p>
            <button className='btn btn-green' onClick={this.startDemo}>Demo</button>
          </div>
        </section>

        {
          this.state.sourceImage &&
          <section className='section'>
            <h2>Step 2: Crop and position</h2>
            <ImageSizer
              sizes={this.state.sizes}
              ref='imageSizer'
              isProcessing={this.state.isProcessing}
              processImage={this.processImage.bind(this)}
              sourceImage={this.state.sourceImage} />
          </section>
        }

        {
          this.state.photoSet &&
          this.state.photoSet &&
          <section className='section'>
            <h2>Step 3: Save and print</h2>
            <p>Print this image at your local photo kiosk or pharmacy as a standard size photo. A single photo should cost around $0.10</p>
            <p>This is standard photo print size in US, Canada, Australia and India. This size is also called "10 × 15 cm" (6 x 4 in).</p>
            <PhotoSet image={this.state.photoSet} />
            <PhotoSingle image={this.state.photoSingle} />
          </section>
        }
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

    canvas.width = this.state.sizes.picWidth * 3
    canvas.height = this.state.sizes.picHeight * 2

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
