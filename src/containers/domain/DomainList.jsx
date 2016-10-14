import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

/** Helper */
import { getDomains } from '../../store/domains/selectors';
import { marginMedium } from '../../utils/space';

/** Elements */
import Helmet from 'react-helmet';
import Link from 'react-router/Link';
import Match from 'react-router/Match';
import Card from '../../components/card/Card';
import { Row, Cell } from '../../components/table/Table';
import Domain from './Domain';

/** List Item */
export const DomainItem = ({ domain, to }) => (
  <Row hover>
    <Cell size="12">
      <Link to={`${to}/${domain.id}`}>
        <Row>
          <Cell size="6">{domain.id}</Cell>
          <Cell size="6">{domain.label}</Cell>
        </Row>
      </Link>
    </Cell>
  </Row>
)


/** List */
export class DomainList extends React.Component {
  render() {
    const { domains, pathname } = this.props;
    return (
      <Card style={marginMedium}>
        <Helmet title="Domains"/>
        {Object.keys(domains).map(id => (
          <DomainItem key={id} to={pathname} domain={domains[id]} />
        ))}
      </Card>
    );
  }
}

export default connect(createSelector(
  getDomains(),
  domains => ({ domains })
))(DomainList);