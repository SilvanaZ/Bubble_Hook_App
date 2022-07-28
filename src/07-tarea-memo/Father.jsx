import { Son } from '../07-tarea-memo/Son'
import { useCallback, useState } from 'react';

export const Father = () => {

    const numeros = [ 2, 4, 6, 8, 10 ];
    const [ valor, setValor ] = useState(0);

    const incrementar = useCallback(
        (num) => {
            setValor((oldValue) => oldValue + num)
        },
        [],
    );



    return (
        <div>
            <h1>Este es un contenedor Padre</h1>
            <p> Contando: {valor} </p>

            <hr />

            {
                numeros.map(n => (
                    <Son
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
