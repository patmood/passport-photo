import React, { Component } from 'react'
import './ImageSizer.scss'

import AvatarEditor from 'react-avatar-editor'
import RangeInput from '../RangeInput'

import { partial } from 'lodash'
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/lib/md'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scale: 1,
    }
    this.changeScale = this.changeScale.bind(this)
  }

  render () {
    const { sizes, sourceImage } = this.props
    return <div>
      <div className='sizer-container'style={{ width: sizes.picWidth }}>
        <AvatarEditor
          image={sourceImage}
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
        <MdRemoveCircleOutline
          size='100'
          onClick={partial(this.changeScale, -0.1)}
          className='fa fa-minus-circle zoom-overlay-button'
          style={{top: 30, left: 30}} />
        <MdAddCircleOutline
          size='100'
          onClick={partial(this.changeScale, 0.1)}
          className='fa fa-plus-circle zoom-overlay-button'
          style={{top: 30, right: 30}} />
      </div>
      <div className='zoom-controls'>
        <div className='zoom-out' onClick={partial(this.changeScale, -0.1)}>
          <MdRemoveCircleOutline />
        </div>
        <div className='slider'>
          <RangeInput
            min={0.1}
            max={5}
            step={0.1}
            defaultValue={this.state.scale}
            value={this.state.scale}
            onChange={this.handleRangeChange.bind(this)} />
        </div>
        <div className='zoom-in' onClick={partial(this.changeScale, 0.1)}>
          <MdAddCircleOutline />
        </div>
      </div>
      <div>
        <button onClick={this.handleProcessImage.bind(this)} className='btn btn-green' style={{ width: 200 }}>
          { this.props.isProcessing
            ? <i className='fa fa-cog fa-spin'></i>
            : 'Process' }
        </button>
      </div>
    </div>
  }

  componentDidUpdate () {
    this.drawCircleOverlay()
  }

  handleProcessImage () {
    const dataUrl = this.refs.editor.getImage()
    this.props.processImage(dataUrl)
  }

  handleRangeChange (e) {
    this.setState({ scale: parseFloat(e.target.value) })
  }

  changeScale (delta) {
    const scale = this.state.scale + delta
    this.setState({ scale })
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

  static getImage () {
    return this.refs.editor.getImage()
  }
}
