
/*PARTE A
*
function App() {

    const sharedStyle = {color:'red' };

    return (
        <div>
            <h1 style={{ color: 'blue', textAlign: 'center' }}>Alex - Buenos dias</h1>

            <h4 style={sharedStyle}>Alex con estilo rojo </h4>
            <h4 style={{ ...sharedStyle, color: 'green' }}>alex con estilo compartido, verde</h4>
        </div>
    );
}
*
 */
/**
 *  PARTE C
import './style.css';

function App() {
    return (
        <div>
            <p className="paragraph-text">Texto con estilos</p>
        </div>
    );
}
    */
/**
import styles from './App.module.css';

function App() {
    return (
        <div>
            <h2 className={styles.title}>Titulo desde la nueva carpeta css</h2>
            <p className={styles.baseText}>Texto base</p>
            <p className={`${styles.baseText} ${styles.special}`}>
                Combinando clases
            </p>
        </div>
    );
}
    */
// App.jsx (versión final con Tailwind + un toque de estado)
import { useState } from 'react';

function App() {
    const [likes, setLikes] = useState(0);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full transition-all duration-300 hover:shadow-2xl">
                <div className="p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                        Tarjeta Increíble
                    </h2>

                    <p className="text-gray-600 mb-6 text-base sm:text-lg">
                        Descripción corta. Hover en botón + responsive.
                    </p>

                    <p className="text-sm text-gray-500 mb-4">
                        Likes: <strong>{likes}</strong>
                    </p>

                    <button
                        onClick={() => setLikes(likes + 1)}
                        className="

                              px-1 py-1 text-white font-medium
                              bg-gradient-to-r from-purple-600 to-indigo-600
                              rounded-lg shadow-md
                              hover:from-purple-700 hover:to-indigo-700
                              hover:shadow-xl hover:underline
                              active:scale-95
                              transition-all duration-300
                            "
                    >
                        Dar like
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;

