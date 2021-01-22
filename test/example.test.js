// IMPORT MODULES under test here:
// import { example } from '../example.js';


import { renderProduct } from '../products/render-product.js';
import { findById } from '../utils.js';
import { products } from '../data.js'; 
import { calcItemTotal } from '../utils.js';
import { calcOrderTotal } from '../utils.js';
import { renderRowItems } from '../utils.js';
import { cart } from '../cart/cart-data.js';
import { getCart, setCart } from '../cart-utils.js';
import { clearCart } from '../cart-utils.js';




const test = QUnit.test;

test('should take in a product and return a li', (expect) => {
    const niacinamide = {
        id: 1,
        price: 15.99,
        image: '1.png',
        name: 'Niacinamide 10%',
        size: '16ml',
        type: 'Serum'
    };
    
    
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="product-listed"><h4 class="product-name">Niacinamide 10%</h4><img class="product-image" src="../assets/1.png"><p class="product-type">Serum</p><p class="product-size">16ml</p><p class="product-price">$15.99</p><button>Add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(niacinamide);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('findByID should take in 1 and the products array and return Niacinamide 10%', (expect) => {
    const expected = {
        id: 1,
        price: 15,
        image: '1.png',
        name: 'Niacinamide 10%',
        size: '16ml',
        type: 'Serum'
    };

    const actual = findById(1, products);

    expect.deepEqual(actual, expected);

});

test('calcItemTotal should take in a cart item quantity and price and return the total after multiplying', (expect) => {
    const expected = 45;

    const actual = calcItemTotal(findById(1, cart), findById(1, products));

    expect.deepEqual(actual, expected);

});

test('calcOrderTotal should take in all of the cart items price and return the sum', (expect) => {
    const expected = 139;

    const actual = calcOrderTotal(cart, products);

    expect.deepEqual(actual, expected);

});


test('renderRowItems should render a table row with a products name, quantity and price', (expect) => {
    const expected = '<tr><td><img src="../assets/1.png"></td><td>Niacinamide 10%</td><td>3</td><td>$45\n\n    </td></tr>';

    const actual = renderRowItems(findById(1, cart), findById(1, products));

    expect.deepEqual(actual.outerHTML, expected);

});



test('getCart should return cart from local storage', (expect) => {
    const fakeCart = [
        {
            id: 6,
            quanitity: 5
        },
        {
            id: 8,
            quanitity: 4
        },
    

    ];
    const stringyCart = JSON.stringify(fakeCart);

    localStorage.setItem('CART', stringyCart);
    
    const cart = getCart();

    expect.deepEqual(cart, fakeCart);
});

test('setCart should turn array into string and set to local strorage', (expect) => {
    const fakeCart = [
        {
            id: 6,
            quanitity: 5
        },
        {
            id: 8,
            quanitity: 4
        },
    

    ];

    setCart(fakeCart);
    
    const newCart = JSON.stringify(fakeCart);

    const stringyCart = localStorage.getItem('CART');

    


    expect.deepEqual(newCart, stringyCart);
});

test('clearCart should turn array into string and set to local strorage', (expect) => {
    const fakeCart = [
        {
            id: 6,
            quanitity: 5
        },
        {
            id: 8,
            quanitity: 4
        },
    

    ];

    
    const newCart = JSON.stringify(fakeCart);

    localStorage.getItem('CART', newCart);

    clearCart();

    
    const emptyCart = JSON.stringify([]);
    const newEmptyCart = localStorage.getItem('CART');

    expect.deepEqual(emptyCart, newEmptyCart);
});





