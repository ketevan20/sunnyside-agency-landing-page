import React from 'react'

const Features = (props) => {
  return (
    <div className='features-container with-image' style={{backgroundImage: props.image}}>
      <div className='features'>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Features