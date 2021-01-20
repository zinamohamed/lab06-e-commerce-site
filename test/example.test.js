// IMPORT MODULES under test here:
// import { example } from '../example.js';


import { renderProduct } from '../products/render-product.js';
import { findByID } from '../utils.js';
import { products } from '../data.js'; 



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
        price: 15.99,
        image: '1.png',
        name: 'Niacinamide 10%',
        size: '16ml',
        type: 'Serum'
    };

    const actual = findByID(1, products);

    expect.deepEqual(actual, expected);

});