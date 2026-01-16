function ChildComponent(props) {
    return (
        <>
            <h1>Hello {props.name}!</h1>

            <button
                onClick={() => props.setName("alex2")}
            >
                Cambiar a Alex2
            </button>

            <button
                onClick={() => props.setName("Alex el profe")}

            >
                cambiar a profe
            </button>
        </>
    );
}






export default ChildComponent;
/*
    return (
        <>
            <p>Hello bros! my name is {props.name}</p>
            <p>Tengo {props.age} años</p>
            <p>Soy {props.occupation}</p>
            <p>Mis hobbies: {props.hobbies.join(", ")}</p>

            <p>{props.greetings()}</p>
        </>
    );
}
*/
