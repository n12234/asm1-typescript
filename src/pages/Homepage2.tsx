import axios from 'axios';
import React, { useEffect, useState } from 'react';
import type { ProductType } from '../types/Product';
import ProductCard from '../components/elements/ProductCard';

const Homepage2 = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
    };
    getProduct();
  }, []);
console.log(products);

  return (
    <>
      <h1>Home page</h1>
      {
        products.map((product) =>
        <ProductCard
        key={product.id}
        product={product}
        />)
      }
    </>
  );
};

export default Homepage2;
