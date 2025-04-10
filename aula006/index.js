conteudo = document.querySelector('#content');

document.querySelector('#btn-add').addEventListener('click', () => {
    const novoImg = document.createElement('img');
    const novoTitulo = document.createElement('h1');
    const novoDescricao = document.createElement('p');

    const inputImg = document.querySelector('#imagem').value;
    const inputTitulo = document.querySelector('#titulo').value;
    const inputdescricao = document.querySelector('#descricao').value;

    novoImg.src = inputImg;
    novoTitulo.textContent = inputTitulo;
    novoDescricao.textContent = inputdescricao;

    conteudo.appendChild(novoImg);
    conteudo.appendChild(novoTitulo);
    conteudo.appendChild(novoDescricao);

    console.log(novoImg);
});