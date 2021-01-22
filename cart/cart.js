
import { findById } from '../utils.js';
import { renderRowItems } from '../utils.js';
import { products } from '../data.js';
import { calcItemTotal } from '../utils.js';
import { clearCart, getCart } from '../cart-utils.js';



const table = document.querySelector('tbody');

const cart = getCart();

let total = 0;

for (let item of cart) {
    
    const product = findById(item.id, products);

    const totalForThisProduct = calcItemTotal(item, product);

    total += totalForThisProduct;
    
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

const orderButton = document.querySelector('button');
orderButton.addEventListener('click', () => {
    
    alert(JSON.stringify(cart, true, 2));
    clearCart();
    document.location.href = '../index.html'; 
});




