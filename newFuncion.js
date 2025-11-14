function mostrarFecha() {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const ahora = new Date();
    const diaSemana = diasSemana[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const anyo = ahora.getFullYear();

    document.getElementById("diaSemana").textContent = diaSemana;
    document.getElementById("dia").textContent = dia;
    document.getElementById("mesAnyo").textContent = mes + " " + anyo;
}


function mostrarPopupBienvenida() {
    setTimeout(function() {
        document.getElementById("popupBienvenida").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }, 10000);
}

function cerrarPopup() {
    document.getElementById("popupBienvenida").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


window.onload = function() {
    mostrarFecha();
    mostrarPopupBienvenida();
};



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
