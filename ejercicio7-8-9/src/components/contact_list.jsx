import React, { useState } from 'react';
import { Contacto } from '../models/contacto.class';
import ContactComponent from './contact';
import ContactForm from './contactForm';

const ContactList = () => {

    const defualtContact1 = new Contacto('Marina', 'Aix', 'marina.aix.gomez@gmail.com', true)
    const defualtContact2 = new Contacto('JuanJo', 'Garcia', 'juanjogarcia@gmail.com', false)
    const defualtContact3 = new Contacto('Sandra', 'Rey', 'sandrarey@gmail.com', false)

    const [contacts, setContacts] = useState([defualtContact1, defualtContact2, defualtContact3]);

    function cambiarConectado(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].conectado = !tempContacts[index].conectado
        setContacts(tempContacts)
    }

    function removeContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.splice(index, 1)
        setContacts(tempContacts)
    }

    function addContact(contact) {
        const tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* card header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Tus contactos:
                        </h5>
                    </div>
                    {/* card body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' tyle={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellido</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Estado</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent
                                            key={index}
                                            contact={contact}
                                            conectado={cambiarConectado}
                                            remove={removeContact}
                                        >
                                        </ContactComponent>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactList;
