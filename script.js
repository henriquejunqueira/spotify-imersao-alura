// Pega os elementos no html com os ids especificados e armazena nas constantes
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlists');

// a função recebe o searchTerm, que é o termo digitado no input de pesquisa e procura na api
function requestApi(searchTerm) {
  // define a url da api. A searchTerm é a constante que recebe os valores digitados pelo usuário no evento
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;

  // consome a api utilizando promisses
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result, searchTerm));
}

function displayResults(result, searchTerm) {
  resultPlaylists.classList.add('hidden'); // adiciona a classe hidden ao elemento com a classe result-playlists
  //   const artistName = document.getElementById('artist-name'); // pega o nome do artista
  //   const artistImage = document.getElementById('artist-img');

  //   result.forEach((element) => {
  //     artistName.innerText = element.name; // pega o texto do nome na api
  //     artistImage.src = element.urlImg; // pega a imagem do artista na api
  //   });

  // Seleciona o elemento no html que será colocado os dados da api
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = ''; // Limpa os resultados anteriores

  // Cria o filtro com base no que é pesquisado
  const filteredArtists = result.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm)
  );

  // Se não houver artistas digitados na pesquisa, é ocultada a área de resultados
  if (filteredArtists.length === 0) {
    gridContainer.innerHTML = '<p>No artists found</p>';
  }

  filteredArtists.forEach((artist) => {
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');

    artistCard.innerHTML = `
    <div class="card-img">
    <img class="artist-img" src="${artist.urlImg}" />
    <div class="play">
    <span class="fa fa-solid fa-play"></span>
    </div>
    </div>
    <div class="card-text">
    <span class="artist-name">${artist.name}</span>
    <span class="artist-categorie">Artista</span>
    </div>
    `;

    gridContainer.appendChild(artistCard); // Cria o elemento artistCard no html
  });
  resultArtist.classList.remove('hidden'); // remove a classe hidden do elemento com a classe result-artist
}

// aguarda até que seja digitado no input de pesquisa, e quando isso acontece, executa a arrow function
document.addEventListener('input', () => {
  // Declaração da constante que recebe os valores digitados pelo usuário no input
  const searchTerm = searchInput.value.toLowerCase().trim(); // trim remove espaços vazios

  // se o termo de pesquisa estiver vazio, faça...
  if (searchTerm === '') {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    // resultArtist.classList.remove('hidden'); // remove a classe hidden do elemento com a classe result-artist
    // resultPlaylists.classList.add('hidden'); // adiciona a classe hidden ao elemento com a classe result-playlists

    resultArtist.classList.add('hidden'); // adiciona a classe hidden ao elemento com a classe result-artist

    resultPlaylists.classList.remove('hidden'); // remove a classe hidden do elemento com a classe result-playlists

    return; // finaliza a execução após ter feito tudo
  }

  requestApi(searchTerm); // executa a função requestApi passando o termo de pesquisa por parâmetro
});
