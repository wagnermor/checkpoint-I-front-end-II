import cards from './data.js';

document.querySelector("form")
.addEventListener("submit", (event) => {
  event.preventDefault();
})

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

const fields = document.querySelectorAll("[required]");

article.classList.add("card");
img.classList.add("photo");
div.classList.add("caption");
h2.classList.add("h2");
span.classList.add("value");
p.classList.add("p");

getBtnSave.addEventListener('click', createCard);


function sendJson(data) {
  return JSON.stringify(data);
}

function getJson(data) {
  return JSON.parse(data);
}

function validation(event) {
  for(let field of fields) {
    if(field.checkValidity() === false) {
      event.preventDefault();
      field.reportValidity();
    }
  }
}


if(localStorage.getItem("cards") === null) localStorage.setItem("cards", sendJson(cards));



function addData() {
  validation();
  let getCards = getJson(localStorage.cards);
  getCards.unshift({
    destino: `${getCardTitle.value}`,
    valor: `${getCardValue.value}`,
    descricao: `${getCardDescription.value}`,
    urlImagem: `${getCardUrlImage.value}`
  });
  localStorage.cards = sendJson(getCards);
}

function readData() {
  let localCards = getJson(localStorage.cards);
  for(let card of localCards) {
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
  addData();
  
  main.innerHTML = "";
  
  readData();
}

readData();
