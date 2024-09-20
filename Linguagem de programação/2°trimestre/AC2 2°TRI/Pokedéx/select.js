function escolher(){
    let pokemon = document.getElementById('pikachu').value;
    const resultado = document.getElementById('resultado');

    switch(pokemon){
        case 'charmander':
            resultado.innerHTML = `<H1>Charmander</H1>
                                        <img src="charmander.jpeg" alt="" width="200" height="200">
                                        <h2>Tipo:</h2>
                                        <br>
                                        <p>Fogo</p>
                                        <h2>Habilidade:</h2>
                                        <br>
                                        <p>Chama</p>`
         break;
        case 'pichu':
            resultado.innerHTML = `    <H1>pichu</H1>
                                        <img src="pichu.jpeg" alt="" width="200" height="200">
                                        <h2>Tipo:</h2>
                                        <br>
                                        <p>Elétrico</p>
                                        <h2>Habilidade:</h2>
                                        <br>
                                        <p>Choque</p>`
            break;
        case 'bulbasaur':
                resultado.innerHTML = `    <H1>Bulbasaur</H1>
                                            <img src="bulbasaur.jpeg" alt="" width="200" height="200">
                                            <h2>Tipo:</h2>
                                            <br>
                                            <p>Planta/Veneno</p>
                                            <h2>Habilidade:</h2>
                                            <br>
                                            <p>Chicote de vinhas</p>`
                break;
        case 'squirtle':
                    resultado.innerHTML = `    <H1>Squirtle</H1>
                                                <img src="squirtle.jpeg" alt="" width="200" height="200">
                                                <h2>Tipo:</h2>
                                                <br>
                                                <p>Água</p>
                                                <h2>Habilidade:</h2>
                                                <br>
                                                <p>Bolhas</p>`
                break;
        case 'caterpie':
                    resultado.innerHTML = `<H1>Caterpie</H1>
                                            <img src="caterpie.jpeg" alt="" width="200" height="200">
                                            <h2>Tipo:</h2>
                                                <br>
                                                <p>Inseto</p>
                                                <h2>Habilidade:</h2>
                                                <br>
                                                <p>Teia</p>`
                break;

        default:
             resultado.innerText= "Opção inválida"
        
                
            
    }
}