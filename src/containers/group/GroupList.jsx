import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

/** Helper */
import { getFilteredGroups } from '../../store/groups/selectors';
import { marginMedium } from '../../utils/space';

/** Elements */
import Helmet from 'react-helmet';
import Link from 'react-router/Link';
import Card from '../../components/card/Card';
import { Row, Cell } from '../../components/table/Table';


/** List Item */
export const GroupItem = ({ group, pathname }) => (
  <Row hover>
    <Cell size="12">
      <Link to={`${pathname}/${group.id}`}>
        <Row>
          <Cell size="6">{group.domain_id + group.id}</Cell>
          <Cell size="6">{group.label}</Cell>
        </Row>
      </Link>
    </Cell>
  </Row>
)

/** List */
export class GroupList extends React.Component {
  render() {
    const { domain_id, pathname } = this.props;
    const groups = this.props.groups.toJS();
    return (
      <div>
        <Helmet title={`Groups in Domain ${domain_id}`}/>
        <Card style={marginMedium}>
          <h1>Groups in Domain {domain_id}</h1>
          {Object.keys(groups).map(id => (
            <GroupItem key={id} pathname={pathname} group={groups[id]}/>
          ))}
        </Card>
      </div>
    );
  }
}

GroupList.propTypes = {
  pathname: PropTypes.string.isRequired,
  domain_id: PropTypes.string.isRequired
}

export default connect(createSelector(
  [
    getFilteredGroups(),
    (state, props) => props
  ],
  (groups, props) => ({ groups, ...props })
))(GroupList);