

function finClase(){

    let finCurso = new Date('2026','5','24');

    let ahora = new Date();
    
    let diff = finCurso - ahora;
    let nDias = Math.round (diff / (1000 * 60 * 60 * 24)+1);

document.getElementById("resultado").innerHTML = nDias;

}

function cumple(){

    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let resultDiv = document.getElementById('resultCumple');
    
    let añoActual = new Date().getFullYear();
    let fin = 2100;
    let añosDomingo = [];

    for (let año = añoActual; año <= fin; año++) {
        
        let fecha = dayjs(`${año}-${mes}-${dia}`);

        if (fecha.day() === 0) {
            añosDomingo.push(año);
        }
    }

    resultDiv.innerHTML = `
        Tu cumpleaños (${dia}/${mes}) cae en <strong>domingo</strong> en:<br>
        ${añosDomingo.map(a => `- ${a}`).join('<br>')}<br>
        <strong>Total: ${añosDomingo.length} veces</strong>
    `;


}

function mostrarFecha() {
    const opcion = parseInt(document.getElementById('formato').value);
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = hoy.getMonth();
    const año = hoy.getFullYear();
    const diaSemana = hoy.getDay();

    const diasES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    const diasEN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const mesesES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const mesesEN = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];

    let resultado = '';

    if (opcion === 1) {
    resultado = `${dia.toString().padStart(2, '0')}/${(mes+1).toString().padStart(2, '0')}/${año}`;
    }
    else if (opcion === 2) {
    resultado = `${diasES[diaSemana]}, ${dia} de ${mesesES[mes]} de ${año}.`;
    }
    else if (opcion === 3) {
    resultado = `${diasEN[diaSemana]}, ${mesesEN[mes]} ${dia}, ${año}.`;
    }
    else {
    resultado = 'Opción inválida';
    }

    document.getElementById('resultFecha').innerHTML = resultado;
}



function mostrarHora() {

    let option = parseInt(document.getElementById('form-hora').value);

    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();

    let resultado = "";

    if (option === 1) {

        if (hora < 10) hora = "0" + hora;
        if (minuto < 10) minuto = "0" + minuto;
        if (segundo < 10) segundo = "0" + segundo;

        resultado = hora + ":" + minuto + ":" + segundo;

    } else if (option === 2) {

        let sufijo = "AM";
        let hora12 = hora;

        if (hora === 0) {
            hora12 = 12;
            sufijo = "AM";
        } else if (hora < 12) {
            sufijo = "AM";
        } else if (hora === 12) {
            sufijo = "PM";
        } else {
            hora12 = hora - 12;
            sufijo = "PM";
        }

        if (hora12 < 10) hora12 = "0" + hora12;
        if (minuto < 10) minuto = "0" + minuto;
        if (segundo < 10) segundo = "0" + segundo;

        resultado = hora12 + ":" + minuto + ":" + segundo + " " + sufijo;

    }

    document.getElementById('resultHora').innerHTML = resultado;
}

function calcular() {

    let opcion = parseInt(document.getElementById("form-math").value);
    let resultado = "";

    if (opcion === 1) {

        let base = parseFloat(prompt("dame la base "));
        let exponente = parseFloat(prompt("dame el exponente "));

        let potencia = Math.pow(base, exponente);
        resultado = `La potencia de ${base} elevado a ${exponente} es: ${potencia}`;

    } else if (opcion === 2) {

        let numero = parseFloat(prompt("dame un numero "));
        if (numero < 0) {

            resultado = "Error no puede ser negativo ";

        } else {
            let raiz = Math.sqrt(numero);
            resultado = `La raíz de ${numero} es: ${raiz}`;
        }

    } else if (opcion === 3) {
        
        let decimal = parseFloat(prompt("dame un numero decimal "));

        resultado = `
            Número original: ${decimal} <br>
            Redondeo normal: ${Math.round(decimal)} <br>
            Redondeo al alza: ${Math.ceil(decimal)} <br>
            Redondeo a la baja: ${Math.floor(decimal)}
        `;

    } else if (opcion === 4) {

        let angulo = parseFloat(prompt("dame un numero para el triangulo, 0 a 360"));

        let radianes = angulo * Math.PI / 180;
        let seno = Math.sin(radianes);
        let coseno = Math.cos(radianes);
        let tangente = Math.tan(radianes);

        resultado = `
            Ángulo: ${angulo}° <br>
            Seno: ${seno.toFixed(4)} <br>
            Coseno: ${coseno.toFixed(4)} <br>
            Tangente: ${tangente.toFixed(4)}
        `;
    } else {
        resultado = "Por favor, selecciona una opción válida.";
    }

    document.getElementById("resultMath").innerHTML = resultado;
}

function calcularRadio() {

    let radio = parseFloat(document.getElementById("radio").value);

    let pi = Math.PI;

    let diametro = radio * 2;
    let perimetro = 2 * pi * radio;
    let areaCirculo = pi * Math.pow(radio, 2);
    let areaEsfera = 4 * pi * Math.pow(radio, 2);
    let volumenEsfera = (4 / 3) * pi * Math.pow(radio, 3);

    document.getElementById("resultRadio").innerHTML = `
        
        Radio: ${radio} cm<br>
        Diámetro: ${diametro} cm<br>
        Perímetro de la circunferencia: ${perimetro.toFixed(2)} cm<br>
        Área del círculo: ${areaCirculo.toFixed(2)} cm²<br>
        Área de la esfera: ${areaEsfera.toFixed(2)} cm²<br>
        Volumen de la esfera: ${volumenEsfera.toFixed(2)} cm³
    `;
}


function convertir() {

    let num = parseInt(document.getElementById("numero").value);

    let exponencial = num.toExponential();
    let conDecimales = num.toFixed(4);
    let binario = num.toString(2).padStart(8, "0");
    let octal = num.toString(8);
    let hexadecimal = "0x" + num.toString(16);


    document.getElementById("resultEntero").innerHTML = `

        Exponencial: ${exponencial}<br>
        Con 4 decimales: ${conDecimales}<br>
        Binario: ${binario}<br>
        Octal: ${octal}<br>
        Hexadecimal: ${hexadecimal}
    `;
        }


function nombreCompleto() {

            let nombreCompleto = document.getElementById("nameCompleto").value.trim();

            let partes = nombreCompleto.split(" ");
            let minusculas = nombreCompleto.toLowerCase();
            let mayusculas = nombreCompleto.toUpperCase();
            
            nombre = partes[0];
            apellido1 = partes[1];
            apellido2 = partes[2];

            let user1 = nombre[0] + apellido1 + apellido2[0];

            let user2 = nombre.slice(0,3) + apellido1.slice(0,2) + apellido2.slice(0,2);

        document.getElementById('resultNombre').innerHTML = `

                Nombre Minusculas: ${minusculas}<br>
                Nombre Mayusculas: ${mayusculas}<br>
                Nombre: ${nombre}<br>
                Apellido1: ${apellido1}<br>
                Apellido2: ${apellido2}<br>
                User1: ${user1}<br>
                User2: ${user2}<br>

        `;


        }


        function contraseña(){

            let contra = document.getElementById('contra').value.trim();

            let validar = 0;
            let error = " ";

            if(contra.length > 8 && contra.length < 16){

                validar += 1;

            }else{
                
                error = "Error: Debe estar entre 8 y 16";
            }


            if(/[A-Z]/.test(contra) && /[a-z]/.test(contra)){

                validar += 1;
                    
                }else{

                error = "Error: Debe tener Mayusculas y Minusculas";
                }

            if(/\d/.test(contra)){

                validar += 1;
            }else{

                error = "Error: Debe tener numeros";
            }

            if(/[-_@#$%&]/.test(contra)){

                validar += 1

            }else{

                error = "Error: Debe tener caracteres especiales (- _ @ # $ % &)";
            }

            if(validar == 4){
                
                document.getElementById('resultContra'). innerHTML = `Tu contraseña es segura <br> ${contra}`

            }else{

                document.getElementById('resultContra'). innerHTML = error;

            }
        }


    


