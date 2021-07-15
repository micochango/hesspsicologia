import React from 'react'
import '../App.css'
import AboutItem from './AboutItem'


function AboutCard(props) {
    return (
        <div className="__p4">
        <h2>{props.title}</h2>
        <div className="__container">
              <div className="__wrapper">
                  <ul className='__items'>
                  <AboutItem 
                        src='images/meditating.svg'
                        title='Hola! mi nombre es Shelly Hess'
                        tag='Tengo más de 30 años de experiencia en el área de Recursos Humanos.'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repudiandae deserunt facilis sint dignissimos magni harum labore, magnam quo ipsam a hic, numquam voluptatibus ullam odio quaerat dicta ut qui obcaecati. Corporis, optio sequi! Dicta aut non, quaerat, excepturi dolorem ipsam a voluptatem animi sed, voluptas temporibus unde dolor quia!'
                        path='/services'
                        />
                  </ul>
              </div>
          </div>
        </div>
    );
}

export default AboutCard 
