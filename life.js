
alert("This is a basic arithmetic calculator, press OK to continue")

var number1 = parseFloat(prompt("Enter the first number: "))
var operator = prompt("Enter the operator sign (+, -, /, *): ")
var number2 = parseFloat(prompt("Enter the second number: "))

let a = number1 + number2
let b = number1 - number2
let c = number1 * number2
let e = number1 / number2

if (operator == "+"){
    alert("The answer is: "+a)
}else if (operator == "-"){
    alert("The answer is: "+b)
}else if (operator == "*"){
    alert("The answer is: "+c)
}else if (operator == "/"){
    alert("The answer is: "+e)
}

