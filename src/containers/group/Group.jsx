import React, { PropTypes } from 'react';
import Match from 'react-router/Match';
import GroupList from './GroupList';
import Product from '../product/Product';


const Group = ({ pathname }) => (
  <div>
    <span>Group: {pathname}</span>
    <Match pattern={`/:domain_id(\\d+)`} exactly component={GroupList}/>
    <Match pattern={`/:domain_id(\\d+)/:group_id(\\d+)`} component={Product}/>
  </div>
)

Group.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default Group;