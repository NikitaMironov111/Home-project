import React, { FC, useEffect, useState, useContext } from 'react';
import { IProduct } from '../components/Products/IProduct';
import './Products.css';
import { initialUser } from '../components/Products/initialProduct';
import http from '../components/http';
import ProductCards from '../components/Products/ProductCards';
import Search from '../components/Search';
import { useSearch } from '../hooks/useSearch';
import Context from '../context/context';

const Products: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState('');

  const getProducts = async () => {
    try {
      const products = await http.get('products');
      setProducts(products.data.products);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const searchedProduct = useSearch(products, 'title', search);

  return (
    <>
      <Search field={'Enter Product Title'} setSearch={setSearch}></Search>
      <ProductCards products={searchedProduct}></ProductCards>
    </>
  );
};

export default Products;
