import { getDataFromLocalStorage } from "./getDataFromLocalStorage";
import { updataTotalPrice } from "./updataTotalPrice";

export const updateCartQuantStock = (
  currTarget,
  currCardId,
  currCardTotalStocks,
  currCardPrice
) => {
  //  Inital Value of currTargetingCardProdQuant and currTargetingCardProdPrice
  let currTargetingCardProdQuant = 1;
  let localStoragePrice = 0;

  // Getting the match id card
  let currTargetingCardCart = document.querySelector(`#card${currCardId}`);

  //  Current card currTargetingCardProdPrice html

  let cartCardPrice = currTargetingCardCart.querySelector(".cart_actual_price");
  //  Current card stocks html

  let cartCardQuant = currTargetingCardCart.querySelector(".add_to_cart_quant");

  // Getting the data from local storage

  let dataFromLocalStorage = getDataFromLocalStorage();

  // Finding match data

  let matchData = dataFromLocalStorage.find((currCardLs) => {
    return currCardLs.currCardId === currCardId;
  });

  // If data exist then updating the value on ls
  if (matchData) {
    currTargetingCardProdQuant = matchData.currTargetingCardProdQuant;

    localStoragePrice = matchData.currTargetingCardProdPrice;
  } else {
    localStoragePrice = currCardPrice;
    currCardPrice = currCardPrice;
  }

  // First for Increment
  if (currTarget.target.classList.contains("product_inc")) {
    if (currCardTotalStocks > currTargetingCardProdQuant) {
      currTargetingCardProdQuant += 1;
      localStoragePrice = currTargetingCardProdQuant * currCardPrice;
    } else if (currTargetingCardProdQuant === currCardTotalStocks) {
      currTargetingCardProdQuant = currCardTotalStocks;
    }
  }

  // // First for decrement
  if (currTarget.target.classList.contains("product_dec")) {
    if (currTargetingCardProdQuant > 1) {
      currTargetingCardProdQuant -= 1;
    }
  }

  // Finally update the value on local storage
  localStoragePrice = currCardPrice * currTargetingCardProdQuant;

  let updateTheExistData = {
    currCardId,
    currTargetingCardProdPrice: localStoragePrice,
    currTargetingCardProdQuant,
  };

  // Map the prev data
  updateTheExistData = dataFromLocalStorage.map((currCard) =>
    currCard.currCardId === currCardId ? updateTheExistData : currCard
  );
  // Storing data on local storage
  localStorage.setItem("eachCardDetail", JSON.stringify(updateTheExistData));

  cartCardPrice.innerText = localStoragePrice;
  cartCardQuant.innerText = currTargetingCardProdQuant;

  // currTargetingCardProdQuant.setAttribute("productcurrTargetingCardProdQuant", stockscurrTargetingCardProdQuant);

  // updateTotalPrice
  updataTotalPrice();
};
