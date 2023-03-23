const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    console.log(instrumento);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    console.log(contador);
}