import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

/** Helper */
import { getDomains } from './selectors';
import { marginMedium } from '../../utils/space';

/** Components */
import Card from '../../components/card/Card';
import Link from 'react-router/Link';
import { Row, Cell } from '../../components/table/Table';


export class DomainList extends React.Component {
  render() {
    const { domains, pathname } = this.props;
    const items = Object.keys(domains).map(id => (
      <Row key={id} hover={true}>
        <Cell size="12">
          <Link to={{ pathname: `${pathname}/${id}` }}>
            <Row>
              <Cell size="6">{id}</Cell>
              <Cell size="6">{domains[id].label}</Cell>
            </Row>
          </Link>
        </Cell>
      </Row>
    ));
    return <Card style={marginMedium}>{items}</Card>;
  }
}

export default connect(createSelector(
  getDomains(),
  domains => ({ domains })
))(DomainList);