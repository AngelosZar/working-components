"use strict";

console.log("this script is finally loaded");
// imported variables
import { baseApiUrl } from "./modules.mjs";
import { rainyProdEndPoints } from "./modules.mjs";
// Imported functions
import { doFetchData } from "./modules.mjs";
//

//
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
