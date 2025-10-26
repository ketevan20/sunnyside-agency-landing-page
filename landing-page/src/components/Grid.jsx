import React from 'react'
import Services from './Services'
import Features from './Features'

const Grid = () => {
    return (
        <div className='grid-container'>
            <Services
                title="Transform your brand"
                text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                buttonText="LEARN MORE"
            />
            <Services 
                image="url('images/egg.png')"
            />
            <Services 
                image="url('images/cup.png')"
            />
            <Services
                title="Stand out to the right audience"
                text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
                buttonText="LEARN MORE"
            />
            <Features 
                image="url('images/design.png')"
                title="Graphic Design"
                text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."/>
            <Features 
                image="url('images/photography.png')"
                title="Photography"
                text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."/>
        </div>
    )
}

export default Grid