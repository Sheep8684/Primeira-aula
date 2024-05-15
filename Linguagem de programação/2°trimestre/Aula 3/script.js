function cardapio(){
    const paragrafo = document.getElementById('resultado')
    let escolhaUsuario = document.getElementById('refeição').value;

    switch(escolhaUsuario){
        case'cafe':
         paragrafo.innerHTML= `<h2>A refeição escolhida foi Café da manhã, segue o cardápio abaixo:</h1>
         <br>
         <main>
           <h2>Cardápio:</h2>
           <br>
           <h3>Bebidas</h3>
           <ul>
               <li>Suco de laranja</li>
               <li>Suco de maracujá</li>
               <li>Café com leite</li>
           </ul>
           <h3>Lanches</h3>
           <ul>
               <li>bolo de fuba</li>
               <li>omelete com bacon</li>
               <li>Croissant de presunto e queijo</li>
           </ul>`
        break;
        case 'almoço':
            paragrafo.innerHTML= `<h2>A refeição escolhida foi Almoço, segue o cardápio abaixo:</h1>
            <br>
            <main>
              <h2>Cardápio:</h2>
              <br>
              <h3>Bebidas</h3>
              <ul>
                  <li>Suco de Uva</li>
                  <li>Suco de Goiaba</li>
                  <li>Suco de morango</li>
                  <li>Coca-cola</li>
                  <li>Sprite</li>
              </ul>
              <h3>Lanches</h3>
              <ul>
                  <li>Bife acebolado com batatas fritas</li>
                  <li>Ovo cozido com arroz e feijão</li>
                  <li>Sopa de legumes</li>
              </ul>`
        break;
        case 'jantar':
            paragrafo.innerHTML= `<h2>A refeição escolhida foi Jantar, segue o cardápio abaixo:</h1>
            <br>
            <main>
              <h2>Cardápio:</h2>
              <br>
              <h3>Bebidas</h3>
              <ul>
                  <li>Suco de Uva</li>
                  <li>Suco de Goiaba</li>
                  <li>Suco de morango</li>
                  <li>Coca-cola</li>
                  <li>Sprite</li>
              </ul>
              <h3>Lanches</h3>
              <ul>
                  <li>Lasanha</li>
                  <li>Panqueca de carne ao sugo</li>
                  <li>Carangueijo cozido</li>
              </ul>`
        break;
        default:
            paragrafo.innerText= "Opção inválida"
    }
}