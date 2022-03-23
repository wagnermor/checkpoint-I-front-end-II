import cards from './data.js';

const getCardTitle = document.getElementById("card-title");
const getCardValue = document.getElementById("card-value");
const getCardDescription = document.getElementById("card-description");
const getCardUrlImage = document.getElementById("card-urlImage");

const getBtnSave = document.getElementById("btn-save")

const main = document.getElementById("container");
const article = document.createElement("article");
const img = document.createElement("img");
const div = document.createElement("div");
const h2 = document.createElement("h2");
const span = document.createElement("span");
const p = document.createElement("p");

article.classList.add("card");
img.classList.add("photo");
div.classList.add("caption");
h2.classList.add("h2");
span.classList.add("value");
p.classList.add("p");

getBtnSave.addEventListener('click', (event) => {
  event.preventDefault();
  createCard();
})

function readData() {
  for(let card of cards) {
    let value = parseFloat(card.valor).toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
    main.innerHTML += `
    <article class="card">
      <img src=${card.urlImagem} alt="#" class="photo">
      <div class="caption">
        
        <h3>${card.destino} <span class="value">${value}</span></h3>
        <p>${card.descricao}</p>
      </div>
    </article>`
  }
}

function createCard() {
  cards.unshift({
    destino: `${getCardTitle.value}`,
    valor: `${getCardValue.value}`,
    descricao: `${getCardDescription.value}`,
    urlImagem: `${getCardUrlImage.value}`
  });

  main.innerHTML = "";
  readData();
}
readData();