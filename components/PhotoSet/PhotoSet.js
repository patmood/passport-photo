import React from 'react';
import { MdFileDownload } from 'react-icons/lib/md'

export default function (props) {
  if (!props.image) return null
  return (
    <div>
      <a href={props.image} download="passport-photo-set.jpg">
        <img
          src={props.image}
          style={{width: '100%', maxWidth: 600, margin: 'auto'}} />
        <div>
          <button className='btn'>
            <MdFileDownload /> Download Photo Set
          </button>
        </div>
      </a>
    </div>
  )
}
