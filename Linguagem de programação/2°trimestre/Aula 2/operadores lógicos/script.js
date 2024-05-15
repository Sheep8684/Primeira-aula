function verificar(){
    //Entrada

    var usuário = document.getElementById('t1').value;
    var senha = document.getElementById('n1').value;
    var login;

    //Processamento

    if(usuário === "Ana" && senha === "pão" || usuário === "Júlia" && senha === "batata" || usuário === "Luana" && senha === "sushi"){
        document.getElementById('resultado').innerText = `Login efetuado com sucesso`
        window.location.href = 'https://www.fiap.com.br/colegio/'
    }
    else{
        document.getElementById('resultado').innerText = "Senha ou usuário incorretos"
    }

    //Saída

}