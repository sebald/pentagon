import React, { PropTypes } from 'react';
import Match from 'react-router/Match';
import ProductList from './ProductList';

const Product = ({ pathname, params }) => (
  <Match pattern={`${pathname}`} children={() => (
    <div>
      <Match pattern="" render={
        props => <ProductList domain_id={params.domain_id} group_id={params.group_id} {...props}/>
      }/>
    </div>
  )}/>
)

Product.propTypes = {
  pathname: PropTypes.string.isRequired,
  params: PropTypes.shape({
    domain_id: PropTypes.string.isRequired,
    group_id: PropTypes.string.isRequired,
  }).isRequired
}

export default Product;