import { addToCart } from '../cart-utils.js';

export function renderProduct(product) {

   
    const li = document.createElement('li');
    li.classList.add('product-listed');
 
    const h4 = document.createElement('h4');
    h4.classList.add('product-name');
    h4.textContent = product.name;
    li.append(h4);
 
    const img = document.createElement('img');
    img.classList.add('product-image');
    img.src = `../assets/${product.image}`;
    li.append(img);
    

    const pType = document.createElement('p');
    pType.classList.add('product-type');
    pType.textContent = product.type;
    li.append(pType);

    const pSize = document.createElement('p');
    pSize.classList.add('product-size');
    pSize.textContent = product.size;
    li.append(pSize);
 
    const pPrice = document.createElement('p');
    pPrice.classList.add('product-price');
    pPrice.textContent = `$${product.price}`;
    li.append(pPrice);
 
    const button = document.createElement('button');
    button.addEventListener('click', () => {
        addToCart(product.id);
    });
    button.textContent = 'Add to cart';
    li.append(button);


    
    
    return li; 
}




