import "./style.css";
// First import product from the api
import allProducts from "./api/api.json";
import { showProductBox } from "./productsCard";

// import the function from products Card

showProductBox(allProducts);
