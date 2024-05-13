var idade = parseInt(prompt("Digite sua idade"))
var meses = parseInt(prompt("Digite quantos meses você tem"))
var dias = parseInt(prompt("Digite os dias em que viveu"))
var resultado = ""

resultado = idade*parseInt((4*30)+(7*31)+28+((idade/4)))+meses*parseInt(30+7)+dias

alert("Você viveu " + resultado + " dias ao longo da sua vida")