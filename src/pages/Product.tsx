import React, { useState, useEffect } from 'react';
import { IProduct } from '../components/Products/IProduct';
import { useParams } from 'react-router-dom';
import http from '../components/http';
import ProductCards from '../components/Products/ProductCards';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct[]>([]);

  const getProduct = async () => {
    try {
      const product = await http.get(`products/${id}`);
      console.log([product]);
      setProduct([product.data]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <ProductCards products={product}></ProductCards>
    </div>
  );
};

export default Product;
