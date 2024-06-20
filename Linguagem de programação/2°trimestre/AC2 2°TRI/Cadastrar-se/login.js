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
    else if( length.nome < 2){
        alert("O nome não pode ter menos que 2 caracteres")
    }

}