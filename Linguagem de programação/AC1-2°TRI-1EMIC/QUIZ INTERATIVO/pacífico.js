function verificar(){
    const capital = document.getElementById('capital').value
    const oceano = document.getElementById('oceano').value
    resultado = document.getElementById('pontos')

    if(capital == "paris" && oceano == "pacifico"){
        resultado.innerText = "Você obteve um total de 2/2 acertos"
    }
    else if(capital == "paris" && oceano != "pacifico"){
        resultado.innerText = "Você obteve um total de 1/2 acertos"
    }
    else if(capital != "paris" && oceano == "pacifico"){
        resultado.innerText = "Você obteve um total de 1/2 acertos"
    }
    else{
        resultado.innerText = "Você obteve um total de 0/2 acertos"
    }
    
}