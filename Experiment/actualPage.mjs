"use strict";

console.log("this script is finally loaded");
// imported variables
import { baseApiUrl } from "./modules.mjs";
import { rainyProdEndPoints } from "./modules.mjs";
// Imported functions
import { doFetchData } from "./modules.mjs";
//

//
// generate cat facthtml
function genProdHtml(raincoat) {
  //  generate html from the rainydays object
  console.log("raincoat");
  productContainer = document.createElement("div");
  const productTtl = document.createElement("h2");
  productTtl.textContent = raincoat.text;
  //   check maybe data.data.[1]
  const productDescription = document.createElement("p");
  productDescription.textContent = raincoat.description;
  productContainer.append(productTtl, productDescription);
  return productContainer;
}
async function displayRainCoatsLi(rainCoats) {
  // 1. get the products
  //  2.  get the display container
  const displayContainer = document.querySelector("#display-container");
  console.log(displayContainer);

  // for each of the products
  //   didplay/generate them in html
  //   displayContainer.appendChild
  //   callback function
  rainCoats.forEach((rainDaProduct) => {
    const ProdHtml = genProdHtml(rainCoat);
    displayContainer.appendChild(ProdHtml);
  });
}
async function main() {
  // Fetching the array of products
  export async function fetchingProd() {
    try {
      const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
      displayRainCoatsLi(rainCoats);
      console.log(raincoats);
    } catch (error) {
      console.error();
    }
  }

  //  Generate html from the rainydays object
  function genProdHtml(raincoat) {
    const productContainer = document.createElement("div");
    const productTtl = document.createElement("h2");
    productTtl.textContent = raincoat.text;
    const productDescription = document.createElement("p");
    productDescription.textContent = raincoat.description;
    productContainer.append(productTtl, productDescription);
    return productContainer;
  }
  // Display HTML to the DOM
  function displayRainCoatsLi(rainCoats) {
    const displayContainer = document.querySelector("#display-container");
    rainCoats.data.forEach((rainCoat) => {
      const ProdHtml = genProdHtml(rainCoat);
      displayContainer.appendChild(ProdHtml);
    });
  }

  fetchingProd();
