const hexa = [0, 1, 2, 3, 4, 5, 6 , 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn')
const color = document.querySelector('.span-color')

btn.addEventListener('click', function(){

    let hexColor = '#'

    for(let i = 0; i<6; i++){
        hexColor += hexa[getRandomNumbers()]
    }

    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor

    console.log(hexColor)

    if(isDark()){
      document.getElementById('container').style.color = 'white'
    }else{
      document.getElementById('container').style.color = 'black'
    }
})

function getRandomNumbers(){
    return Math.floor(  Math.random() * hexa.length )
}


function isDark(color){
  
  const rgbColor = window.getComputedStyle(document.body).backgroundColor;

  console.log(rgbColor)

  // 1. Extrai os valores numéricos de R, G e B
  const rgbValues = rgbColor.match(/\d+/g).map(Number);
  const [r, g, b] = rgbValues;

  // 2. Fórmula de Luminosidade Percebida (0 a 255)
  // Pesos: Red: 21.26%, Green: 71.52%, Blue: 7.22%
  const brightness = (r * 0.2126 + g * 0.7152 + b * 0.0722);

  // Se o brilho for menor que 128 (metade de 255), a cor é escura
  return brightness < 128;
}