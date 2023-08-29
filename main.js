//1- Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World')

//2-Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 45;
let numberTwo = 27;
const sum = numberOne + numberTwo

alert(`A soma do primeiro número mais o segundo número é: ${sum}`)

//3-Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let check = 2023 ;

if(typeof check === 'number') {
 console.log('É um número')
}else{
  console.log('Não é um número')
}

//4-Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let checkString = 'Eu sou desenvolvedora de software';

if(typeof checkString === 'string') {
  console.log('É uma string')
}else {
  console.log('Não é uma string')
}

//5-Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let checkBoolean = true;

if (typeof checkBoolean === 'boolean') {
  console.log('É um booleano')
}else {
  console.log('Não é um booleano')
}

//6-Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let firstNumber = 5;
let secondNumber = 10;

const result = firstNumber - secondNumber;

alert(`O resultado da subtração do primeiro número pelo segundo número é : ${result}`);

//7-Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let firstN = 5;
let secondN = 10;

const mul = firstN * secondN;

alert(`O resultado da multiplicação do primeiro número pelo segundo número é : ${mul}`);

//8-Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let oneNumber = 80;
let twoNumber = 10;

const div = oneNumber / twoNumber;

alert(`O resultado da divisão do primeiro número pelo segundo número é : ${div}`);

//9-Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let number = 10;


const checkN = number % 2 === 0 ? 'É um número par' : 'É um número ímpar';
console.log(checkN)

//10-Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let evenOrOdd = 3;

const checkEvenOrOdd = evenOrOdd % 2 !== 0 ? "É um número ímpar" : "Não é um número ímpar";
console.log(checkEvenOrOdd);