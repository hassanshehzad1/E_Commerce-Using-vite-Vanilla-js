import { getDataFromLocalStorage } from "./getDataFromLocalStorage";

let data = getDataFromLocalStorage();
export const fetchingQuantPriceFromLs = (productId, productStock) => {
  let productQuant = 1;
  // First finding the product id
  const matchId = data.find((currCard) => currCard.currCardId === productId);

  // Now checks if match id exist

  if (matchId) {
    productQuant = productQuant * matchId.currTargetingCardProdQuant;
  }
  return productQuant;
};
