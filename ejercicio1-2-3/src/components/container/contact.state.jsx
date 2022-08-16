import React, { useState } from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactComponent from '../contact.component';

const defaultContact = new Contacto('marina', 'aix', 'marina.aix.gomez@gmail.com', false)

const ContactStateComponent = () => {


    const [state, setState] = useState(defaultContact.conectado);

    const changeState = () => {
        setState(state ? false : true)
    }


    return (
        <div>
            <h1>
                Contacto:
            </h1>
            <ContactComponent contacto={defaultContact} state={state}></ContactComponent>
            <button onClick={changeState}>
                Cambiar estado del contacto
            </button>
        </div>
    );
};

export default ContactStateComponent;
