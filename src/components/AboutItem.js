import React from 'react'
import '../App.css'



function AboutItem(props) {
    return (
        <>
           <li className="__item">
                <div 
                className='__item__wrapper'>
                    <figure 
                    className="__item__pic-wrap"
                    data-category={props.label}
                    >
                        <img 
                        src={props.src} 
                        alt={props.alt} 
                        className="about__item__img" />
                    </figure>
                <div className="__item__info">
                    <h2 className="about__item__text about__heading">
                        {props.title}
                    </h2>
                    {/* <div className="__item__text">
                    <span>
                        {props.tag}
                    </span>
                    <p>{props.text}</p>
                    </div> */}
                </div>
                <div className="__item__info">
                    {/* <h2 className="about__item__text">
                        {props.title}
                    </h2> */}
                    <div className="about__item__text">
                    <span>
                        {props.tag}
                    </span>
                    {/* <p>{props.text}</p> */}
                    </div>
                </div>
                <div className="__item__info">
                    {/* <h2 className="about__item__text">
                        {props.title}
                    </h2> */}
                    <div className="about__item__text">
                    {/* <span>
                        {props.tag}
                    </span> */}
                    <p>{props.text}</p>
                    </div>
                </div>
                </div>
            </li> 
        </>
    )
}

export default AboutItem
