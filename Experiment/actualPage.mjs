"use strict";

console.log("this script is finally loaded");
// imported variables
import { baseApiUrl } from "./modules.mjs";
import { rainyProdEndPoints } from "./modules.mjs";
// Imported functions
import { doFetchData } from "./modules.mjs";

//  generate html from the rainydays array
function genProdHtml(raincoat) {
  // console.log(raincoat);
  const productContainer = document.createElement("div");
  const productTtl = document.createElement("h2");
  productTtl.textContent = raincoat.text;
  const productDescription = document.createElement("p");
  productDescription.textContent = raincoat.description;
  productContainer.append(productTtl, productDescription);
  return productContainer;
}
// Display html to the DOM
async function displayRainCoatsLi(rainCoats) {
  const displayContainer = document.querySelector("#display-container");
  console.log(displayContainer);
  rainCoats.data.forEach((rainCoat) => {
    const ProdHtml = genProdHtml(rainCoat);
    displayContainer.appendChild(ProdHtml);
  });
}
async function main() {
  try {
    const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
    displayRainCoatsLi(rainCoats);
    console.log(raincoats);
  } catch (error) {
    console.error();
  }
}

main();
