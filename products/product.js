import { products } from '../data.js';
import { renderProduct } from './render-product.js';


const list = document.getElementById('list');

for (let product of products) {
    const productElement = renderProduct(product);

    list.prepend(productElement);
}