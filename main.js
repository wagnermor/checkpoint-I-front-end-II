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
    main.innerHTML += `
    <article class="card">
      <img src=${card.urlImagem} alt="#" class="photo">
      <div class="caption">
        <h2>${card.destino} <span class="value">R$ ${card.valor}</span></h2>
        <p>${card.descricao}</p>
      </div>
    </article>`
  }
}

function createCard() {
  cards.push({
    destino: `${getCardTitle.value}`,
    valor: `${getCardValue.value}`,
    descricao: `${getCardDescription.value}`,
    urlImagem: `${getCardUrlImage.value}`
  });

  main.innerHTML = "";
  readData();
  // img.src="https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361513_640.jpg";
  // h2.innerText="Osasco";
  // span.innerText=" R$ 1,99";
  // p.innerText="Hot dog city";
  
  // main.appendChild(article);
  // article.appendChild(img);
  // article.appendChild(div);
  // div.appendChild(h2);
  // h2.appendChild(span);
  // div.appendChild(p);
}
readData();