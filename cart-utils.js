import { findById } from './utils.js';

const CART = 'CART';

const defaultEmptyCart = [];


export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    // only go grab the cart from localStorage if there IS a cart in localStorage //

    if (stringyCart) {

      // if there is a cart in local stroage, parse it //

        const parsedCart = JSON.parse(stringyCart);

        return parsedCart;
    
    } else {
        // if there is no cart, go ahead and add our default empty cart //
        const stringyDefualtCart = JSON.stringify(defaultEmptyCart);
        
        // then put that stringified empty cart in local storage //
        
        localStorage.setItem(CART, stringyDefualtCart);
        
        // forget about local storage, and give the user a defaul empty cart //
        
        return defaultEmptyCart;
    }
}


export function clearCart() {
    const stringyDefualtCart = JSON.stringify(defaultEmptyCart);
    
    localStorage.setItem(CART, stringyDefualtCart);
}


export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);
    
    localStorage.setItem(CART, stringyCart);
}


export function addToCart(id) {
  // get the cart from localStorage //
    const cart = getCart();

  // check if an item with this ID is already in the cart. //
    const cartItem = findById(id, cart);
  // If so, increment the quantity //
    if (cartItem) {
        cartItem.quantity++;
    } else {
      // If it's not in the cart, put one in there with a quantity of 1. //
        const newItem = {
            id: id,
            quantity: 1
        };

        cart.push(newItem);
    }

    setCart(cart);
}


