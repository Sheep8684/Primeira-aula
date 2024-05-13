function calcular(){
    //Entrada
    var numero1 = parseFloat(document.getElementById('n1').value);
    var numero2 = parseFloat(document.getElementById('n2').value);
    var numero3 = parseFloat(document.getElementById('n3').value);
    var numeroMaior;

    //Processamento
    if(numero1 > numero2 && numero1 > numero3){
        numeroMaior = `O maior número é o ${numero1}`
    }
    else if(numero2 > numero3){
        numeroMaior = `O maior número é o ${numero2}`
    }
    else{
        numeroMaior = `O número maior é o ${numero3}`
    }

    //Saída
    document.getElementById('resultado').innerText= numeroMaior
}