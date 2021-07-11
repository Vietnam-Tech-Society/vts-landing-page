import React from 'react'
import ProductGrid from "../components/ProductGrid";
import * as constants from '../util/constants';

const Product = () => {
    return (
      <ProductGrid array={constants.mentorArray} />
    );
};

export default Product;
