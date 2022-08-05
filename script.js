window.onload = function corInicial (){
  let preto = document.querySelector('#cor1');
  preto.classList.add('selected')
  let cor2 = document.querySelector('#cor2');
  let cor3 = document.querySelector('#cor3');
  let cor4 = document.querySelector('#cor4');
  cor2.style.backgroundColor = criarCor()
  cor3.style.backgroundColor = criarCor()
  cor4.style.backgroundColor = criarCor()

  for (let index = 1; index <= 25; index += 1) {
 let divColor = document.createElement('div');
 divColor.className = 'pixel';
 document.getElementById('pixel-board').appendChild(divColor);
}
}

function criarCor () {
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);
  let cor = 'rgb('+r+','+g+','+b+')';
  return cor;
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
      for (let index = 1; index <= input.value*input.value; index += 1) {
         divColor = document.createElement('div');
         divColor.className = 'pixel';
         document.getElementById('pixel-board').appendChild(divColor);
      }

      } else {
      alert("Board inválido!");
    }

    let larguraDiv = input.value * 42;
      divPai.style.width = larguraDiv + "px";
      divPai.style.height = larguraDiv + "px";
      
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

const pixelClear = document.getElementsByClassName('pixel');
let botao = document.querySelector('#clear-board');

function limpaPixel() {
	for(let i = 0; i < 25; i += 1) {
		pixelClear[i].style.backgroundColor = 'white';
	}
}

botao.addEventListener('click', limpaPixel);






   





