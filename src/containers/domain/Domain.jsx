import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

/** Helper */
import { getDomains } from './selectors';
import { marginMedium } from '../../utils/space';

/** Components */
import Card from '../../components/card/Card';
import { RowLink, Cell } from '../../components/table/Table';


const mapStateToProps = createSelector(
  getDomains(),
  domains => ({ domains })
);

export class DomainList extends React.Component {
  render() {
    const { domains } = this.props;
    const rows = Object.keys(domains).map(id => (
      <RowLink key={id} to={{ pathname: `/${id}` }}>
        <Cell size="6">{id}</Cell>
        <Cell size="6">{domains[id].label}</Cell>
      </RowLink>
    ));

    return <Card style={marginMedium}>{rows}</Card>;
  }
}

export default connect(mapStateToProps)(DomainList);