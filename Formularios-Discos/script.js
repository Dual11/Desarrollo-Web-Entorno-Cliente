

const cartas = [

    "bart", "bart",
    "lisa", "lisa",
    "homer", "homer",
    "maggi", "maggi",
    "marge", "marge",
    "milhouse", "milhouse"
];

cartas.sort(() => Math.random() - 0.5);

const celdas = document.querySelectorAll("#tablero td");

celdas.forEach((celda, indice) =>{

    celda.dataset.cartas = cartas[indice];
});

let primeraCarta = null;
let segundaCarta = null;

let espera = false;

let intentos = 0;
let aciertos = 0;

const contador = document.getElementById("contador");

celdas.forEach(celda => {

    celda.addEventListener("click", () =>{
        
        if(espera)
            return;

        if(celda.classList.contains("descubierta"))
            return;

        if(celda === primeraCarta)
            return;

        const nombre = celda.dataset.cartas;
        celda.innerHTML = `<img src="simpson-${nombre}.png" alt="${nombre}">`;

        if(!primeraCarta){
            primeraCarta = celda;
        }else{
            segundaCarta = celda;
            espera = true;
            intentos++;
            contador.textContent = intentos;

            setTimeout(() =>{
                
                if(primeraCarta.dataset.cartas === segundaCarta.dataset.cartas){

                    primeraCarta.classList.add("descubierta");
                    segundaCarta.classList.add("descubierta");
                    aciertos++;

                    if(aciertos === 6){

                        setTimeout(()=>{
                            alert("Haz ganado " + intentos);
                        }, 400);
                    }
                }else{
                    primeraCarta.innerHTML = "";
                    segundaCarta.innerHTML = "";
                }

                primeraCarta = null;
                segundaCarta = null;
                espera = false;
            }, 800);
        }
    });
});