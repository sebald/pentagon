import React, { PropTypes } from 'react';
import Match from 'react-router/Match';
import GroupList from './GroupList';
import Product from '../product/Product';


const Group = ({ pathname, params }) => (
  <Match pattern={`${pathname}`} children={() => (
    <div>
      <Match pattern="/" render={
        props => <GroupList domain_id={params.domain_id} {...props}/>
      }/>
      <Match pattern=":group_id" component={Product}/>
    </div>
  )}/>
)

Group.propTypes = {
  pathname: PropTypes.string.isRequired,
  params: PropTypes.shape({
    domain_id: PropTypes.string.isRequired
  }).isRequired
}

export default Group;