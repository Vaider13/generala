let numeroTirada = 0;
const caraDados = [
    {
        valor: 1,
        url: "Images/cara1.png"
    },
    {
        valor: 2,
        url: "Images/cara2.png",
    },
    {
        valor: 3,
        url: "Images/cara3.png",
    },
    {
        valor: 4,
        url: "Images/cara4.png",
    },
    {
        valor: 5,
        url: "Images/cara5.png",
    },
    {
        valor: 6,
        url: "Images/cara6.png",
    },
]
let dado1 = new dado(0, 0);
let dado2 = new dado(0, 0);
let dado3 = new dado(0, 0);
let dado4 = new dado(0, 0);
let dado5 = new dado(0, 0);
let turnoJugador = 0;
let puntajeJugador1 = 0;
let puntajeJugador2 = 0;

function dado(valor, estado,) {
    this.valor = valor;
    this.estado = estado;
}


/*const cara1 = new dado(1,dadoImg1);
const cara2 = new dado(2,dadoImg2);
const cara3 = new dado(3,dadoImg3);
const cara4 = new dado(4,dadoImg4);
const cara5 = new dado(5,dadoImg5);
const cara6 = new dado(6,dadoImg6);*/

//Math.floor(Math.random() * 6) + 1,""


function lanzarDados() {

    if (numeroTirada === 0) {
        dado1.valor = Math.floor(Math.random() * 6) + 1;
        dado2.valor = Math.floor(Math.random() * 6) + 1;
        dado3.valor = Math.floor(Math.random() * 6) + 1;
        dado4.valor = Math.floor(Math.random() * 6) + 1;
        dado5.valor = Math.floor(Math.random() * 6) + 1;
    }

    for(let i = 0; i < caraDados.length; i++) {
        if (dado1.valor == caraDados[i].valor) {
        let imag1 = document.getElementById("dadoImg1");
        imag1.src = caraDados[i].url;
        };
        if (dado2.valor  == caraDados[i].valor) {
            let imag2 = document.getElementById("dadoImg2");
            imag2.src = caraDados[i].url;
            };
        if (dado3.valor  == caraDados[i].valor) {
        let imag3 = document.getElementById("dadoImg3");
        imag3.src = caraDados[i].url;
        };
        if (dado4.valor  == caraDados[i].valor) {
            let imag4 = document.getElementById("dadoImg4");
            imag4.src = caraDados[i].url;
            };
        if (dado5.valor  == caraDados[i].valor) {
        let imag5 = document.getElementById("dadoImg5");
        imag5.src = caraDados[i].url;
        };
    }
    //numeroTirada++;
}

