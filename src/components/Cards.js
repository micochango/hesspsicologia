import React from 'react'
import CardItem from './CardItem'
import './Cards.css';



function Cards(props) {
    return (
        <div className="cards">
            <h2>{props.title}</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/Kaibil-1.jpeg'
                        text='3 lecciones que aprendí trabajando con comandos militares de élite'
                        label='Salud mental'
                        path='/blog'
                        />
                        <CardItem 
                        src='images/Kaibil-1.jpeg'
                        text='3 lecciones que aprendí trabajando con comandos militares de élite'
                        label='Salud mental'
                        path='/blog'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/Kaibil-1.jpeg'
                        text='3 lecciones que aprendí trabajando con comandos militares de élite'
                        label='Salud mental'
                        path='/blog'
                        />
                        <CardItem 
                        src='images/Kaibil-1.jpeg'
                        text='3 lecciones que aprendí trabajando con comandos militares de élite'
                        label='Salud mental'
                        path='/blog'
                        />
                        <CardItem 
                        src='images/Kaibil-1.jpeg'
                        text='3 lecciones que aprendí trabajando con comandos militares de élite'
                        label='Salud mental'
                        path='/blog'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards 
