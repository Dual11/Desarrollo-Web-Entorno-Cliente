


let global_Paises = ["España", "Francia", "Italia", "Portugal"];

const listaDiv = document.getElementById("list-paises");
const historialDiv = document.getElementById("historial");

function actualizarLista(array) {

    listaDiv.innerHTML = `<strong>Paises actuales (${array.length}):</strong><br>${array.join(" , ")}`;
}

function añadirHistorial(texto) {


    historialDiv.innerHTML += `<br> ${texto}`;
}

 // menu interactivo
function mostrarMenu(array) {
    let opcion = prompt(
        "Menu - Interactivo\n\n" +
        "1 Numero de paises\n" +
        "2 Listado de paises\n" +
        "3 Intervalo de paises\n" +
        "4 Añadir pais - Inicio o Final\n" +
        "5 Borrar un pais\n" +
        "6 Buscar pais\n" +
        "\nElige una opcion"
    );

    if (opcion === null) {

        añadirHistorial("No haz elegido nada");

        return;
    }

    opcion = opcion.trim();

    switch (opcion) {
        case "1":
            añadirHistorial(`<strong>Numero de paises en el Array</strong> ${array.length}`);

            break;

        case "2":
            let orden = prompt("Opciones a mostrar \n1 Orden actual \n2 Del reves \n3 Orden Alfabeticamente");

            let lista = "";
            if(orden === "1"){
                lista = array;
                añadirHistorial(`<strong>Orden Actual </strong><br>${lista.join(" , ")}`);
                break;

            }else if (orden === "2"){

                lista = array.slice().reverse();
                añadirHistorial(`<strong>Orden del reves</strong><br>${lista.join(" , ")}`);
                break;
                
            }else if (orden === "3"){
                lista = [...array].sort();
                añadirHistorial(`<strong>Orden Alfabeticamente</strong><br>${lista.join(" , ")}`);
                break;

            }else{

                añadirHistorial("Error de opcion - Orden")
                break;

            }
    

        case "3":

            let incio = parseInt(prompt("pos inicio "));
            let fin = parseInt(prompt("pos final"));

            if(isNaN(incio) || isNaN(fin) || incio < 0 || fin > array.length || incio >= fin){

                añadirHistorial("Error de rango")

                break;
            }else{

                let opcion = array.slice(incio,fin);
                añadirHistorial(`Inicio ${incio} Final ${fin - 1}:<br> <strong> ${opcion.join(" ")} </strong>`);

                break;
            }


        case "4":
            let opcion = prompt("Opciones \n1 añadir al inicio \n2 añadir al final ");

            let new_Pais = prompt("nombre del nuevo pais ");

            if (new_Pais && new_Pais.trim()) {

                if (opcion === "1") {
                    array.unshift(new_Pais.trim());
                    añadirHistorial(`<strong>Añadido al Inicio</strong> "${new_Pais.trim()}"`);
                    actualizarLista(array);
                }else if(opcion == "2"){

                    array.push(new_Pais.trim());
                    añadirHistorial(`<strong>Añadido al Final</strong> "${new_Pais.trim()}"`);
                    actualizarLista(array);
                }else {
                    añadirHistorial("Error de Opcion - Inicio o Final")
                }
                
            }
            break;

        case "5":

            if (array.length === 0) {
                añadirHistorial("El Array esta vacio");
                break;
            }
            añadirHistorial(`<strong> Antes del borrado </strong> "${array}"`);
            let borrar = prompt("Opciones \n1 Borrar al Inicio \n2 Borrar al Final" );

            
            if (borrar == "1"){
                borrado = array.shift();
                añadirHistorial(`<strong>Se ha borrado el primer pais</strong> "${borrado}"`);
                añadirHistorial(`<strong>Despues del borrado - Inicio </strong> "${array}"`);

            }else if(borrar == "2"){

                borrado = array.pop();
                añadirHistorial(`<strong>Se ha borrado el ultimo pais</strong> "${borrado}"`);
                añadirHistorial(`<strong>Despues del borrado - Final </strong> "${array}"`);
                
            }else {
            
                añadirHistorial("Opcion no valida - Borrado");
            }
            
            actualizarLista(array);
            break;

        case "6":
            let consultar = prompt("Opciones \n1 Posicion \n2 Nombre pais");

            if (consultar === "1") {
                let pos = parseInt(prompt("Numero de posicion"));
                if (pos >= 0 && pos < array.length) {
                    añadirHistorial(`Su Posicion es ${pos} <strong>${array[pos]}</strong>`);
                } else {
                    añadirHistorial("Fuera de rango en el array");
                }
            } else {
                let nombre = prompt("Nombre del pais a buscar");
                if (nombre) {
                    let pos = array.indexOf(nombre.trim());

                    if (pos === -1) {
                        añadirHistorial(`"${nombre.trim()}" Pais no encontrado`);

                    } else {
                        añadirHistorial(`Su Posicion es ${pos} <strong>${nombre.trim()}</strong> `);
                    }
                }
            }
            break;

        default:
            añadirHistorial("Opcion no valida.");
    }

    setTimeout(() => mostrarMenu(array), 400);
}


actualizarLista(global_Paises);
setTimeout(() => mostrarMenu(global_Paises), 800);