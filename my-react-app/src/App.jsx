
/*

 # PARTE A
function App(props) {
    // eslint-disable-next-line react/prop-types
    const {user = false} = props
    if (user) {

        return <button>Logout <h1> estado = true</h1> </button>
    }

    return <button>Login <h1>estado  = false</h1> </button>


}
*/

/*
    PARTE B
function App(props) {
    // eslint-disable-next-line react/prop-types
    const { user = true } = props
    let button = <button>Logout</button>
    if (user) {
        button = <button>Login</button>
    }

    return (
        <>
            <h1>
                Hola, esclavillo de DAW2
            </h1>
            {button}
        </>

);
}
*/

/*
PARTE C
function App(){
    const newEmail = 10
    return(
        <>
            <h1>Hola buenos dias</h1>
            {newEmail > 0 &&(<h2>Tines {newEmail} nuevos mensajes esperando</h2>)}
        </>
    );
}
*/

import { useState } from 'react'

function App() {
    const [user, setUser] = useState(null)
    const [newEmails, setNewEmails] = useState(0)
    const button = user
        ? <button onClick={() => setUser(null)}>Logout</button>
        : <button onClick={() => setUser({ name: 'Alex1'
        })}>Login</button>
    return (
        <>
            <h1>Nivel 5: Renderizado condicional</h1>
            {button}

            {user ? <p>Bienvenido, {user.name}.</p> : <p>Inicia sesión para
                continuar.</p>}
            <hr />
            <button onClick={() => setNewEmails((n) => n + 1)}>+1
                email</button>
            <button onClick={() => setNewEmails(0)}>Reset</button>
            {newEmails > 0 && (
                <h2>Tienes {newEmails} correos nuevos.</h2>
            )}
        </>
    )
}

export default App
