// Pega os elementos no html com os ids especificados e armazena nas constantes
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

// a função recebe o searchTerm, que é o termo digitado no input de pesquisa e procura na api
function requestApi(searchTerm) {
  // define a url da api. A searchTerm é a constante que recebe os valores digitados pelo usuário no evento
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;

  // consome a api utilizando promisses
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

function displayResults(result) {
  resultPlaylist.classList.add('hidden'); // adiciona a classe hidden ao elemento com a classe result-playlists
  const artistName = document.getElementById('artist-name'); // pega o nome do artista
  const artistImage = document.getElementById('artist-img');

  result.forEach((element) => {
    artistName.innerText = element.name; // pega o texto do nome na api
    artistImage.src = element.urlImg; // pega a imagem do artista na api
  });

  resultArtist.classList.remove('hidden'); // remove a classe hidden do elemento com a classe result-artist
}

// aguarda até que seja digitado no input de pesquisa, e quando isso acontece, executa a arrow function
document.addEventListener('input', () => {
  // Declaração da constante que recebe os valores digitados pelo usuário no input
  const searchTerm = searchInput.value.toLowerCase();

  // se o termo de pesquisa estiver vazio, faça...
  if (searchTerm === '') {
    resultPlaylist.classList.add('hidden'); // adiciona a classe hidden ao elemento com a classe result-playlists
    resultArtist.classList.remove('hidden'); // remove a classe hidden do elemento com a classe result-artist
    return; // finaliza a execução após ter feito tudo
  }

  requestApi(searchTerm); // executa a função requestApi passando o termo de pesquisa por parâmetro
});
