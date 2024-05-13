//Entrada

var velocidade = parseInt(prompt("Qual é a velocidade do veículo em km/h?"))
var multa = ""
 
// Processamento
 
multa= parseInt((velocidade-60)*100)
 
//Saída
 
if (velocidade <= 60) {
    window.alert("A velocidade está dentro do permitido.")
}
 
 
else{
    window.alert("A velocidade está acima do permitido. O valor da multa é de R$ "+ multa)
 
}