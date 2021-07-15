import React from 'react'
import '../App.css'


function ServiceItem(props) {
    return (
        <>
           <li className="__item">
                <div
                className='__item__wrapper'
                >
                <figure 
                className="__item__pic-wrap"
                data-category={props.label}
                >
                    <img 
                    src={props.src} 
                    alt={props.alt} 
                    className="__item__img" />
                </figure>
                <div className="__item__info">
                    <h3 className="__item__text">
                        {props.title}
                    </h3>
                    <p>
                        {props.text}
                    </p>
                </div>
                </div>
            </li> 
        </>
    )
}

export default ServiceItem
