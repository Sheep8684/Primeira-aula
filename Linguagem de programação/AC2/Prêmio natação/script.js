//Entrada

var distância = parseInt(prompt("Qual foi a distância percorrida pelo nadador?"))

//Processamento



//Saída

if(distância < 800){
    alert("Parabéns, seu prêmio foi R$5.000.")
}

else if(distância >= 800 | distância <= 1500){
    alert("Parabéns, seu prêmio foi R$10.000.")
}

else{
    alert("Parabéns, seu prêmio foi R$15.000.")
}