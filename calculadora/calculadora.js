const display = document.querySelector('[txt-display]');
const buffer = document.querySelector('[txt-buffer]');
const numeroBtns = document.querySelectorAll('[btn-numero]');
const operadorBtns = document.querySelectorAll('[btn-operador]');
const btnAc = document.querySelector('[btn-ac]');
const btnDel = document.querySelector('[btn-delete]');
const btnIgual = document.querySelector('[btn-igual]');

let current = '';
let previous = '';
let operador = undefined;

numeroBtns.forEach(button => {
  button.addEventListener('click', () => {
    current += button.textContent;
    updateDisplay();
  });
});

operadorBtns.forEach(button => {
  button.addEventListener('click', () => {
    if (current === '') return;
    if (previous !== '') calculate();
    operador = button.textContent;
    previous = current;
    current = '';
    updateDisplay();
  });
});

btnIgual.addEventListener('click', () => {
  calculate();
  updateDisplay();
});

btnAc.addEventListener('click', () => {
  current = '';
  previous = '';
  operador = undefined;
  updateDisplay();
});

btnDel.addEventListener('click', () => {
  current = current.toString().slice(0, -1);
  updateDisplay();
});

function updateDisplay() {
  display.textContent = current;
  buffer.textContent = previous + (operador || '');
}

function calculate() {
  let resultado;
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return;
  switch (operador) {
    case '+': resultado = prev + curr; break;
    case '-': resultado = prev - curr; break;
    case '*': resultado = prev * curr; break;
    case '÷': resultado = prev / curr; break;
    default: return;
  }
  current = resultado;
  operador = undefined;
  previous = '';
}
