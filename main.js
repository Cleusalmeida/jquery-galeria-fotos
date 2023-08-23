$(document).ready(function() {
    $('header button').click(function() { //selecionando elementos html através do jQuery.
        $('form').slideDown(); //aparecer o formulário.
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); //recolher o formulário.
    })
    
    $('form').on('submit', function(e) {
        //console.log("submit");
        e.preventDefault(); //previne o comportamento padrão de atualizar a página.
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();//recupera o valor da id do html
        //console.log(enderecoDaNovaImagem);
        const novoItem = $('<li style="display: none"></li>');/*faz a imagem adicionada
        ficar oculta. Se remover a ceta no style do console, a iamgem aparece.*/
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);//cria uam animação ao surgir a imagem adicionada.(5000)=tempo da animação.
        $('#endereco-imagem-nova').val('');//limpa o campo de inserir o endereço da minha imagem.
    })
})


