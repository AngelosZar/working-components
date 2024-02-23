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
  //    ------- variables -------
  const productCard = document.createElement("div");
  const imgContForCard = document.createElement("div");
  const textContainer = document.createElement("div");
  const productTtl = document.createElement("p");
  const productDescription = document.createElement("p");
  const productPrice = document.createElement("p");
  // If I later filter with items on sale
  // const isProductOnSale = "";
  //                  insert image how?
  const productImg = document.createElement("img");
  // productImg.img.src = raincoat.image;
  // delete the Rainy days from the title
  //       ------- declaration from api -------
  productTtl.textContent = raincoat.title;
  productDescription.textContent = raincoat.description;
  // Change the int of price to num
  productPrice.textContent = raincoat.price;
  //       ------- styles/classes and ids -------
  productCard.classList.add("card");
  imgContForCard.classList.add("card-image");
  textContainer.classList.add("card-text-field");
  productDescription.classList.add("product-txt");
  productTtl.classList.add("product-ttl");
  productPrice.classList.add("product-price");
  //       ------- append and return -------
  // to do
  // 1. add imgs
  // 2. create a div with class card-image
  // 3. create a div with class card.
  // 4. append card-image and card
  textContainer.append(productTtl, productDescription, productPrice);
  productCard.append(imgContForCard, textContainer);
  return productCard;
}
// Display html to the DOM
async function displayRainCoatsLi(rainCoats) {
  const displayContainer = document.querySelector("#display-container");
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
