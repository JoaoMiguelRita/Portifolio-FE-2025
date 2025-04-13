const content = document.querySelector('#content');
const cells = document.querySelectorAll('.cell');

let player = 'X';
let count = 0;

const move = document.querySelector('#mov');
move.textContent = player;

const Combinations = [
    [0, 1, 2], // Rows (Linhas)
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Columns (Colunas)
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals (Diagonais)
    [2, 4, 6]
];

cells.forEach((cell, index) => {
    cell.addEventListener('click', function () {
        if (cell.innerHTML !== '') return;

        const symbol = document.createElement('div');
        symbol.innerHTML = player === 'X' ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 100 100">
                <line x1="20" y1="20" x2="80" y2="80" stroke="#e74c3c" stroke-width="10"/>
                <line x1="80" y1="20" x2="20" y2="80" stroke="#e74c3c" stroke-width="10"/>
            </svg>` : `
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" stroke="#3498db" stroke-width="10" fill="none"/>
            </svg>`;

        cell.appendChild(symbol);
        cell.setAttribute('data-player', player);

        count++;
        if (checkWin()) {
            move.textContent = `🎉 O jogador ${player} venceu!`;
            setTimeout(resetGame, 2000); // wait 2s before resetting
            return;
        }

        if (count === 9) {
            move.textContent = '⚖️ Deu velha!';
            setTimeout(resetGame, 2000);
            return;
        }

        player = player === 'X' ? 'O' : 'X';
        move.textContent = player;
    });
});

function checkWin() {
    const values = Array.from(cells).map(cell => cell.getAttribute('data-player'));

    for (let combination of Combinations) {
        const [a, b, c] = combination;

        if (values[a] && values[a] === values[b] && values[b] === values[c]) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.removeAttribute('data-player');
    });
    count = 0;
    player = 'X';
    move.textContent = player;
}


const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  body.classList.add('dark-theme');

  toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      toggleBtn.textContent = 'Alterar Modo Escuro';
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      toggleBtn.textContent = 'Alterar Modo Claro';
    }
  });