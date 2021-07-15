import React  from 'react'
import './Footer.css'

const getYear = () => {
    return new Date().getFullYear();
}

const Footer = () => {
        return (
            <div className='footer-container'>
                <span className='footer-subscription-heading'>powered by micochango  © { getYear() }</span>
                <span className='footer-subscription-text'>www.micochango.com</span> 
             </div>
        )
    }

export default Footer
