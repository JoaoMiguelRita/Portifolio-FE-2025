const botaoAlterarTema = document.getElementById('tema');
const body = document.querySelector('body');

body.classList.add('tema_claro');

botaoAlterarTema.addEventListener('click', () => {
    if (body.classList.contains('tema_claro')) {
        body.classList.remove('tema_claro');
        body.classList.add('tema_escuro');
        botaoAlterarTema.textContent = 'Alterar para Tema Claro';
    } else {
        body.classList.remove('tema_escuro');
        body.classList.add('tema_claro');
        botaoAlterarTema.textContent = 'Alterar para Tema Escuro';
    }
});