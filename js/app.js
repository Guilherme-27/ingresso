
function comprar() {
    //Recupera os dados do usuário
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value
    //Recupera as informaçoes apresentadas na tela
    let pistaDisponivel = parseInt(document.getElementById('qtd-pista').innerHTML);
    let superiorDisponivel = parseInt(document.getElementById('qtd-superior').innerHTML);
    let inferiorDisponivel = parseInt(document.getElementById('qtd-inferior').innerHTML);   
    //Switch para cada tipo de ingresso
    switch (tipoIngresso) {
        case 'pista':
            if (pistaDisponivel >= quantidade) {
                document.getElementById('qtd-pista').innerHTML = pistaDisponivel-quantidade;
                document.getElementById('qtd').value = null;
                alert('Compra efetuada com sucesso!')
            } else {
                alert('Quantidade indisponível');
            }
            break;
        case 'inferior':
            if (inferiorDisponivel >= quantidade) {
                document.getElementById('qtd-inferior').innerHTML = inferiorDisponivel-quantidade;
                document.getElementById('qtd').value = null;
                alert('Compra efetuada com sucesso!')
            } else {
                alert('Quantidade indisponível');
            }
            break;
        case 'superior':
            if (superiorDisponivel >= quantidade) {
                document.getElementById('qtd-superior').innerHTML = superiorDisponivel-quantidade;
                document.getElementById('qtd').value = null;
                alert('Compra efetuada com sucesso!')
            } else {
                alert('Quantidade indisponível');
            }
            break;
    }
}