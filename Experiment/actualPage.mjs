"use strict";

console.log("this script is finally loaded");
// imported variables
import { baseApiUrl } from "./modules.mjs";
import { rainyProdEndPoints } from "./modules.mjs";
// Imported functions
import { doFetchData } from "./modules.mjs";
//      ------- Working on -------
// creating cart component
const createCart = function () {
  const cart = localStorage.getItem("cart");
  console.log("yabadabadu1");
  if (!cart) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  console.log("yabadabadu2");
};
const addToCart = function (product) {
  console.log("gotcha");
};
//      ------- Working on -------
//  generate html from the rainydays array
{
  /* <div class="content-container">
            <div class="two-column">
                <div class="column-left">
                    <a href="../html.files/a-jacket-spesific.html">
                        <div class="card">
                            <div class="card-image"><img src="../imgs/Product-imgs/the-explorer.png"
                                    alt="the motorist jacket">
                            </div>
                            <div class="card-text-field">
                                <p class="product-ttl"> The explorer</p>
                                <p class="product-txt"> With fully sealed seams, it’s durably waterproof,
                                    completel windproof, and highly breathable.
                                </p>
                                <p class="product-price">2500 Kr</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="column-right">
                    <a href="html.files/a-jacket-spesific.html">
                        <div class="card">
                            <div class="card-image"><img src="../imgs/Product-imgs/hd-hiker.png " alt="Xd Hiker jacket">
                            </div>
                            <div class="card-text-field">
                                <p class="product-ttl">Xd Hiker</p>
                                <p class="product-txt">This bound to be your new go-to hiking shell. Fully
                                    waterproof,
                                    breathable, and designed withstretch.</p>
                                <p class="product-price">2500 Kr</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div> */
}
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
  createCart();
  const { data: rainCoats } = await doFetchData(rainyProdEndPoints);
  displayRainCoatsLi(rainCoats);
}

main();
