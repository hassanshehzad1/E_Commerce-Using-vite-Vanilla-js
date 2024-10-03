export const updateQuantityEachProduct = (
  currTarget,
  productId,
  productStock
) => {
  // Accesing the current card
  const currTargetingCard = document.querySelector(`#eachCard${productId}`);

  //   product quality
  const currTargetingCardProdQuant =
    currTargetingCard.querySelector(".product_chose");
  //   Assigning each card value if exist otherwise 1
  let stocksQuantity = parseInt(
    currTargetingCard.querySelector(".product_chose").innerText
  );

  // First for Increment

  if (currTarget.target.classList.contains("product_inc")) {
    if (productStock > stocksQuantity) {
      stocksQuantity += 1;
    } else if (stocksQuantity > productStock) {
      stocksQuantity = productStock;
    }
  }

  // First for decrement
  if (currTarget.target.classList.contains("product_dec")) {
    if (stocksQuantity > 1) {
      stocksQuantity -= 1;
    } else if (stocksQuantity < 1) {
      stocksQuantity = 1;
    }
  }

  currTargetingCardProdQuant.innerText = stocksQuantity;
  currTargetingCardProdQuant.setAttribute("productquantity", stocksQuantity);

  return stocksQuantity;
};
