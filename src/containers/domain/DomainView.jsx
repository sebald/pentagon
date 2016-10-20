import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

import { getDomains } from '../../store/domains/selectors';
import { marginMedium } from '../../utils/space';

import Helmet from 'react-helmet';
import Card from '../../components/card/Card';
import DomainItem from '../../components/domain/DomainItem';


export class DomainView extends React.Component {
  render() {
    const { pathname } = this.props;
    const domains = this.props.domains.toJS();
    return (
      <div>
        <Helmet title="Domains"/>
        <Card style={marginMedium}>
          {Object.keys(domains).map(id => (
            <DomainItem
              key={id}
              to={`${pathname}/${id}`}
              domain={domains[id]}
            />
          ))}
        </Card>
      </div>
    );
  }
}


export default connect(createSelector(
  getDomains(),
  domains => ({ domains })
))(DomainView);