import { products } from "../backend/product.js";
import { formatCurrency } from "./utils/formatCurrency.js";
import { cart } from  "../backend/cart.js"


renderCartHTML();

function renderCartHTML(){
  
  let itemsHTML='';
  let matchingItem;

  cart.forEach((item) => {

    products.forEach((product) => {
      if(item.id === product.id){
        matchingItem = product;
      }
    })

    console.log(item);
    itemsHTML += `
      <div class="item-div">
        <div class="delivery-date">
          Delivery date:Wednesday, September 25
        </div>
        <div class="item-summary">
          <div class="item-details">
            <div>
              <img class="cart-items-img" src="./${matchingItem.image}">
            </div>

            <div class="item-sub-details">
              <div class="item-name">${matchingItem.name}</div>
              <div class="item-price">Price: Rs.${formatCurrency(matchingItem.pricePaise)}</div>
              <div class="item-quantity">Quantity: ${item.quantity}</div>
            </div>

          </div>
          <div class="choose-delivery-div">
            <div class="choose-delivery">Choose a delivery option:</div>
            <div class="delivery-option-div">
              <input type="radio">
              <div class="delivery-option">
                <div class="delivery-date-option">Wednesday,September 25</div>
                <div class="shipping-cost">FREE shipping</div>
              </div>
            </div>
            
            <div class="delivery-option-div">
              <input type="radio">
              <div class="delivery-option">
                <div class="delivery-date-option">Sunday,September 29</div>
                <div class="shipping-cost">Rs.50 shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  })

  console.log(cart);


  const cartSummary = itemsHTML;
  console.log(cartSummary);
  document.querySelector('.order-summary').innerHTML = cartSummary;
}

