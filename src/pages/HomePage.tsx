import axios from 'axios';
import React, { useEffect, useState } from 'react';
import type { ProductType } from '../types/product';
import ProductCard from '../components/elements/ProductCard';

const HomePage = () => {
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
      {products.map((product) => 
        <ProductCard 
        key={product.id} 
        product={product} />
      )}
    </>
  );
};

export default HomePage;
