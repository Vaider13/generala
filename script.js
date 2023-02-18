let numeroTirada = 0;
const caraDados = [
    {
        valor: 1,
        url: "Images/cara1.png",
        urlInv: "images/caraInv1.png"
    },
    {
        valor: 2,
        url: "Images/cara2.png",
        urlInv: "images/caraInv2.png"
    },
    {
        valor: 3,
        url: "Images/cara3.png",
        urlInv: "images/caraInv3.png"
    },
    {
        valor: 4,
        url: "Images/cara4.png",
        urlInv: "images/caraInv4.png"
    },
    {
        valor: 5,
        url: "Images/cara5.png",
        urlInv: "images/caraInv5.png"
    },
    {
        valor: 6,
        url: "Images/cara6.png",
        urlInv: "images/caraInv6.png"
    },
]
let dado1 = new dado(1, "dadoImg1", 0, 0);
let dado2 = new dado(2, "dadoImg2", 0, 0);
let dado3 = new dado(3, "dadoImg3", 0, 0);
let dado4 = new dado(4, "dadoImg4", 0, 0);
let dado5 = new dado(5, "dadoImg5", 0, 0);
let turnoJugador = 0;
let puntajeJugador1 = 0;
let puntajeJugador2 = 0;

function dado(numeroDado, id, valor, estado,) {
    this.numeroDado = numeroDado;
    this.id = id;
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


    switch(true) {
        case numeroTirada === 0:
            dado1.valor = Math.floor(Math.random() * 6) + 1;
            dado2.valor = Math.floor(Math.random() * 6) + 1;
            dado3.valor = Math.floor(Math.random() * 6) + 1;
            dado4.valor = Math.floor(Math.random() * 6) + 1;
            dado5.valor = Math.floor(Math.random() * 6) + 1;
            break;
        case numeroTirada > 0:
            (dado1.estado === 0) ? dado1.valor = Math.floor(Math.random() * 6) + 1 : null;
            (dado2.estado === 0) ? dado2.valor = Math.floor(Math.random() * 6) + 1 : null;
            (dado3.estado === 0) ? dado3.valor = Math.floor(Math.random() * 6) + 1 : null;
            (dado4.estado === 0) ? dado4.valor = Math.floor(Math.random() * 6) + 1 : null;
            (dado5.estado === 0) ? dado5.valor = Math.floor(Math.random() * 6) + 1 : null;
            break;  
            }

    for(let i = 0; i < caraDados.length; i++) {
        if (dado1.valor == caraDados[i].valor && dado1.estado == 0) {
            cargarImagenes(dado1.valor, dado1.id);
        };
        if (dado2.valor  == caraDados[i].valor && dado2.estado == 0) {
            cargarImagenes(dado2.valor, dado2.id);
            };
        if (dado3.valor  == caraDados[i].valor && dado3.estado == 0) {
            cargarImagenes(dado3.valor, dado3.id);
        };
        if (dado4.valor  == caraDados[i].valor && dado4.estado == 0) {
            cargarImagenes(dado4.valor, dado4.id);
            };
        if (dado5.valor  == caraDados[i].valor && dado5.estado == 0) {
            cargarImagenes(dado5.valor, dado5.id);
        };
    }
    numeroTirada++;
}

function seleccionarDado(dados) {
    if( dados.estado === 0) {
        dados.estado = 1;
    } else {
        dados.estado = 0;
    }

    switch(dados.numeroDado) {
        case 1:
            if (dados.estado === 1) {
                cargarImagenesInvertidas(dados.valor, dados.id);
            } else {
                cargarImagenes(dados.valor, dados.id);
            }
            break;
        case 2:
            if (dados.estado === 1) {
                cargarImagenesInvertidas(dados.valor, dados.id);
            } else {
                cargarImagenes(dados.valor, dados.id);
            }
            break;
        case 3:
            if (dados.estado === 1) {
                cargarImagenesInvertidas(dados.valor, dados.id);
            } else {
                cargarImagenes(dados.valor, dados.id);
            }
            break;
        case 4:
            if (dados.estado === 1) {
                cargarImagenesInvertidas(dados.valor, dados.id);
            } else {
                cargarImagenes(dados.valor, dados.id);
            }
            break;
        case 5:
            if (dados.estado === 1) {
                cargarImagenesInvertidas(dados.valor, dados.id);
            } else {
                cargarImagenes(dados.valor, dados.id);
            }
            break;
    }
}

function cargarImagenes(valor, id){
    let imag = document.getElementById(id);
    imag.src = caraDados[valor - 1].url;
}

function cargarImagenesInvertidas(valor, id){
    let imag = document.getElementById(id);
    imag.src = caraDados[valor - 1].urlInv;
}

