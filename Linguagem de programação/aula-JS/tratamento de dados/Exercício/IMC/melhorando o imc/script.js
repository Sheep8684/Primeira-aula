//entrada

var altura = parseFloat(window.prompt("Digite sua altura"))
var peso = parseFloat(window.prompt("Digite seu peso"))
var imc= ""
imc.toFixed(2)
//processamento

imc= peso/(altura**2)

//saída
if(imc <= 18.50){
window.alert("O seu IMC corresponde a " + imc + " você está abaixo do peso.")
}
else if(imc >= 18.51 &&  imc <= 24.99){
    window.alert("Seu IMC corresponde a " + imc + " , parabéns! Seu peso é ideal")
}
else if (imc >=25.00 && imc <= 29.99){
    window.alert("Seu IMC corresponde a " + imc + " , você está levemente acima do peso")
}
else if (imc>=30.00 && imc <= 34.99){
    window.alert ("Seu IMC corresponde a " + imc + " , você tem obesidade no grau I")
}
else if (imc >=)
else{
    window.alert("Você está ok!")
}