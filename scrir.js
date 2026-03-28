console.log("Site Jornal carregado com sucesso");

// exemplo de interação
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.background = "#f1f1f1";
  });
});

const apiKey = "SUA_CHAVE_AQUI";

async function carregarNoticias() {
  const url = `https://newsapi.org/v2/top-headlines?country=br&pageSize=6&apiKey=${apiKey}`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  const container = document.querySelector(".container");
  container.innerHTML = "";

  dados.articles.forEach(noticia => {
    const card = `
      <div class="card">
        <img src="${noticia.urlToImage || 'img/padrao.jpg'}">
        <h3>${noticia.title}</h3>
        <p>${noticia.description || ''}</p>
        <a href="${noticia.url}" target="_blank">Leia mais</a>
      </div>
    `;
    container.innerHTML += card;
  });
}

carregarNoticias();