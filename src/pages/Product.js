import React from 'react'
import ProductGrid from "../components/ProductGrid/ProductGrid";
import * as constants from '../components/util/constants';

const Product = () => {
    return (
      <ProductGrid array={constants.mentorArray} />
    );
};

export default Product;
