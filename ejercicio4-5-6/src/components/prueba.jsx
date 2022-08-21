import { useState } from 'react'

const PruebaSetState = () => {

    const [reloj, setReloj] = useState(0);

    console.log(reloj)


    return (
        <div>
            <h1>{reloj}</h1>
            <button onClick={() => { setReloj(reloj + 1) }}>Incrementar en uno</button>
            <button onClick={() => { setReloj((valordelreloj) => valordelreloj + 5) }}>Incrementar en 5</button>
        </div>
    )

}

export default PruebaSetState;