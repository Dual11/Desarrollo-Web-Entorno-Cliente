// Arrays, Funciones y Objetos - Tema 4

let paises = ["España", "Francia", "Italia", "Portugal", "Prueba"];

const listaActual = document.getElementById('lista');

const resutlDiv = document.getElementById('resultArray');


function actualizarLista(){

    listaActual.innerHTML = `<strong>Países (${paises.length}):</strong><br>${paises.join(" , ")}`;
}

function mostrar(msj){

    resutlDiv.innerHTML = msj;
}
//func 01
function sizeArray(){

    mostrar(`<strong>Numero de paises:</strong> ${paises.length}`);

}

//func 02
function verTodos(){

    mostrar("<strong> Lista de Piases </strong> <br>" + paises.join("<br>"));
    actualizarLista();
}

//func 03

function reverse(){

    mostrar("<strong> Al reves </strong><br> " +paises.slice().reverse().join("<br>"));
}

//func 04

function listOrdenados(){

    mostrar("<strong> Lista Alfabeticamente </strong> <br>" + [...paises].sort().join("<br>"));
}

// func 05

function addInicio(){

    let pais = prompt("Nombre del pais - añadir al inicio");

    if(pais && pais.trim()){

        paises.unshift(pais.trim());
        actualizarLista();
    }
}

//func 06

function addFinal(){

    let pais = prompt("Nombre del pais - añadir al final")

    if(pais && pais.trim()){

        paises.push(pais.trim());
        actualizarLista();
    }
}

//func 07

function deleteInicio(){

    if(paises.length === 0){
        mostrar("El array esta vacio")
        return;
    }

    let borrar = paises.shift();
    actualizarLista();
    mostrar(`El primero se ha borrado <strong>${borrar}</strong>`);


}

// func 08

function deleteFinal(){

    if(paises.length === 0){
        mostrar("El array esta vacio")
        return;
    }

    let borrar = paises.shift();
    actualizarLista();
    mostrar(`El ultimo se ha borrado <strong>${borrar}</strong>`);

}

// func 09

function verPosicion(){

    let pos = parseInt(prompt("Dime un numero entero "));

    if(isNaN(pos) || pos < 0 || pos >= paises.length){
        mostrar("Numero no valido")
    }else{

        mostrar(`Posicion ${pos}: <stron>${paises[pos]}</strong>`);
    }
}

// func 10

function buscarPais(){

    let pais = prompt("Nombre del pais a buscar");

    if(!pais) return;

    let pos = paises.indexOf(pais.trim());

    if(pos === -1){

        mostrar("Pais no encontrado");
    }else{

        mostrar(`"${pais.trim()}" esta en la posicion <strong>${pos}</strong>`);
    }
        
}

// func 11

function verIntervalo(){

    let incio = parseInt(prompt("pos inicio "));
    let fin = parseInt(prompt("pos final"));

    if(isNaN(incio) || isNaN(fin) || incio < 0 || fin > paises.length || incio >= fin){

        mostrar("Error de rango")

        return;
    }

    let opcion = paises.slice(incio,fin);

    mostrar(`Inicio ${incio} Final ${fin - 1}:<br> <strong> ${opcion.join(" ")} </strong>`);
}

actualizarLista();
