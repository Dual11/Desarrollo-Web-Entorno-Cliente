

const mostrarTabla = (event) => {
event.preventDefault();
const numero =
Number(document.getElementById('numero').value);
if (numero >= 0 && numero <= 10) {
let tabla = document.getElementById('tabla');
let tablaMultiplicar = `<h2>Tabla de multiplicar del
número ${numero}</h2>`;
tablaMultiplicar += '<ul>';
for (let i = 0; i <= 10; i++) {
tablaMultiplicar += `<li>${numero} * ${i} = ${numero *i}</li>`;
}
tablaMultiplicar += '</ul>';
tabla.innerHTML = tablaMultiplicar;
} else {

alert('El número introducido debe estar entre 0 y 10(ambos inclusive');
document.getElementById("numero").value = '';
}
}


const mostrarTablaDivision = (event) => {
event.preventDefault();
const numero = Number(document.getElementById('numero').value);
if (numero >= 0 && numero <= 10) {
const contenedor = document.getElementById('tablaDividir');
let html = `<h2>Tabla de dividir del número ${numero}</h2><ul>`;
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
    html += `<li>${numero} / 0 = No se puede dividir por 0</li>`;
    } else {
    html += `<li>${numero} / ${i} = ${(numero / i).toFixed(2)}</li>`;
    }
}
html += '</ul>';
contenedor.innerHTML = html;
} else {
alert('El número introducido debe estar entre 0 y 10(ambos inclusive');
document.getElementById("numero").value = '';
}
};
