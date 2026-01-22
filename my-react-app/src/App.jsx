/*
* Parte A: onClick y el objeto event
*

function App() {
    const handleClick = (event) => {
        console.log('Hola desde React! - alex1')
        console.log(event)
    }
    return (
        <button onClick={handleClick}>
            Click me
        </button>
    )
}
export default App

 */

/*
*   Parte B: Cambiar la UI con estado + evento
*



import { useState } from 'react'
function App() {
    const [isParagraphVisible, setIsParagraphVisible] = useState(true)
    const toggleStatus = () => {
        setIsParagraphVisible(!isParagraphVisible)
    }
    return (
        <>
            <h1>Ocultar texto</h1>
            {isParagraphVisible && (
                <p>Alex1, texto a ocultar</p>
            )}
            <button onClick={toggleStatus}>
                {isParagraphVisible ? 'Hide' : 'Show'} Texto
            </button>
        </>
    )
}
export default App

 */

/*
*   Parte C: onChange (entrada controlada)
*

import { useState } from 'react'
function App() {
    const [nickname, setNickname] = useState('')

    return (
        <>
            <h1>Alias del jugador</h1>
            <input
                type="text"
                placeholder="Escribe tu alias"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            <p>Tu alias es: <strong>{nickname || '...'} </strong></p>
        </>
    )
}
export default App

 */

/*
*   Parte D: onSubmit (formulario)
*


import { useState } from 'react'
function App() {
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [msj,setMsj] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setMsg(`Inscripcion enviada para: ${email}`)
        setMsj(`Tu mensaje es:  ${msj}`)
    }
    return (
        <>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}

                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="msj"
                    placeholder="Escribe tu msj"
                    value={msj}

                    onChange={(e)=> setMsj(e.target.value)}
                    required
                />
                <button type="submit">Enviar</button>
            </form>
            {msg && <p>{msg}</p>}
            {msj && <p>{msj}</p>}

        </>
    )
}
export default App

 */

import { useState } from 'react'
function App() {
    const [hideText, setHideText] = useState(false)
    const [contador, setContador] = useState(0)
    const[modo,setModo]= useState("")
    const toggleStatus = () => {

        setHideText((!hideText))
    }

    const msj = (e) => {
        e.preventDefault()
        setModo(`${modo}`)

    }
    return (

        <h2>
            <h4>Ocultar texto</h4>
            {hideText && (
                <p>Soy el texto oculto</p>
            )}
            <button onClick={toggleStatus}>
                {hideText ? 'Hide' : 'Show'} Texto
            </button>

            <h4>
                <h4>Boton de contador</h4>
                <button onClick={() => setContador((n) => n + 1)}>+1
                    Contador
                </button>
                <button onClick={() => setContador(0)}>Reset - Contador</button>

                {contador > 0 && (
                    <h4>El contador tiene --- {contador}.</h4>
                )}

            </h4>

            <h4>
                <form onSubmit={msj}>

                    <input
                        type="modo"
                        placeholder="modo"
                        value={modo}

                        onChange={(e) => setModo(e.target.value)}
                        required
                    />
                </form>
                {modo && <p>{modo}</p>}
            </h4>
        </h2>
    )
}

export default App