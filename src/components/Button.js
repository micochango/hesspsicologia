import React from 'react'
import './Button.css'
import { HashLink as Link } from 'react-router-hash-link'

const STYLES = ['btn--outline']
const SIZES = ['btn--medium', 'btn--large', 'btn--small']
const COLOR = ['btn--white', 'btn--dark', 'btn--info', 'btn--warning', 'btn--error', 'btn--success']

export const Button = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    buttonColor,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0]

    const checkButtonColor = COLOR.includes(buttonColor)
    ? buttonColor
    : COLOR[0]

    return (
        <Link to='#contact' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};
