function selecionarDia() {
    //o nome da função é mostrarDia
    const diaNumero = parseInt(document.getElementById('diaNumero').value;
    //falta um parenteses na linha de cima
    //a escrita esta incorreta
    const resultado = document.getElementById('resulado');

        let diaNome;
        switch (diaNumero) {
            //falta aspas para referenciar os ids
            case 1:
                diaNome = "Domingo";
                break;
                //falta apontar de qual case se trata
            case :
                diaNome = "Segunda-feira";
                break;
            case 3:
                diaNome = "Terça-feira";
                break;
            case 4:
                diaNome = "Quarta-feira";
                break;
            case 5:
                diaNome = "Quinta-feira";
                break;
            case 6:
                diaNome = "Sexta-feira";
                break;
            case 7:
                diaNome = "Sábado";
                break;
            default:
                diaNome = "Erro: Dia inválido"; 
        }
        resultado.innerText = `O dia correspondente é ${diaNome}`;
}
