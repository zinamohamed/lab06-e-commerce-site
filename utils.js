export function findByID(id, array) {
    for (let product of array) {
        if (product.id === id) {
            return product;
        }
    }
}