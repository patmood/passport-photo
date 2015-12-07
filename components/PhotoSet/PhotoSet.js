import React from 'react';
import { MdFileDownload } from 'react-icons/lib/md'

export default function (props) {
  if (!props.image) return <div></div>
  return (
    <div>
      <p>Print this image at your local photo kiosk or pharmacy as a standard size photo. A single photo should cost $0.10-0.30</p>
      <p>This is standard photo print size in US, Canada, Australia and India. Called "10 × 15 cm" worldwide.</p>
      <a href={props.image} download="passport-photo-set.jpg">
        <img
          src={props.image}
          style={{width: 600, margin: 'auto'}} />
        <div>
          <button className='btn'>
            <MdFileDownload /> Download Photo Set
          </button>
        </div>
      </a>
    </div>
  )
}
