// Accesising add_to_card_template_outer

let addToCardTemplateOuter = document.querySelector(
  ".add_to_card_template_outer"
);

// Accessing add to card template
let addToCartTemplate = document.querySelector(".add_to_cart_template");

// Import data from local storage
import { getDataFromLocalStorage } from "./getDataFromLocalStorage";
//  Getting data from local storage
let dataFromLocalStorage = getDataFromLocalStorage();

// Import data from json file
import apiData from "./api/api.json";
import { fetchingQuantPriceFromLs } from "./FetchingQuantPriceFromLs";
import { removeDataFromLocalStorage } from "./removeDataFromLocalStorage";
import { updateCartQuantStock } from "./updateCartQuantStock";
import { updataTotalPrice } from "./updataTotalPrice";
import { showToast } from "./showToast";

// Function add to cart to dsiplay the data in cart
const addToCartButtonDataDisplay = () => {
  // Filtering the data api and local storage
  const matchData = apiData.filter((eachCardApi) => {
    return dataFromLocalStorage.some(
      (eachCardLocal) => eachCardLocal.currCardId === eachCardApi.productId
    );
  });

  //   Now iterating the match data
  matchData.forEach((currMatchData) => {
    // Destructring the resulted object
    const {
      productId,
      productCategory,
      productName,
      productStock,
      productPrice,
      img,
    } = currMatchData;

    // Accessing the refence of clonning
    let cartProductTemplate = document.importNode(
      addToCartTemplate.content,
      true
    );

    // Now adding the value dynamically
    cartProductTemplate.querySelector(".category_cart").textContent =
      productCategory;
    cartProductTemplate.querySelector("#image_cart").src = img;
    cartProductTemplate
      .querySelector("#cardValue")
      .setAttribute("id", `card${productId}`);
    cartProductTemplate.querySelector(".card_heading_cart").textContent =
      productName;

    // Fetching quantity from ls
    let fetchQuant = fetchingQuantPriceFromLs(productId);

    cartProductTemplate.querySelector(".add_to_cart_quant").textContent =
      fetchQuant;

    // Updating price
    cartProductTemplate.querySelector(".actual_price").textContent =
      productPrice * fetchQuant;

    // Removing the element on trash_btn
    // Adding event listener in each card
    cartProductTemplate
      .querySelector(".add_to_cart_btn_cart")
      .addEventListener("click", (currTarget) => {
        console.log(currTarget.target);
        removeDataFromLocalStorage(productId);
      });

    // Updating The card quntity
    cartProductTemplate
      .querySelector("#quantity_btns_cart")
      .addEventListener("click", (currCardBtn) => {
        // Calling the function updateCart Quantity
        updateCartQuantStock(
          currCardBtn,
          productId,
          productStock,
          productPrice
        );
      });

    // Deleting the toast notification
    cartProductTemplate
      .querySelector("#add_to_cart_btn")
      .addEventListener("click", (e) => {
        showToast(e, productName);
      });

    // Appending it insie parent
    addToCardTemplateOuter.append(cartProductTemplate);
  });
};

addToCartButtonDataDisplay();
updataTotalPrice();
