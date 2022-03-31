
let produtos = document.querySelector('#produtos')
let botao = document.querySelector('#gastar')

botao.addEventListener('click', comprar)
function comprar(){
    let compra = "Parabéns otário, gastou dinheiro!\n"
    if (produtos.value == "X Infarto"){
        compra += "Burgão " + produtos.value + ", preço: R$550,00"
    } else if (produtos.value == "X Podrão"){
        compra += "Burgão " + produtos.value + ", preço: R$300,00"
    } else if (produtos.value == "X Ratão"){
        compra += "Burgão " + produtos.value + ", preço: R$450,00"
    }
    alert(compra)
}