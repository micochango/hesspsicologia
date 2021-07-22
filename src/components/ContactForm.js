import React from 'react'
import './ContactForm.css'
import '../App.css'

export default function ContactForm() {
    return (
        <div className="container">
            <h2 className="brand">Contacto</h2>
            <div className="wrapper">
                <div className="company-info">
                <i className="fab fa-typo3" /> <h3 className="contact-title">Hess Psicología</h3>
                    <ul>
                        <li><i className="fa fa-phone"></i> 4444-4444</li>
                        <li><i className="fa fa-envelope"></i> hessv@gmail.com</li>
                    </ul>
                </div>
                <div className="contact">
                    
                    <form
                    name="contact" 
                    id="contactForm"
                    method="POST"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <label htmlFor="name">Nombre</label>
                            <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            required/>
                        </p>
                        <p>
                            <label htmlFor="email">Correo electrónico</label>
                            <input 
                            type="email" 
                            name="_replyto"   
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
                    <p className="full">
                        <label>Mensaje</label>
                        <textarea 
                        name="message" 
                        rows="5" 
                        id="message"/>
                    </p>
                    <p className="full">
                    <button 
                    type="submit"
                    >Enviar</button>
                    </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
