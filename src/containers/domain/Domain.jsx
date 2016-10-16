import React from 'react';
import Match from 'react-router/Match';
import DomainList from './DomainList';
import Group from '../group/Group';


const Domain = ({ pathname }) => (
  <div>
    <Match pattern={`${pathname}`} exactly component={DomainList}/>
    <Match pattern={`${pathname}:domain_id(\\d+)`} component={Group}/>
  </div>
)

Domain.propTypes = {
  pathname: React.PropTypes.string.isRequired
}

export default Domain;