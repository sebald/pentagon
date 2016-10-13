import React, { PropTypes } from 'react';
import './cell.css';

const ratio = 12;
const sizes = Array.from({length:ratio}, (a, i) => (i+1)+'');
const getStyle = (size, length) => {
  const width = `${(size/length)*100}%`;
  return {
    flexBasis: width,
    maxWidth: width
  };
}

const Cell = ({ children, size }) => (
  <div className="Cell" style={getStyle(size, ratio)}>{children}</div>
)

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(sizes).isRequired
}

export default Cell;