export let cart;

cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));

}

export function addToCart(productId){

  let matchingItem;

  cart.forEach((item) => {
    if(item.id === productId){
      matchingItem = item;
    }
  })
  
  if (matchingItem){
      matchingItem.quantity++;
  }else{
    cart.push({
      id:`${productId}`,
      quantity:1,
    })
  }

  console.log(cart);

  saveToStorage();
}

console.log(cart);
