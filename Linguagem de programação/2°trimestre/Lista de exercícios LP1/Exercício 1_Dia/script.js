function escolher(){
    const paragrafo = document.getElementById('resultado')
    let escolhaUsuário = document.getElementById('dia_semana').value;


    switch(escolhaUsuário){
        case'domingo':
            paragrafo.innerHTML = `<h1>Hoje é domingo</h1>`
        break;
        case'segunda-feira':
            paragrafo.innerHTML = `<h1>Hoje é Segunda-feira</h1>`
        break;
        case'terça-feira':
            paragrafo.innerHTML = `<h1>Hoje é Terça-feira</h1>`
        break;
        case'quarta-feira':
            paragrafo.innerHTML = `<h1>Hoje é Quarta-feira</h1>`
        break;
        case'quinta-feira':
            paragrafo.innerHTML = `<h1>Hoje é Quinta-feira</h1>`
        break;
        case'sexta-feira':
            paragrafo.innerHTML = `<h1>Hoje é Sexta-feira</h1>`
        break;
        case'sábado':
            paragrafo.innerHTML = `<h1>Hoje é Segunda-feira</h1>`
        default:
            paragrafo.innerHTML = `<h1>Opção inválida</h1>`
        break;

    }
}