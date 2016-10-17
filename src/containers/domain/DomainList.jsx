import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

/** Helper */
import { getDomains } from '../../store/domains/selectors';
import { marginMedium } from '../../utils/space';

/** Elements */
import Helmet from 'react-helmet';
import Link from 'react-router/Link';
import Card from '../../components/card/Card';
import { Row, Cell } from '../../components/table/Table';

/** List Item */
export const DomainItem = ({ domain, pathname }) => (
  <Row hover>
    <Cell size="12">
      <Link to={`${pathname}/${domain.id}`}>
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
    const { pathname } = this.props;
    const domains = this.props.domains.toJS();
    return (
      <div>
        <Helmet title="Domains"/>
        <Card style={marginMedium}>
          {Object.keys(domains).map(id => (
            <DomainItem key={id} pathname={pathname} domain={domains[id]}/>
          ))}
        </Card>
      </div>
    );
  }
}


export default connect(createSelector(
  getDomains(),
  domains => ({ domains })
))(DomainList);