//entrada

var anos = parseInt(window.prompt("Digite quantos anos de vida você tem"))
var meses = parseInt(window.prompt("Digite quantos meses de vida você tem"))
var dias = parseInt(window.prompt("Digite quantos dias de vida você tem"))
var resultado = ""

//processamento

resultado= (anos*365) + (meses*30) + dias

//saída

window.alert("Você tem " + resultado + " dias de vida.")
