import React from 'react'
import { Button } from './Button'
import './HeroSection.css'


function HeroSection() {
    return (
        <div className='hero-container home' >
            <img 
            src="images/smiley-face.png" 
            alt="Harvey Ball's smiley face"
            width='200px'
            height='200px' />
            <h1>Hess Psicología</h1>
                <Button 
                className='btns' 
                // buttonStyle='btn--primary' 
                buttonSize='btn--large'
                buttonColor='btn--white'
                >Haz tu cita
                </Button>
        </div>
    )
}

export default HeroSection
