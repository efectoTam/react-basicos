import React from 'react';

const Product = ({product, cart, addProduct, products}) => {
  const { name, price, id } = product;

  // Agregar producto al carrito
  const selectProduct = id => {
    const product = products.filter(product => product.id === id)[0];
    addProduct([
      ...cart,
      product
    ]);
  }

  // Elimina un producto del carrito

  const deleteProduct = id => {
    const products = cart.filter(product => product.id !== id);

    // Colocar los productos en el state
    addProduct(products);
  }

  return ( 
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      {products
      ? 
        (
          <button
            type="button"
            onClick={ () => selectProduct(id) }
          >
            Comprar
          </button>
        )
      : 
        (
          <button
            type="button"
            onClick={ () => deleteProduct(id) }
          >
            Eliminar
          </button>
        )
      }
    </div>
  );
}
 
export default Product;