function traduzir(){
    let idioma = document.getElementById('idioma').value;
    const resultado = document.getElementById('saudaçao')

    switch(idioma){
        case 'alemao':
            resultado.innerText = "Hallo guten Morgen";
        break;
        case 'ingles':
            resultado.innerText = "Hello good Morning";
        break;
        case 'frances':
            resultado.innerText = "Bonjour bonjour";
        break;
        case 'espanhol':
            resultado.innerTex = "Hola! Como te llamas?";
        break;
        case 'japones':
            resultado.innerText = "konnichi wa 、 ohayo gozai masu";
        break;
        default:
            resultado.innerText = "Não foi possível fazer sua tradução"
    }
}