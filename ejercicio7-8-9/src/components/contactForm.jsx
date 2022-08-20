import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';


const ContactForm = ({ add }) => {

    const nombreRef = useRef('')
    const apellidoRef = useRef('')
    const emailRef = useRef('')

    function addContact(e) {
        e.preventDefault()
        const newContact = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            true
        )
        add(newContact)
    }
    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center'>
            <div className='form-outline flex-fill'>
                <input ref={nombreRef} id='inputName' type='text' className='form-control form-control-lg mt-2' required autoFocus placeholder='Nombre' />
                <input ref={apellidoRef} id='inputDescription' type='text' className='form-control form-control-lg mt-2' required placeholder='Apellido' />
                <input ref={emailRef} id='inputEmail' type='email' className='form-control form-control-lg mt-2' required placeholder='Email' />
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Añadir</button>
        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForm;
