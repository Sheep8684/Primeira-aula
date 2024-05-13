//entrada

var nome = prompt("Digite seu nome")
var sobrenome = prompt("Digite seu sobrenome")
resultado = ""
//processamento

resultado = nome + " " + sobrenome

//saída

if(nome == "Maria" && sobrenome == "Silva" ){
    window.alert("Olá " + resultado)
    var cor = prompt("Qual sua cor favorita?")
    if (cor == "Vermelho"){
        window.alert("Uau! uma cor muito bonita")
    }
    else{
        window.alert("Err...você definitivamente não tem um bom gosto!🙄")
    }
}
else if(nome == "João" && sobrenome == "Souza") {
    window.alert(" Bem vindo " + resultado)
}
else if(sobrenome == "Silva"){
    window.alert("Bem vindo de volta " + nome + " Silva! como posso te servir hoje? 😊")
}
else{
     window.alert(resultado + ", você não é um membro da família Silva!😡")
}