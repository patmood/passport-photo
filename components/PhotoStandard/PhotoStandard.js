import React from 'react';

function PhotoStandard(props) {
  if (!props.image) return <div></div>
  return (
    <div>
      <p>Print this image at your local pharmacy or photo kiosk as a standard size photo. A single photo should cost $0.10-0.30</p>
      <p>This is standard photo print size in US, Canada, Australia and India. Called "10 × 15 cm" worldwide.</p>
      <a href={props.image} download="passport-photo.jpg">
        <img
          src={props.image}
          style={{width: 600, margin: 'auto'}} />
        <div>
          Download Image
        </div>
      </a>
    </div>
  )
}

export default PhotoStandard;
