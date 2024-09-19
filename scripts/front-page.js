import { products } from "../backend/product.js"
import { formatCurrency } from "./utils/formatCurrency.js"
import { addToCart } from "../backend/cart.js";

let productHTML='';

renderProductsHTML();

function renderProductsHTML(){

  products.forEach((product) => {
    productHTML+=
    `<div class="product-div">
      <div class="item-div">
        <div class="image-div">
          <img class="item-image" src="${product.image}">
        </div>
        <div class="item-details-main-div">
          <div class="item-details">
            <div class="item-name">${product.name}</div>
            <div class="item-price">&#8377;${formatCurrency(product.pricePaise)}</div>
          </div>
          <div>
            <img class="add-to-wishlist" src="./logos/heart.svg">
          </div>
        </div>
      </div>
      <div class="buying-options-main-div">
        <div class="buying-options">
          <div class="buy-now">Buy now</div>
          <div class="add-to-cart" data-product-id="${product.id}">Add to cart</div>
        </div>
      </div>     
    </div>`
  })

  const productGrid = productHTML;
  document.querySelector('.product-grid').innerHTML = productGrid;
}

document.querySelectorAll('.add-to-cart').
  forEach((button) => {
    button.addEventListener(('click'), () => {
      const {productId} = button.dataset;
      addToCart(productId);
      console.log(productId)
    })
  })