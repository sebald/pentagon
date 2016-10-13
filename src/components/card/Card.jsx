import React, { PropTypes } from 'react';
import '../../style/colors.css';
import './card.css';

const Card = ({ children, style }) => (
  <div className="Card" style={style}>{children}</div>
)

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card;