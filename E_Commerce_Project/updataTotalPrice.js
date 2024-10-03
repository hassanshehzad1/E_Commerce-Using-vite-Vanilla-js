import { getDataFromLocalStorage } from "./getDataFromLocalStorage";
// Updating the value in html
let totalBillVal = document.querySelector(".total_bill_val");
let taxValue = document.querySelector(".tax_value");
let finalPrice = document.querySelector(".final_price_val");

export const updataTotalPrice = () => {
  // accessing local storage
  let dataFromLocalStorage = getDataFromLocalStorage();

  let initalValue = 0;
  // Reduce method to calculate sum

  if (dataFromLocalStorage.length) {
    let sum = dataFromLocalStorage.reduce((currPrice, nextPrice) => {
      let cardPrice = nextPrice.currTargetingCardProdPrice || 0;
      return currPrice + cardPrice;
    }, initalValue);
   
    
    totalBillVal.innerText = sum;
    //  Adding tax
    taxValue.innerText = 30;
    // Final value
    finalPrice.innerText = 30 + sum;
  }
};
