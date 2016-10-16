import React, { PropTypes } from 'react';

const GroupList = ({ pathname, domain_id }) => (
  <div>
    <h1>Groups for Domain { domain_id }</h1>
  </div>
)

GroupList.propTypes = {
  pathname: PropTypes.string.isRequired
}

export default GroupList;