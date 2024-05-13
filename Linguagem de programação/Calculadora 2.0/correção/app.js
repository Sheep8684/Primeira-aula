function calcular(){
    var numero1 = document.getElementById('num1').value
    var numero2 = document.getElementById('num2').value


//processamento
var soma = numero1 + numero2

//saida
document.getElementById('resultado').innerText = soma
}