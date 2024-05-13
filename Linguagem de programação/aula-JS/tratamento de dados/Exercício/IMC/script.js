//entrada

var altura = parseFloat(window.prompt("Digite sua altura"))
var peso = parseFloat(window.prompt("Digite seu peso"))
var imc= ""

//processamento

imc= peso/(altura**2)

//saída
if(imc <= 18.5){
window.alert("O seu IMC corresponde a " + imc + " você está abaixo do peso.")
}
else{
    window.alert("Você está ok!")
}