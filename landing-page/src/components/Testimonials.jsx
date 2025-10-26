import React from 'react'

const Testimonials = () => {

  function RenderClients(props) {
    return (
      <div className='client-container'>
        <img src={props.image} />
        <p>{props.text}</p>
        <div>
          <p className='bold'>{props.client}</p>
          <small>{props.position}</small>
        </div>
      </div>
    )
  }

  return (
    <div className='testimonials-container'>
      <h1>Client Testimonials</h1>

      <div className='testimonials'>
        <RenderClients
          image='images/emily.png'
          text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          client="Emily R."
          position="Marketing Director"
        />

        <RenderClients
          image='images/thomas.png'
          text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          client="Thomas S."
          position="Chief Operating Officer"
        />

        <RenderClients
          image='images/jennie.png'
          text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          client="Jennie F."
          position="Business Owner"
        />
      </div>
    </div>
  )
}

export default Testimonials