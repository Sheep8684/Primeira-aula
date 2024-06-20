function logar(){
    const nome_usuario = document.getElementById("usuario").value;
    const senha_usuario = document.getElementById("senha").value;
        if(nome_usuario === null || senha_usuario === null){
            alert("Os campos não podem estar vazios")
        }
        else if(nome_usuario === "pokemon" && senha_usuario === "pokemon"){
            window.location.href = '../Pokedéx/selecionar.html'
        }
        else{
            alert("Login inválido")
        }

}
   
function cadastrar(){
    window.location.href = '../Cadastrar-se/cadastro.html'
}