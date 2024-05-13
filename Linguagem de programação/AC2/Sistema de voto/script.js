//Entrada

var idade = parseInt(prompt("Qual é a sua idade?"))
var nacionalidade = prompt("Qual é a sua nacionalidade")
 
//Processamento

//Saída
 
if (idade >= 16 && nacionalidade == "Brasileiro" || idade >= 16 && nacionalidade == "Brasileira") {
 window.alert("Você pode votar.")
}
 
else {
    window.alert("Você não pode votar.")
}