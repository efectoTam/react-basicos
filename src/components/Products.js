import React from 'react';

const Product = ({product, cart, addProduct, products}) => {
  const { name, price, id } = product;

  // Agregar producto al carrito
  const selectProduct = id => {
    const product = products.filter(product => product.id === id);
    addProduct([
      ...cart,
      product
    ]);
  }

  return ( 
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      <button
        type="button"
        onClick={ () => selectProduct(id) }
      >
        Comprar
      </button>
    </div>
  );
}
 
export default Product;