"use strict";

console.log("this script is finally loaded");
// imported variables
import { baseApiUrl } from "./modules.mjs";
import { rainyProdEndPoints } from "./modules.mjs";
// Imported functions
import { doFetchData } from "./modules.mjs";
//      ------- Working on -------
// creating cart component
function createCart() {
  const cart = localStorage.getItem("cart");
  console.log("yabadabadu1");
  if (!cart) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  console.log("yabadabadu2");
}

const addToCart = function (product) {
  console.log("add to cart", product);
};

function genProdHtml(raincoat) {
  // console.log(raincoat);
  //    ------- variables -------
  const prodCardContainer = document.createElement("section");
  const productCard = document.createElement("div");
  const imgContForCard = document.createElement("div");
  const textContainer = document.createElement("div");
  const productTtl = document.createElement("p");
  const productDescription = document.createElement("p");
  const productPrice = document.createElement("p");
  //    ------- button add to cart -------
  const buyItem = document.createElement("button");
  buyItem.classList.add("buyProdButton");
  buyItem.textContent = "Add to cart ";
  buyItem.addEventListener("click", () => {
    console.log("id", raincoat.id);
    addToCart(raincoat);
  });
  const productImg = document.createElement("img");
  // productImg.img.src = raincoat.image;
  // delete the Rainy days from the title
  //       ------- declaration from api -------
  productTtl.textContent = raincoat.title;
  productDescription.textContent = raincoat.description;
  // Change the int of price to num
  productPrice.textContent = raincoat.price;
  //       ------- styles/classes and ids -------
  prodCardContainer.classList.add("content-container");
  productCard.classList.add("card");
  imgContForCard.classList.add("card-image");
  textContainer.classList.add("card-text-field");
  productDescription.classList.add("product-txt");
  productTtl.classList.add("product-ttl");
  productPrice.classList.add("product-price");
  //       ------- append and return -------
  textContainer.append(productTtl, productDescription, productPrice, buyItem);
  productCard.append(imgContForCard, textContainer);
  prodCardContainer.append(productCard);
  return prodCardContainer;
}
// Display html to the DOM
function displayRainCoatsLi(rainCoats) {
  const displayContainer = document.querySelector("#display-container");
  rainCoats.data.forEach((rainCoat) => {
    const ProdHtml = genProdHtml(rainCoat);
    displayContainer.appendChild(ProdHtml);
  });
}

async function init() {
  try {
    const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
    // const rainCoats = data;
    // or save to localstorage
    displayRainCoatsLi(rainCoats);
  } catch (error) {
    console.error();
  }
}

init();
