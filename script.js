for (let index = 1; index <= 25; index += 1) {
    const divColor = document.createElement('div');
    divColor.className = 'pixel';
    document.getElementById('pixel-board').appendChild(divColor);
  }

let corSelecionada = "black";

window.onload = function corInicial (){
     let preto = document.querySelector('#cor1');
     preto.classList.add('selected')
     console.log(preto)
}

let board = document.querySelector('#color-palette');
board.addEventListener('click', function(event) {
     let divSelecionada =  event.target;
     let selected = document.querySelector('.selected')
     selected.classList.remove('selected')
     divSelecionada.classList.add('selected')
   });





