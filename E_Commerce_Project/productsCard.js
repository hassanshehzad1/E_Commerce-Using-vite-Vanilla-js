import { addToCart } from "./addToCart";
import { showToast } from "./showToast";

import { updateQuantityEachProduct } from "./updateQuantity";

// cards_template_box_outer
const cardsTemplateBoxOuter = document.querySelector(".cards_Template_outer");
//  Template tag accesing
const productTemplateTag = document.getElementById("product_template_tag");

// Showing Cards product container
export const showProductBox = (allProducts) => {
  // Return the false if the products is empty
  if (!allProducts) {
    return false;
  }

  //   Itertaing the array of json
  allProducts.forEach((eachProduct) => {
    // Destructuring the array of object
    const {
      productId,
      productName,
      productCategory,
      productPrice,
      productStock,
      productDescription,
      img,
    } = eachProduct;

    //  Now Accessing the descendands of the template box

    const eachProductCardTemp = document.importNode(
      productTemplateTag.content,
      true
    );

    // Adding the id each card
    eachProductCardTemp
      .querySelector("#cardValue")
      .setAttribute("id", `eachCard${productId}`);

    // Rendering the element dynamically
    eachProductCardTemp.querySelector(".product_name").textContent =
      productName;
    eachProductCardTemp.querySelector("#image").src = img;
    eachProductCardTemp.querySelector(".card_product_detail").textContent =
      productDescription.slice(0, 70);
    eachProductCardTemp.querySelector(
      ".actual_price"
    ).textContent = `$${productPrice}`;
    eachProductCardTemp.querySelector(".total_stocks_value").textContent =
      productStock;
    eachProductCardTemp.querySelector(".category").textContent =
      productCategory;
    eachProductCardTemp.querySelector(".discount_price").textContent = `$${
      productPrice * 2
    }`;

    // Adding event listener in each card
    eachProductCardTemp
      .querySelector(".each_card")
      .addEventListener("click", (currTarget) => {
        //  Call the function updateQuantity
        updateQuantityEachProduct(currTarget, productId, productStock);
      });

    //  calling the function addToCart
    eachProductCardTemp
      .querySelector("#addToCart")
      .addEventListener("click", (currTarget) => {
        addToCart(productId);
      });

    // Toast notifictaion
    eachProductCardTemp
      .querySelector("#showToast")
      .addEventListener("click", (e) => {
        showToast(e, productName);
      });
    //  Appending it inside parent outer box
    cardsTemplateBoxOuter.append(eachProductCardTemp);
  });
};
