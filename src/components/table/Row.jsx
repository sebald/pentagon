import React, { PropTypes } from 'react';
import Cell from './Cell';

import './row.css';
import { ofComponent } from '../../utils/propTypes';

const Row = ({ children, hover }) => (
  <div className={'Row' + (hover ? ' Row--hover': '')}>{children}</div>
)

Row.propTypes = {
  children: ofComponent(Cell),
  hover: PropTypes.bool
}

export default Row;