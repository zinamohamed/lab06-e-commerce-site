
import { findById } from '../utils.js';
import { renderRowItems } from '../utils.js';
import { cart } from './cart-data.js';
import { products } from '../data.js';

const table = document.querySelector('table');

for (let item of cart) {
    
    const product = findById(item.id, products);
    
    const tableRowDom = renderRowItems(item, product);

    table.append(tableRowDom);


}




