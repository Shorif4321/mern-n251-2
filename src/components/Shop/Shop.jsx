import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // =========== data loading time website a loading dekhano ===========
  if (products.length < 1) {
    return (
      <p className="p-25 text-3xl text-red-500">Loading................</p>
    );
  }

  // ========== product add to cart ============
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product.id === selectedProduct.id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, selectedProduct];
    }
    setCart(newCart);
  };

  // ===== clear the cart button =========
  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="pt-25 p-5 flex justify-between gap-5 ">
      <div className="w-4/5 grid grid-cols-3 gap-5">
        {products.map((product) => (
          <Product
            key={product.id}
            handleAddToCart={handleAddToCart}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="bg-secondary w-1/5 rounded  fixed right-0">
        <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
