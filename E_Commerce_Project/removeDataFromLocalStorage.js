// Import add to cart data
import { addToCart } from "./addToCart";
import { getDataFromLocalStorage } from "./getDataFromLocalStorage";
import { updataTotalPrice } from "./updataTotalPrice";
import { updateNavCartValue } from "./updateNavCartValue";

export const removeDataFromLocalStorage = (productId) => {
  // Getting data from local storage
  let dataFromLocalStorage = getDataFromLocalStorage();

  // Filtering the unMatched Data

  let unMatchedData = dataFromLocalStorage.filter(
    (currCardLs) => currCardLs.currCardId != productId
  );

  // Storing data on local storage
  localStorage.setItem("eachCardDetail", JSON.stringify(unMatchedData));

  //   Remving data from dom
  let removeCard = document.querySelector(`#card${productId}`);
  if (removeCard) {
    removeCard.remove();
  }
  updateNavCartValue(unMatchedData);
  updataTotalPrice();
};
