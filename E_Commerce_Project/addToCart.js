import { getDataFromLocalStorage } from "./getDataFromLocalStorage";
import { updateNavCartValue } from "./updateNavCartValue";
getDataFromLocalStorage();
export const addToCart = ( currCardId) => {
  //  getting data from local storage
  let dataFromLocalStorage = getDataFromLocalStorage();

  // Accesing the current card
  const currTargetingCard = document.querySelector(`#eachCard${currCardId}`);

  //   Accesing cards products stocks
  let currTargetingCardProdQuant =
    currTargetingCard.querySelector(".product_chose").innerText;

  //   Accesing stocks products actual price
  let currTargetingCardProdPrice =
    currTargetingCard.querySelector(".actual_price").innerText;

  // Removing the dollar sign from value
  currTargetingCardProdPrice = currTargetingCardProdPrice.slice(1);

  //  Checks if the data exist before in local storage
  let dataAlreadyExist = dataFromLocalStorage.find(
    (currCard) => currCard.currCardId === currCardId
  );

  // Updating the existing card price and quantity
  if (dataAlreadyExist && currTargetingCardProdQuant > 1) {
    //  Updating the quantity of the products
    currTargetingCardProdQuant =
      Number(currTargetingCardProdQuant) +
      Number(dataAlreadyExist.currTargetingCardProdQuant);

    let updateTheExistData = {
      currCardId,
      currTargetingCardProdPrice,
      currTargetingCardProdQuant,
    };

    // Map the prev data
    updateTheExistData = dataFromLocalStorage.map((currCard) =>
      currCard.currCardId === currCardId ? updateTheExistData : currCard
    );
    // Storing data on local storage
    localStorage.setItem("eachCardDetail", JSON.stringify(updateTheExistData));
  }

  // This will return false if the product already exist
  if (dataAlreadyExist) {
    return false;
  }

  // Multiplying the value by total stocks
  currTargetingCardProdPrice =
    currTargetingCardProdPrice * currTargetingCardProdQuant;

  // Storing data on local storage
  dataFromLocalStorage.push({
    currCardId,
    currTargetingCardProdPrice,
    currTargetingCardProdQuant,
  });
  localStorage.setItem("eachCardDetail", JSON.stringify(dataFromLocalStorage));

  // Calling the function updateNavCartValue
  updateNavCartValue(dataFromLocalStorage);
};
