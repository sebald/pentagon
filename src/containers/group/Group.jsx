import React, { PropTypes } from 'react';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';
import GroupList from './GroupList';
import Product from '../product/Product';


const Group = ({ pathname, params }) => (
  <div>
    <Match pattern={`${pathname}/:group_id`} exactly component={
      ({ params }) => <Redirect to={`${pathname}/${params.group_id}/product`}/>
    }/>
    <Match pattern={`${pathname}`} children={() => (
      <div>
        <Match pattern="" render={
          props => <GroupList domain_id={params.domain_id} {...props}/>
        }/>
        <Match pattern=":group_id/product" render={
          props => <Product {...props} params={{domain_id:params.domain_id, ...props.params}}/>
        }/>
      </div>
    )}/>
  </div>
)

Group.propTypes = {
  pathname: PropTypes.string.isRequired,
  params: PropTypes.shape({
    domain_id: PropTypes.string.isRequired
  }).isRequired
}

export default Group;