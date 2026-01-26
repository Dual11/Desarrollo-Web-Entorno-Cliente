
/* PARTE A
*
import { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');

    return (
        <form>

            <h4>Nombre User</h4>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </form>
    );
}
export default App;
*/

/*PARTE B
*

import { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(username);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Añadir User</h4>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;

*
 */

/*PARTE C
*
import {useState} from "react";

function App() {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const handleUsername = (e) => {
        const { value } = e.target;

        setUsername(value);
        if (value.length <= 6) {
            setUsernameError('El username debe tener más de 6 caracteres');
        } else {
            setUsernameError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (usernameError) {
            alert('Error en el form');
        } else {
            alert('Todo correcto: ' + username);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Añadir User</h4>
            <input
                type="text"
                value={username}
                onChange={handleUsername}
            />
            <p style={{color: 'red'}}>{usernameError}</p>
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;

 */
import { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const validateUsername = (value) => {
        if (value.length <= 6) {
            setUsernameError('Minimo 7 caracteres');
        } else {
            setUsernameError('');
        }
    };

    const validateEmail = (value) => {
        if (!value.includes('@') || !value.includes('.')) {
            setEmailError('Email debe contener @ y .');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = (value) => {
        if (value.length < 8) {
            setPasswordError('Minimo 8 caracteres');
        } else {
            setPasswordError('');
        }
    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
        validateUsername(value);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usernameError || emailError || passwordError) {
            alert('hay errores');
        }
    };

    const hasErrors = usernameError || emailError || passwordError;

    return (
        <div>
            <h2>Registro basico</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuario</label><br />
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <p style={{color: 'red'}}>{usernameError}</p>
                </div>

                <div>
                    <label>Email</label><br />
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <p style={{color: 'red'}}>{emailError}</p>
                </div>

                <div>
                    <label>Contraseña</label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <p style={{color: 'red'}}>{passwordError}</p>
                </div>

                <button
                    type="submit"
                    disabled={hasErrors}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: hasErrors ? 'red' : 'green',
                        cursor: hasErrors ? 'not-allowed' : 'pointer'
                    }}
                >
                    Registrarse
                </button>
            </form>
        </div>
    );
}

export default App;