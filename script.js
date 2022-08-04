window.onload = function corInicial (){
  let preto = document.querySelector('#cor1');
  preto.classList.add('selected')

  for (let index = 1; index <= 25; index += 1) {
 let divColor = document.createElement('div');
 divColor.className = 'pixel';
 document.getElementById('pixel-board').appendChild(divColor);
}
}

let input = document.querySelector('#board-size');
let botaoPopulate = document.querySelector('#generate-board');
let divPai = document.querySelector('#pixel-board');

botaoPopulate.addEventListener('click', function(){
    if((input.value >= 5) && (input.value <= 50)){
      let pixelDel = document.querySelectorAll('.pixel');
      for (let index = 0; index < pixelDel.length; index += 1) {
        pixelDel[index].remove();
        
      }
      for (let index = 1; index <= input.value; index += 1) {
         divColor = document.createElement('div');
         divColor.className = 'pixel';
         document.getElementById('pixel-board').appendChild(divColor);
      }

      } else {
      alert("Board inválido!");
    }
})

let board = document.querySelector('#color-palette');
board.addEventListener('click', function cor(event) {
     let divSelecionada =  event.target;
     let selected = document.querySelector('.selected')
     selected.classList.remove('selected')
     divSelecionada.classList.add('selected')
     let corDoBoard = divSelecionada;
     return corDoBoard
})

let pixel = document.querySelector('#pixel-board');
pixel.addEventListener('click', function (e){
  let color =
  getComputedStyle(document.querySelector('.selected')).backgroundColor;
  e.target.style.backgroundColor = color;

});

let pixelCler= document.querySelectorAll('.pixel');
let botao = document.querySelector('#clear-board');
botao.addEventListener('click', function(){
  for (let index = 0; index <= pixelCler.length; index += 1) {
    pixelCler[index].style.backgroundColor = "white";
    
  }
})







   





