import ChildComponent from './ChildComponent';
import {useState} from "react";

function App() {

    const [name, setName] = useState("alex1");

    return (
        <ChildComponent
            name={name}
            setName={setName}
        />
    );
}

export default App;


/*
function App() {

    function greetings() {
        return "Hola como va todo"
    }
    return (
        <ChildComponent
            name="Alex1"
            age={24}
            hobbies={["LOL", "Cerveza", "Fiesta"]}
            occupation="Esclavo de DAW2"
            greetings={greetings}
        />
    );
}
*/
