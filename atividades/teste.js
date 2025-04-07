let x = 7
let y = 2

function verificarPonto(x, y) {
    if (x === 0 && y === 0) {
    console.log("Origem");
    } else if (x === 0) {
    console.log("Eixo Y");
    } else if (y === 0) {
    console.log("Eixo X");
    } else if (x > 0 && y > 0) {
    console.log("Quadrante 1");
    } else if (x < 0 && y > 0) {
    console.log("Quadrante 2");
    } else if (x < 0 && y < 0) {
    console.log("Quadrante 3");
    } else {
    console.log("Quadrante 4");
    }
    }

console.log(verificarPonto);