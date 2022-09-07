import React from 'react';
import Spinner from '../Spinner/Spinner';
import { IProduct } from './IProduct';
import { Link } from 'react-router-dom';

const UserCards = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {products.length ? (
        products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <img src={product.thumbnail} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/products/${product.id}`}>{product.title}</Link>
                </h5>
                <p className="card-text">Description: {product.description}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default UserCards;
