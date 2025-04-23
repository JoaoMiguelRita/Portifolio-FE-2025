const timesBrasileirao = [
    "Flamengo",
    "Palmeiras",
    "Corinthians",
    "São Paulo",
    "Grêmio",
    "Atlético-MG",
    "Internacional",
    "Fluminense",
    "Botafogo",
    "Bahia"
  ];
  
  const selectTimeA = document.getElementById("timeA");
  const selectTimeB = document.getElementById("timeB");
  
  function preencherTimes(select) {
    timesBrasileirao.forEach(time => {
      const option = document.createElement("option");
      option.value = time;
      option.textContent = time;
      select.appendChild(option);
    });
  }
  
  preencherTimes(selectTimeA);
  preencherTimes(selectTimeB);
  
  const form = document.getElementById('formPartida');
  const resultadoDiv = document.getElementById('resultado');
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const timeA = selectTimeA.value;
    const timeB = selectTimeB.value;
  
    if (timeA === timeB) {
      resultadoDiv.innerText = "Escolha dois times diferentes!";
      return;
    }
  
    resultadoDiv.innerText = "Simulando partida... Aguarde 5 segundos.";
  
    await new Promise(resolve => setTimeout(resolve, 5000));
  
    const placarA = Math.floor(Math.random() * 5);
    const placarB = Math.floor(Math.random() * 5);
  
    let vencedor = "";
    if (placarA > placarB) {
      vencedor = `Vitória do ${timeA}`;
    } else if (placarB > placarA) {
      vencedor = `Vitória do ${timeB}`;
    } else {
      vencedor = "Empate!";
    }
  
    resultadoDiv.innerHTML = `
      <p>${timeA} ${placarA} x ${placarB} ${timeB}</p>
      <p><strong>${vencedor}</strong></p>
    `;
  });
  