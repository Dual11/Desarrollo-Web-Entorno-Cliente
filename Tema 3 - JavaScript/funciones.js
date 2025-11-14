function calcular(){

            
            var alturaCM = parseInt(document.getElementById('altura').value);
            var peso = parseInt(document.getElementById('peso').value);
            if(alturaCM === 0 || peso === 0){
                alert("Error de numero")
                return;
            }

            var alturaM = alturaCM / 100;
            
             var imc = Math.round(peso/ (alturaM * alturaM));
            
            var estado ;

            

            if( imc < 16.00){

                estado = "desgadez severa"
            }else if(imc >= 16.00 && imc <= 18.49){
                estado = "Infrapeso (delgadez aceptable)"

            }else if(imc >= 18.50 && imc <= 24.99){

                estado = "Peso normal"
            }else if(imc >= 25.00 && imc <= 29.99){

                estado = "Sobrepeso"
            }else if(imc >= 30.00 && imc <= 34.99){

                estado = "Obeso (Tipo I)"
            }else if(imc >= 35.00 && imc <= 40.00){

                estado = "Obeso (Tipo II)"
            }else if(imc > 40.00){

                estado = "Obeso (Tipo III)"
            }else{
                estado = "Erro de programa"
            }
            var result = 'Tu IMC es:  ' + imc + ' Tu estado es: ' + estado;

            document.getElementById('resultado').innerHTML = '<p><strong>' + result + '</strong></p>';
            

        }

    function calcularFCM() {

    var edad = parseInt(document.getElementById('edad').value);
    var sexo = document.getElementById('sexo').value.toUpperCase();

    if (isNaN(edad) || edad <= 0) {
        alert("Edad debe ser mayor que 0 ");
        return;
    }
    if (sexo !== "H" && sexo !== "M") {
        alert("Sexo incorrecto H o M ");
        return;
    }

    var fcm = sexo === "H" ? 220 - edad : 226 - edad;
    
    var zonas = [
        [0.6, 0.7, "recuperación"],
        [0.7, 0.8, "aeróbica"],
        [0.8, 0.9, "anaeróbica"],
        [0.9, 1.0, "línea roja"]
    ];

    var html = "<p><strong>FCM: " + fcm + "</strong></p><ul style='margin:0; padding-left:20px'>";
    zonas.forEach(z => {
        html += "<li>Zona " + z[2] + ": " + 
                Math.round(fcm * z[0]) + " - " + 
                Math.round(fcm * z[1]) + "</li>";
    });
    html += "</ul>";

    document.getElementById('resultFCM').innerHTML = html;
}

function calcularCategoria() {

    var age = parseInt(document.getElementById('age').value);
    var actual = 2025;
    var edad = actual - age;

    if (isNaN(age) || age < 1950 || age > 2010) {

        alert("Usa entre 1950 y 2010 ");
        return;
    }

    var categoria;

    if (edad < 22) {
        categoria = "Estudiante";
    } else if (edad <= 25) {
        categoria = "Junior Developer";
    } else if (edad <= 30) {
        categoria = "Mid-Level Developer";
    } else if (edad <= 35) {
        categoria = "Senior Developer";
    } else if (edad <= 45) {
        categoria = "Tech Lead";
    } else {
        categoria = "Architect ";
    }

    var result = "<p><strong>Tu categoría: " + categoria + " (edad: " + edad + ")</strong></p>";
    result += "<ul style='margin:5px 0; padding-left:20px; font-size:15px;'>";


    document.getElementById('resultCat').innerHTML = result;
}

function mostrarHorario() {


    var tabla = "";

    tabla += "<h4>Mañana (Lunes a Viernes)</h4>";
    tabla += "<table border='1' style='border-collapse: collapse; width: 100%;'>";
    
    tabla += "<tr><th>Hora</th>";
    var diasManana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    for (var i = 0; i < diasManana.length; i++) {
        tabla += "<th>" + diasManana[i] + "</th>";
    }
    tabla += "</tr>";

    var horasManana = ["9:00-11:00", "11:00-13:00", "13:00-15:00"];
    for (var i = 0; i < horasManana.length; i++) {
        tabla += "<tr><th>" + horasManana[i] + "</th>";
        for (var j = 0; j < 5; j++) {
            tabla += "<td></td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table><br>";

    tabla += "<h4>Tarde (Lunes a Domingo)</h4>";
    tabla += "<table border='1' style='border-collapse: collapse; width: 100%;'>";
    
    tabla += "<tr><th>Hora</th>";
    var diasTarde = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    for (var i = 0; i < diasTarde.length; i++) {
        tabla += "<th>" + diasTarde[i] + "</th>";
    }
    tabla += "</tr>";

    for (var hora = 16; hora < 21; hora++) {
        var horaTexto = hora + ":00-" + (hora + 1) + ":00";
        tabla += "<tr><th>" + horaTexto + "</th>";
        for (var j = 0; j < 7; j++) {
            tabla += "<td></td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";

    document.getElementById('horario').innerHTML = tabla;
}
