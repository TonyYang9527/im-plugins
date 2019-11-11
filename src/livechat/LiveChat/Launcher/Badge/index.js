import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { observer } from "mobx-react";


const Badge = ({ badge }) => (
  badge > 0 &&
  <span className="rcw-badge">{badge}</span>
);

Badge.propTypes = {
  badge: PropTypes.number
};

export default observer(Badge);