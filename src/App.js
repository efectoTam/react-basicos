import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {

  // Crear listado de productos
  const [products, saveProducts] = useState([
    { id: 1, name: 'Camisa ReactJS', price: 50 },
    { id: 2, name: 'Camisa VueJS', price: 40 },
    { id: 3, name: 'Camisa AngularJS', price: 30 },
    { id: 4, name: 'Camisa Node', price: 20 },
  ]);

  // State para un carrito de compras
  const [cart, addProduct] = useState([]);


  // Obtener la fecha
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        title='Tienda Virtual'
      />
      <h1>Lista de productos</h1>
      {products.map(product => (
        <Products
          key={product.id}
          product={product}
          products={products}
          cart={cart}
          addProduct={addProduct}
        />
      ))}
      <Cart
        cart={cart}
        addProduct={addProduct}
      />
      <Footer
        date={date}
      />
    </Fragment>
  );
}

export default App;
