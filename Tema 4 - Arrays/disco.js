

class Disco{

    // cosntructor sin parametros
    constructor(){

        this.nombre = "";
        this.grupoCantante = "";
        this.yearPublicacion = "";
        this.tipoMusica = "";
        this.numEstanteria = 0;
        this.prestado = false;

    }
    //constructor con parametros
    static crearDiscos(nombre,grupoCantante,yearPublicacion,tipoMusica,numEstanteria){

        let disco = new Disco();

        disco.nombre = nombre;
        disco.grupoCantante = grupoCantante;
        disco.yearPublicacion = yearPublicacion;
        disco.tipoMusica = tipoMusica;
        disco.numEstanteria = numEstanteria;
        disco.prestado = false;

        return disco;
    }
    //metodo para cambiar de estanteria
    cambiarEstanteria(newEstanteria){

        if(typeof newEstanteria === "number" && newEstanteria >= 0){

            this.numEstanteria = newEstanteria;
            console.log(`Nueva Estanteria ${newEstanteria}`);
        }else{
            console.log("Error debe ser un numero positivo");
        }
        console.log(`Estado de Prestado ${this.prestado ? "SI" : "NO"}`);
    }

    //metodo para cambiar de estado, si esta prestado o no
    cambiarPrestado(newPrestado = null){

        if(newPrestado === null){
            this.prestado = !this.prestado;
        }else{
            this.prestado = Boolean(newPrestado);
        }
    }

    // para ver los datos del disco
    mostrarInfo(){

        console.log("DATOS DEL DISCO");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Artista: ${this.grupoCantante}`);
        console.log(`Año: ${this.yearPublicacion}`);
        console.log(`Genero: ${this.tipoMusica}`);
        console.log(`Estanteria: ${this.numEstanteria}`);
        console.log(`Prestado: ${this.prestado ? "SI" : "NO"}`);

    }
}

//Creando disco sin constructor
console.log("Prueba sin Constructor");
let disco1 = new Disco();
disco1.nombre = "Prueba1";
disco1.grupoCantante = "Nirvana";
disco1.yearPublicacion = "1991";
disco1.tipoMusica = "rock";
disco1.numEstanteria = 5;
disco1.mostrarInfo();

console.log();
//Creando disco con el constructor
console.log("Prueba con Constructor");

let disco2 = Disco.crearDiscos(

    "prueba Constructor",
    "Jackson",
    "2000",
    "pop",
    12
);
disco2.mostrarInfo();
console.log();
//cambiar estanteria
console.log("Prueba cambiar Estanteria");
disco2.cambiarEstanteria(10);

console.log();
//cambiar estado
console.log("Prueba cambiar estado");
disco2.cambiarPrestado(true);

console.log();
console.log();
disco2.mostrarInfo();