// Alterando elemnetos
titulo = document.querySelector('h1');
titulo.textContent = 'Aprendendo DOM';

const Item = document.createElement('li');
Item.textContent = 'Aprendendo JS';
Item.classList.add('nao-iniciado');

lista = document.querySelector('#lista');
lista.appendChild(Item);

// Remover item da lista
lista.removeChild(lista.children[0]);

// Adiciona um novo elemento pelo botão inserir
document.querySelector('#btn-inserir').addEventListener('click', () => {
    const novoItem = document.createElement('li');
    const input = document.querySelector('#novo-item').value;

    novoItem.textContent = input;
    lista.appendChild(novoItem);
});

const estilos = [
    'nao-iniciado',
    'em-andamento',
    'concluido'
]

lista.addEventListener('click', (event) => {
    const item = event.target;
    const classeAtual = item.classList[0];
    const classeProxima = estilos[estilos.indexOf((classeAtual) + 1) % estilos.length];
    item.classList.remove(classeAtual);
    item.classList.add(classeProxima);
});