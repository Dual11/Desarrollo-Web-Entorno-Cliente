
import './index.css'


function ParentComponent() {
    return (
        <ChildComponent
            name="alex1"
            age={24}
            hobbies={["Jugar a la consola"]}
            occupation="estudiante"
        />
    )
}

function ChildComponent(props) {
    return <p>Hello bros! my name is {props.name} mi edad es {props.age} mi hobbie es {props.hobbies}</p>
}







function App() {
    return (
        <div>
            <ParentComponent/>
        </div>
    )
}

export default App