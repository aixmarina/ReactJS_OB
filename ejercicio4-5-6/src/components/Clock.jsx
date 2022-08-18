import React, { useState, useEffect } from 'react'

export default function Clock() {

    const Persona = {
        nombre: 'Martín',
        edad: 0,
        fecha: new Date(),
        apellidos: 'San José'
    }

    const [clockState, setClockState] = useState(Persona);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)
        return () => {
            clearInterval(timerID)
        };
    }, []);

    function tick() {
        setClockState((clockState) => ({
            ...clockState,
            fecha: new Date(),
            edad: clockState.edad + 1
        }))
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
