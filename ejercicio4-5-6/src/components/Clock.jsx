import React, { useState, useEffect } from 'react'

const Persona = {
    nombre: 'Martín',
    edad: 0,
    fecha: new Date(),
    apellidos: 'San José'
}

export default function Clock() {

    const [clockState, setClockState] = useState(Persona);
    console.log(" linea 13", clockState)

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)
        return () => {
            clearInterval(timerID)
        };
    }, []);

    function tick() {
        setClockState((prevState) => {
            console.log("esto es el prevState", prevState)
            return ({
                ...prevState,
                fecha: new Date(),
                edad: prevState.edad + 1
            })
        })
    }

    return (
        <div>
            <h2>
                Hora Actual:
                {clockState.fecha.toLocaleTimeString()}
            </h2>
            <h3>{clockState.nombre} {clockState.apellidos}</h3>
            <h1>Edad: {clockState.edad}</h1>
        </div>
    )
}
