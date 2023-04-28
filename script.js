alert("Digite dois números:");
let firstNumber = Number(prompt("Insira o primeiro número:"));
let secondNumber = Number(prompt("Insira o segundo número:"));

const sum = (firstNumber + secondNumber).toFixed(2);
const subtraction = (firstNumber - secondNumber).toFixed(2);
const multiplication = (firstNumber * secondNumber).toFixed(2);
const division = (firstNumber / secondNumber).toFixed(2);
const remainder = (firstNumber % secondNumber).toFixed(2);

alert(`
  Resultados:
  Soma (${firstNumber} + ${secondNumber}) = ${sum}
  Subtração (${firstNumber} - ${secondNumber}) = ${subtraction}
  Multiplicação (${firstNumber} * ${secondNumber}) = ${multiplication}
  Divisão (${firstNumber} / ${secondNumber}) = ${division}
  Resto da divisão (${firstNumber} % ${secondNumber}) = ${remainder}
`);

let isPair = sum % 2 == 0;

if (isPair) {
  alert(`A soma dos dois números é par: ${sum}`);
} else {
  alert(`A soma dos dois números é impar: ${sum}`);
}

let isEqual = firstNumber == secondNumber;

if (isEqual) {
  alert(`Os números inseridos: ${firstNumber} e ${secondNumber} são iguais`);
} else {
  alert(
    `Os números inseridos: ${firstNumber} e ${secondNumber} são diferentes`
  );
}
