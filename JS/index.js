// console.log('Hello World')

// Declaración de variables y tipos de datos
let thisIsAString = 'This is a string type'
let isABoolean = true
let isANumber = 12
let isAnUndefinied
let isANull = null

// console.log(thisIsAString, isABoolean, isANumber, isAnUndefinied, isANull)

// Objetos
const aPerson = {
    name: 'Alfonso',
    lastName: 'Moreno',
    age: 38,
    isMarried: true,
    email: 'alfonso.moreno@me.com',
}

// console.log(aPerson)

// console.log('Hello', aPerson.name, aPerson.lastName)

// Arreglos
let arr = [thisIsAString, isABoolean, isANumber, isAnUndefinied, isANull, aPerson]

// console.log(arr)

arr.push('Hello')

// console.log(arr)

// Operadores matemáticos
const suma = 1 + 2
const restar = 1 - 2
const multiplicar = 2 * 3
const division = 9 / 4

// console.log(suma, restar, multiplicar, division)

const modulo = 10 % 3
// console.log(modulo)

let num = 5
num--
num--
num--
// num++
// num++
num += 4
num -=3
num *=3
num /=4
// console.log(num)

// Operadores de comparación
// Igualdad estricta
const resultado1 = 5 === 6
// Igualdad no estricta. Los Strings pueden ser iguales a numeros si el valor es el mismo
const resultado2 = 5 == '5'
// console.log(resultado1, resultado2)

const resultado3 = 5 < 6
const resultado4 = 5 > 5
const resultado5 = 5 >= 5 
// console.log(resultado3, resultado4, resultado5)

const resultado6 = 5 !== 6
const resultado7 = 5 != '5'
// console.log(resultado6, resultado7)

// Operadores lógicos
// or ||, and &&, not !
const resultadoOr = false || true || false
// console.log(resultadoOr)

const resultadoAnd = true && false
// console.log(resultadoAnd)

const resultadoNot = !true
console.log(resultadoNot);