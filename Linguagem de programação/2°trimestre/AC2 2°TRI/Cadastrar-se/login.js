function logar(){
    window.location.href = '../Login_Pokemon/login.html'
}

function cadastrar(){
    let nome = document.getElementById('name').value;
    let idade = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirmar_senha = document.getElementById('confirm').value;
    let genero = document.getElementById('genero').value;

    if(nome === null || idade === null || email === null || senha === null || confirmar_senha === null || genero === null){
        alert("Os campos vazios são obrigatórios!")
    } 
    else if( nome.lenght < 2){
        alert("O nome não pode ter menos que 2 caracteres")
    }
    else if(idade < 0 || idade > 150){
        alert("você não pode ter essa idade")
    }
    else if(senha.lenght <= 6){
        alert("Sua senha deve ter mais ou 6 caracteres exatos")
    }
    else if(confirmar_senha != senha){
        alert("A senha deve ser igual a usada anteriormente")
    }
    else if(nome.lenght > 2 || idade > 0 || idade < 150 || senha.lenght >= 6 || confirmar_senha === senha || genero === "m" || genero === "M" || genero === "f" || genero === "F" ){
        window.location.href = '../Pokedéx/selecionar.html'
    }
}