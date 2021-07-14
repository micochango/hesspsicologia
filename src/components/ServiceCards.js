import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function ServiceCards(props) {
    return (
            <div className="cards">
                <h2>{props.title}</h2>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem 
                            src='images/Kaibil-1.jpeg'
                            text='Terapia de parejas'
                            label='Salud mental'
                            path='/blog'
                            />
                            <CardItem 
                            src='images/Kaibil-1.jpeg'
                            text='Terapia familiar'
                            label='Salud mental'
                            path='/blog'
                            />
                            <CardItem 
                            src='images/Kaibil-1.jpeg'
                            text='Terapia familiar'
                            label='Salud mental'
                            path='/blog'
                            />
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default ServiceCards
