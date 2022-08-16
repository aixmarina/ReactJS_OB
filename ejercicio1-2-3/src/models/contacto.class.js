// 1. Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:

// - Nombre: que será un String.

// - Apellido: también un String.
// d
// - Email: de nuevo un String.

// - Conectado: será un booleano que nos indicará si la persona está conectada o no.

export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    conectado = false;

    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}