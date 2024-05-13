//Entrada

var livro = parseInt(prompt("Digite a quantidade de livros levados"))
var promoção = ""
var não_promocional = ""

//Processamento

promoção = livro*parseFloat(15.00)
não_promocional = livro*parseFloat(22.00)

//Saída

if (livro < 7){
    alert("Levando " + livro + " livros, você pagará " + não_promocional + "R$.")
}
else{
    alert("Levando " + livro + " livros, você pagará " + promoção + "R$.")
}