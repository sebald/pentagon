import React, { PropTypes } from 'react';

const GroupList = ({ pathname, params }) => (
  <div>
    <h1>{ params.domain_id }</h1>
  </div>
)

GroupList.propTypes = {
  pathname: PropTypes.string.isRequired,
  params: PropTypes.shape({
    domain_id: PropTypes.string.isRequired
  }).isRequired
}

export default GroupList;