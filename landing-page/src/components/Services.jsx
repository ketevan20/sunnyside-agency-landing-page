import React from 'react'

const Services = (props) => {
  return (
    <>
      {
        props.image ?
          <div className='services-container with-image' style={{ backgroundImage: props.image }}></div>
          :
          <div className='services-container'>
            <div className='services'>
              <h2>{props.title}</h2>
              <p>{props.text}</p>
              <a>{props.buttonText}</a>
            </div>
          </div>
      }
    </>
  )
}

export default Services