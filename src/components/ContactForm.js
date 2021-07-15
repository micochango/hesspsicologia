import React from 'react'
import './ContactForm.css'
import '../App.css'

export default function ContactForm() {
    return (
        <div className="container">
            <h2 class="brand">Contacto</h2>
            <div class="wrapper">
                <div class="company-info">
                <i className="fab fa-typo3" /> <h3>Hess Psicología</h3>
                    <ul>
                        <li className='inline'><i class="fa fa-phone"></i> 4444-4444</li>
                        <li><i class="fa fa-envelope"></i> hessv@gmail.com</li>
                    </ul>
                </div>
                <div class="contact">
                    <div class="alert">Tu mensaje ha sido enviado.</div>
                    <form id="contactForm">
                        <p>
                            <label>Nombre</label>
                            <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            required/>
                        </p>
                        <p>
                            <label>Correo electrónico</label>
                            <input 
                            type="email" 
                            name="email"    
                            id="email" 
                            required/>
                        </p>
                    <p>
                        <label>Telefono</label>
                        <input 
                        type="text" 
                        name="phone" 
                        id="phone"/>
                    </p>
                    <p class="full">
                        <label>Mensaje</label>
                        <textarea 
                        name="message" 
                        rows="5" 
                        id="message">
                        </textarea>
                    </p>
                    <p class="full">
                    <button type="submit">Enviar</button>
                    </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
