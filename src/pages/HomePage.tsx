import axios from 'axios';
import { useEffect, useState } from 'react';
// import type { Product } from '../types/Product';
import ProductCard from '../components/elements/ProductCard';


type ProductRace = {
  rate: number;
  count: number;
}
type ProductType =  {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  rating: ProductRace;
};

const HomePage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
    };
    getProduct();
  }, []);


  return (
    <>
      {products.map((product) => 
        <ProductCard 
        key={product.id} 
        product={product} 
        />)
        }
    </>
  );
};

export default HomePage;
