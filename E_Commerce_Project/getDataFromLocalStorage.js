import { updateNavCartValue } from "./updateNavCartValue";

export const getDataFromLocalStorage = () => {
  // Fetching data from local storage
  let dataFetched = localStorage.getItem("eachCardDetail");

  // If the array/data is empty simply return it
  if (!dataFetched) {
    return [];
  }

  // Convert the fetched data into json format
  dataFetched = JSON.parse(dataFetched);

  updateNavCartValue(dataFetched);
  return dataFetched;
};
