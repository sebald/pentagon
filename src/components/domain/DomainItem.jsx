import React, { PropTypes } from 'react';
import Link from 'react-router/Link';
import { Cell, Row } from '../table/Table';

const DomainItem = ({ to, domain }) => (
  <Row hover>
    <Cell size="12">
      <Link to={to}>
        <Row>
          <Cell size="6">{domain.id}</Cell>
          <Cell size="6">{domain.label}</Cell>
        </Row>
      </Link>
    </Cell>
  </Row>
)

DomainItem.propTypes = {
  to: PropTypes.string.isRequired,
  domain: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })
}

export default DomainItem;