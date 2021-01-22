
import { findById } from '../utils.js';
import { renderRowItems } from '../utils.js';
import { products } from '../data.js';
import { calcOrderTotal } from '../utils.js';
import { clearCart, getCart } from '../cart-utils.js';

const table = document.querySelector('tbody');

const cart = getCart();



for (let item of cart) {
    
    const product = findById(item.id, products);

    const tableRowDom = renderRowItems(item, product);

    table.append(tableRowDom);


}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
const td4 = document.createElement('td');

td4.textContent = `Order total: $${calcOrderTotal(cart, products)}`;

tr.append(td1, td2, td3, td4);

table.append(tr);



const orderButton = document.getElementById('place-order');

if (cart > [0]) {
    orderButton.style.visibility = 'visible';
}

orderButton.addEventListener('click', () => {
    
    alert(JSON.stringify(cart, true, 2));
    clearCart();
    document.location.href = '../index.html'; 
});




