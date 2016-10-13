import React from 'react';
import Cell from './Cell';

import './row.css';
import { ofComponent } from '../../utils/propTypes';

const Row = ({ children }) => (
  <div className="Row">{children}</div>
)

Row.propTypes = {
  children: ofComponent(Cell)
}

export default Row;