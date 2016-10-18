import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

/** Helper */
import { getFilteredProducts } from '../../store/products/selectors';
import { marginMedium } from '../../utils/space';

/** Elements */
import Helmet from 'react-helmet';
import Card from '../../components/card/Card';
import { Row, Cell } from '../../components/table/Table';


/** List Item */
export const ProductItem = ({ product }) => (
  <Row>
    <Cell size="12">
      <Row>
        <Cell size="3">{product.domain_id + product.group_id + product.id}</Cell>
        <Cell size="6">{product.name}</Cell>
        <Cell size="3">{product.classification}</Cell>
      </Row>
    </Cell>
  </Row>
)

/** List */
export class ProductList extends React.Component {
  render () {
    const { domain_id, group_id } = this.props;
    const products = this.props.products.toJS();
    const prefix_id = `${domain_id}${group_id}`;
    return (
      <div>
        <Helmet title={`Products in Group ${prefix_id}`}/>
        <Card style={marginMedium}>
          <h1>Products in Group {prefix_id}</h1>
          {Object.keys(products).map(id => (
            <ProductItem key={id} product={products[id]}/>
          ))}
        </Card>
      </div>
    );
  }
}

ProductList.propTypes = {
  pathname: PropTypes.string.isRequired,
  domain_id: PropTypes.string.isRequired,
  group_id: PropTypes.string.isRequired
}

export default connect(createSelector(
  [
    getFilteredProducts(),
    (state, props) => props
  ],
  (products, props) => ({ products, ...props })
))(ProductList);