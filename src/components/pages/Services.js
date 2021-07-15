import React from 'react'
import '../../App.css'
import ServiceCard from '../ServiceCard'

function Services(){
    return(
        <>
            <div className='page__container services' id="services">
                <ServiceCard title='Servicios'/>
            </div>
        </>
    );
}

export default Services;