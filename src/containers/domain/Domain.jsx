import React from 'react';
import Match from 'react-router/Match';
import DomainList from './DomainList';
import Group from '../group/Group';


const Domain = ({ pathname }) => (
  <Match pattern={`${pathname}`} children={() => (
    <div>
      <Match pattern="" component={DomainList}/>
      <Match pattern=":domain_id" component={Group}/>
    </div>
  )}/>
)

Domain.propTypes = {
  pathname: React.PropTypes.string.isRequired
}

export default Domain;