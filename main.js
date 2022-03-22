import cards from './data.js';

const getCardTitle = document.getElementById("card-title");
const getCardValue = document.getElementById("card-value");
const getCardDescription = document.getElementById("card-description");
const getCardUrlImage = document.getElementById("card-urlImage");

const getBtnSave = document.getElementById("btn-save")

getBtnSave.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(getCardTitle.value);
  console.log(`R$ ${getCardValue}`);
  console.log(getCardDescription.value);
  console.log(getCardUrlImage.value);
  createCard();
})

function createCard() {
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

  img.src="https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361513_640.jpg";
  h2.innerText="Osasco";
  span.innerText=" R$ 1,99";
  p.innerText="Hot dog city";

  main.appendChild(article);
  article.appendChild(img);
  article.appendChild(div);
  div.appendChild(h2);
  h2.appendChild(span);
  div.appendChild(p);
}

// console.log(window);

console.log('conectado');
// console.log(...cards);
for(let card of cards) {
  console.log(card.destino);
}
console.log