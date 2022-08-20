import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';

const ContactComponent = ({ contact, conectado, remove }) => {

    function contactConectedIcon() {
        if (contact.conectado) {
            return (<i onClick={() => conectado(contact)} className='bi-toggle-on contact-action' style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => conectado(contact)} className='bi-toggle-off contact-action' style={{ color: 'grey' }}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.nombre}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.apellido}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.email}</span>

            </td>
            <td className='align-middle'>
                <span>{contact.conectado ? "Conectado" : "Desconectado"}</span>
            </td>
            <td className='align-middle'>
                {contactConectedIcon()}
                <i className='bi-trash contact-action' style={{ color: 'tomato', marginLeft: '10px' }} onClick={() => remove(contact)}></i>

            </td>
        </tr>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contacto).isRequired,
    conectado: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}


export default ContactComponent;
