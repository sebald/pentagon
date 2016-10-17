import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

/** Helper */
import { marginMedium } from '../../utils/space';

/** Elements */
import Helmet from 'react-helmet';
import Link from 'react-router/Link';
import Card from '../../components/card/Card';
import { Row, Cell } from '../../components/table/Table';


/** List */
export class GroupList extends React.Component {
  render() {
    const { domain_id, pathname } = this.props;
    return (
      <div>
        <Helmet title={`Groups in Domain ${domain_id}`}/>
        <Card style={marginMedium}>
          <h1>Groups in Domain {domain_id}</h1>
        </Card>
      </div>
    );
  }
}

GroupList.propTypes = {
  pathname: PropTypes.string.isRequired,
  domain_id: PropTypes.string.isRequired
}

export default GroupList;