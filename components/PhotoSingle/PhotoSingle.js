import React from 'react';
import { MdFileDownload } from 'react-icons/lib/md'

export default function (props) {
  if (!props.image) return null
  return (
    <div>
      <p>This is the single cropped image in JPEG format</p>
      <a href={props.image} download="passport-photo.jpg">
        <img
          src={props.image}
          style={{width: '100%', maxWidth: 300, margin: 'auto'}} />
        <div>
          <button className='btn'>
            <MdFileDownload /> Download Single Photo
          </button>
        </div>
      </a>
    </div>
  )
}
