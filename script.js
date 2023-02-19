let numeroTirada = 0;
let jugada = [0,0,0,0,0];
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
let turnoJugador = 1;
let puntajeJugador1 = 0;
let puntajeJugador2 = 0;

function dado(numeroDado, id, valor, estado,) {
    this.numeroDado = numeroDado;
    this.id = id;
    this.valor = valor;
    this.estado = estado;
}

function actualizarValor(dado) {
    if (dado.estado === 0) {
        dado.valor = Math.floor(Math.random() * 6) + 1;
    }
}
function lanzarDados() {

    actualizarValor(dado1);
    actualizarValor(dado2);
    actualizarValor(dado3);
    actualizarValor(dado4);
    actualizarValor(dado5);

    [dado1, dado2, dado3, dado4, dado5].forEach(dado => {
        if (dado.estado === 0) {
            caraDados.forEach(cara => {
                if (dado.valor === cara.valor) {
                    cargarImagenes(dado.valor, dado.id);
                }
            });
        }
    });

    numeroTirada++;
    let tirada = document.getElementById("numtirada");
    let tiradas = ["Lance los dados apretando el boton", "1er Tiro", "2do Tiro", "3er Tiro"];
    tirada.innerHTML = tiradas[numeroTirada];
    
   
    let miBoton = document.getElementById("lanzar");
    if (numeroTirada === 3) {
    miBoton.disabled = true;
    miBoton.classList.add("boton-deshabilitado");
    miBoton.classList.remove("boton-activo");
    } 
}

function seleccionarDado(dados) {
    if (dados.estado === 0) {
        dados.estado = 1;
    } else {
        dados.estado = 0;
    }

    for (let i = 1; i <= 5; i++) {
        if (dados.numeroDado === i) {
            if (dados.estado === 1) {
                cargarImagenesInvertidas(dados.valor, dados.id);
            } else {
                cargarImagenes(dados.valor, dados.id);
            }
            break;
        }
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

function ordenarDados() {
    jugada[0] = dado1.valor;
    jugada[1] = dado2.valor;
    jugada[2] = dado3.valor;
    jugada[3] = dado4.valor;
    jugada[4] = dado5.valor;
    jugada.sort(function(a, b) {
        return a - b;
      });
}

function comprobarEscalera() {
    for (let i = 0; i < jugada.length - 1; i++) {
      if (jugada[i+1] - jugada[i] !== 1 || jugada[i] === jugada[i+1]) {
        return false;
      }
    }
    return true;
  }

function comprobarFull() {
    ordenarDados();
    if (((jugada[0] == jugada[1] && jugada[1] == jugada[2]) && (jugada[3] == jugada[4])) ||
        ((jugada[0] == jugada[1]) && (jugada[2] == jugada[3] && jugada[3] == jugada[4]))) {
      return true;
    }
    return false;
  }

function comprobarPoker() {
    ordenarDados();
    if ((jugada[0] == jugada[1] == jugada[2] == jugada[3]) || (jugada[1] == jugada[2] == jugada[3] == jugada[4])) {
        return true;
  }
  return false;
}

function comprobarGenerala() {
    ordenarDados();
    return ( jugada[0] == jugada[1] == jugada[2] == jugada[3] == jugada[4]);
}



function full() {
    
    let full = comprobarFull();
    let puntaje = 0;   
    let celda1 = document.getElementById("fullj1");
    let celda2 = document.getElementById("fullj2");

    if (full && numeroTirada == 1) {
       puntaje = 35;
    } else if (full) {
        puntaje = 30;
    }; 
  
    if (turnoJugador === 1) {
        puntajeJugador1 = puntajeJugador1 + puntaje;
        celda1.innerHTML = puntaje;
        celda1.onclick = null;
    } else {
        puntajeJugador2 = puntajeJugador2 + puntaje;
        celda2.innerHTML = puntaje;
        celda2.onclick = null;
    }

    (turnoJugador === 1) ? turnoJugador = 2 : turnoJugador = 1;
    resetValues();
}

function resetValues() {
    let miBoton = document.getElementById("lanzar");
    miBoton.disabled = false;
    miBoton.classList.remove("boton-deshabilitado");
    miBoton.classList.add("boton-activo");
    numeroTirada = 0;
    dado1.estado = 0;
    dado2.estado = 0;
    dado3.estado = 0;
    dado4.estado = 0;
    dado5.estado = 0;
}

