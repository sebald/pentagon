import React, { PropTypes } from 'react';
import Row from './Row';
import Link from 'react-router/Link';
import './row-link.css';

/** Component */
const RowLink = ({children, to}) => (
  <Link {...{to, className:'RowLink'}}>
    <Row>{children}</Row>
  </Link>
);

RowLink.propTypes = {
  to: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
}

export default RowLink;