import { createSelector } from 'reselect';

export const getProducts = () => state => state.get('products');

export const getFilteredProducts = () => createSelector(
  (state, { domain_id, group_id }) => ({ products: getProducts()(state), domain_id, group_id }),
  ({ products, domain_id, group_id }) => products.filter(
    item => item.get('domain_id') === domain_id && item.get('group_id') === group_id
  )
);