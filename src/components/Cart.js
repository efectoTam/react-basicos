import React from 'react';
import './cart.css';
import Products from './Products';

const Cart = ({cart, addProduct}) => (
  <div className="cart">
    <h2>Tu carrito de compras</h2>
    {cart.length === 0
    ? <p>No hay elementos en el carrito</p>
    : cart.map(product => (
      <Products
        key={product.id}
        product={product}
        cart={cart}
        addProduct={addProduct}
      />
    ))}
  </div>
)
 
export default Cart;