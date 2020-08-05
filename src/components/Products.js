import React from 'react';

const Product = ({product}) => {
  const { name, price, id } = product;

  // Agregar producto al carrito
  const selectProduct = id => {
    console.log('comprando... ', id)
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