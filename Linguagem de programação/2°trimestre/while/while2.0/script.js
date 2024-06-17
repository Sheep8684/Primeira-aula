let numero;

do {
    numero = parseFloat(prompt('Digite sua nota:'))
    if (isNaN(numero)){
        alert('Digite um valor válido')
    }
    else if(numero < 0 || numero > 10){
        alert('Número inválido')
    }
}
while (numero < 0 || numero > 10)

    alert('Passou!')