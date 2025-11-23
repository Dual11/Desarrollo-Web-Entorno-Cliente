

document.addEventListener("DOMContentLoaded", function () {

    let coleccionDiscos = [
        Disco.crearDiscos("prueba1", "Nirvana", "1991", "rock", 5),
        Disco.crearDiscos("prueba2", "Jackson", "2000", "pop", 12),
    ];

    const listaDiscos = document.getElementById("lista-discos");
    const historialDiscos = document.getElementById("historial-discos");

    //funcion parecida al ejercicio anterior
    function actualizarDiscos(array) {
        if (array.length === 0) {
            listaDiscos.innerHTML = "<strong>No hay discos en la colección</strong>";
        } else {
            listaDiscos.innerHTML = `
                <strong>Colección actual (${array.length} disco${array.length > 1 ? "s" : ""})</strong>
            `;
        }
    }

    function añadirHistorial(texto) {
        historialDiscos.innerHTML += `<br>${texto}`;
    }


    function mostrarMenu(array) {
        let opcion = prompt(

            "MENU DE DISCOS\n\n" +
            "1 Numero de discos\n" +
            "2 Listado de discos\n" +
            "3 Intervalo de discos\n" +
            "4 Añadir disco\n" +
            "5 Borrar disco\n" +
            "6 Buscar disco\n\n" +
            "Elige una opcion "
        );

        if (opcion === null || opcion === "") {
            añadirHistorial("No haz elegido nada");
            return;
        }

        opcion = opcion.trim();

        switch (opcion) {
            case "1":
                añadirHistorial(`<strong>Numero de discos </strong> ${array.length}`);
                break;

            case "2":
                if (array.length === 0) {
                    añadirHistorial("La coleccion esta vacia ");
                    break;
                }
                let orden = prompt("Opciones \n1 Orden actual\n2  Al reves\n3 Por nombre" );
                let lista = [];
                let titulo = "";
                if(orden =="1"){

                    lista = array;
                    titulo = "Orden Actual";

                }else if (orden === "2") {
                    lista = [...array].reverse();
                    titulo = "Orden al Reves";

                } else if (orden === "3") {
                    lista = [...array].sort((a, b) => (a.nombre || "").localeCompare(b.nombre || ""));
                    titulo = "Orden Alfabetico";
                } else {
                    añadirHistorial("Opcion no valida")
                }

                let texto = `<strong>${titulo}:</strong><br>`;
                lista.forEach(d => {
                    texto += `<strong>${d.nombre}</strong> - ${d.grupoCantante} (${d.yearPublicacion})<br>`;
                });
                añadirHistorial(texto);
                break;

            case "3":
                let inicio = parseInt(prompt("Pos Inicio "));
                let fin = parseInt(prompt("Pos Final "));

                if (isNaN(inicio) || isNaN(fin) || inicio < 0 || fin > array.length || inicio >= fin) {
                    añadirHistorial("Error fuera de rango ");
                } else {
                    let seleccion = array.slice(inicio, fin);
                    let texto = `<strong>Intervalo ${inicio}-${fin-1}:</strong><br>`;
                    seleccion.forEach((d, i) => texto += `→ ${d.nombre} - ${d.grupoCantante}<br>`);
                    añadirHistorial(texto);
                }
                break;

            case "4":

                let eleccion = prompt("Opcion \n1 Añadir al Inicio \n2 Añadir al Final");

                let nombre = prompt("Nombre del disco ");
                let artista = prompt("Grupo o cantante ");
                let year = prompt("Año de publicación ");
                let tipoMusica = prompt("Tipo Musica ");

                let estanteria = parseInt(prompt("Numero de Estanteria"));
                //Usando el metodo de Discos
                let nuevoDisco = Disco.crearDiscos(nombre, artista, year, tipoMusica, estanteria);

                if (eleccion === "1") {
                    array.unshift(nuevoDisco);
                    añadirHistorial(`<strong>Disco añadido al Inicio</strong> "${nuevoDisco.nombre}"`);
                } else {
                    array.push(nuevoDisco);
                    añadirHistorial(`<strong>Disco añadido al Final</strong> "${nuevoDisco.nombre}"`);
                }
                actualizarDiscos(array);
                break;

            case "5":
                if (array.length === 0) {
                    añadirHistorial("El array esta vacio");
                    break;
                }
                let borrar = prompt("Opcion \n1 Borrar al Inicio \n2 Borrar al Final ");
                let borrado;
                if (borrar === "1") {
                    borrado = array.shift();
                    añadirHistorial(`<strong>Borrado al inicio</strong> "${borrado.nombre}"`);
                } else {
                    borrado = array.pop();
                    añadirHistorial(`<strong>Borrado al final</strong>: "${borrado.nombre}"`);
                }
                actualizarDiscos(array);
                break;

            case "6":
                let tipo = prompt("Opcion de buscar \n1 Posicion \n2 Nombre " );

                if (tipo === "1") {
                    let pos = parseInt(prompt(`Posicion (0-${array.length-1}):`));

                    if (pos >= 0 && pos < array.length) {
                        let d = array[pos];
                        añadirHistorial(`Posicion ${pos}: <strong>${d.nombre}</strong> - ${d.grupoCantante} (${d.yearPublicacion})`);
                    } else {
                        añadirHistorial("Posicion fuera de rango");
                    }
                } else {
                    let nombreBuscado = prompt("Nombre del disco ");
                    let encontrado = array.find(d => (d.nombre || "").toLowerCase().includes(nombreBuscado.trim().toLowerCase()));
                    if (encontrado) {
                        añadirHistorial(`Encontrado: <strong>${encontrado.nombre}</strong> de ${encontrado.grupoCantante}`);
                    } else {
                        añadirHistorial(`"${nombreBuscado}" no encontrado.`);
                    }
                }
                break;

            default:
                añadirHistorial("Opción no válida.");
        }


        setTimeout(() => mostrarMenu(array), 500);
    }

    // === INICIO ===
    actualizarDiscos(coleccionDiscos);
    setTimeout(() => mostrarMenu(coleccionDiscos), 1000);

});