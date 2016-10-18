import React from 'react';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';
import DomainList from './DomainList';
import Group from '../group/Group';


const Domain = ({ pathname }) => (
  <div>
    <Match pattern={`${pathname}/:domain_id`} exactly component={
      ({ params }) => <Redirect to={`${pathname}/${params.domain_id}/group`}/>
    }/>
    <Match pattern={`${pathname}`} children={() => (
      <div>
        <Match pattern="" component={DomainList}/>
        <Match pattern=":domain_id/group" component={Group}/>
      </div>
    )}/>
  </div>
)

Domain.propTypes = {
  pathname: React.PropTypes.string.isRequired
}

export default Domain;