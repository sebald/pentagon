import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'
import { getDomains } from './selectors';


const mapStateToProps = createSelector(
  getDomains,
  domains => ({ domains })
);

export class DomainList extends React.Component {
  render() {
    const { domains } = this.props;
    console.log(domains);
    const items = Object.keys(domains).map(id => {
      return <li key={id}>{domains[id].label}</li>
    });

    return <ul>{items}</ul>;
  }
}

export default connect(mapStateToProps)(DomainList);