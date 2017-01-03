import React, { Component } from 'react'
import './ImageSizer.scss'

import AvatarEditor from 'react-avatar-editor'
import RangeInput from '../RangeInput'
import personOverlay from './person-overlay.svg'

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
    if (!sourceImage) return <div className='sizer-container'></div>
    return <div>
      <p>Zoom and crop your photo below:</p>
      <div className='sizer-container rounded' style={{ width: sizes.picWidth }}>
        <AvatarEditor
          image={sourceImage}
          width={sizes.picWidth}
          height={sizes.picHeight}
          border={0}
          ref='editor'
          scale={this.state.scale} />
        <img src={personOverlay} style={{position: 'absolute', width: '100%', left: 0, pointerEvents: 'none' }}/>
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
            ? 'Processing...'
            : 'Process' }
        </button>
      </div>
    </div>
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

  static getImage () {
    return this.refs.editor.getImage()
  }
}
