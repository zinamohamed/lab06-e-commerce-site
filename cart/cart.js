
import { findById } from '../utils.js';
import { renderRowItems } from '../utils.js';
import { cart } from './cart-data.js';
import { products } from '../data.js';
import { calcItemTotal } from '../utils.js';


const table = document.querySelector('table');

let total = 0;

for (let item of cart) {
    
    const product = findById(item.id, products);

    const totalForThisProduct = calcItemTotal(item, product);

    total = total + totalForThisProduct;
    
    const tableRowDom = renderRowItems(item, product);

    table.append(tableRowDom);


}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
const td4 = document.createElement('td');

td4.textContent = `Order total: $${total}`;

tr.append(td1, td2, td3, td4);

table.append(tr);




