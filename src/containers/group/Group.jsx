import React, { PropTypes } from 'react';
import Match from 'react-router/Match';
import GroupList from './GroupList';
import Product from '../product/Product';


const Group = ({ pathname, params }) => (
  <div>
    <span>group</span>
    <Match pattern={`${pathname}`} exactly render={
      props => <GroupList domain_id={params.domain_id} {...props}/>
    }/>
    <Match pattern={`${pathname}/:group_id(\\d+)`} component={Product}/>
  </div>
)

Group.propTypes = {
  pathname: PropTypes.string.isRequired,
  params: PropTypes.shape({
    domain_id: PropTypes.string.isRequired
  }).isRequired
}

export default Group;