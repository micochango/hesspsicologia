import React from 'react'
import '../App.css'
import ServiceItem from './ServiceItem'


function ServiceCard(props) {
    return (
        <div className="__p4">
        <h2>{props.title}</h2>
        <div className="__container">
              <div className="__wrapper">
                  <ul className='__items'>
                  <ServiceItem 
                        src='images/meditating.svg'
                        title='Terapia familiar'
                        text='Lorem ipsum dolor sit, amet consectetur.'
                        label='Salud mental'
                        path='/services'
                        />
                  <ServiceItem 
                        src='images/loving.svg'
                        title='Terapia para parejas'
                        text='Lorem ipsum dolor sit, amet consectetur.'
                        label='Salud mental'
                        path='/services'
                        />
                  <ServiceItem 
                        src='images/selfie.svg'
                        title='Psicometria'
                        text='Recursos Humanos | Selección y reclutamiento de personal'
                        label='Salud mental'
                        path='/services'
                        />
                  </ul>
              </div>
          </div>
        </div>
    );
}

export default ServiceCard 
