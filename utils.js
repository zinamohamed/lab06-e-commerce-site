

export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcItemTotal(item, product) {
    return item.quantity * product.price;




}

export function renderRowItems(cartItem, product) {
    
    
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = product.name;
    
    const imgTd = document.createElement('td');
    const img = document.createElement('img');
    img.src = `../assets/${product.image}`;
    imgTd.append(img);
    
    
    const quantityTd = document.createElement('td');
    const quantity = cartItem.quantity;
    quantityTd.textContent = quantity;
    
    const priceTd = document.createElement('td');
    priceTd.textContent = `$${calcItemTotal(cartItem, product)}

    `;


    tr.append(imgTd, nameTd, quantityTd, priceTd);

    return tr;


}






    
