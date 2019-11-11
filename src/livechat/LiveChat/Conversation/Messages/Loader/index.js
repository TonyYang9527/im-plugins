import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { observer } from "mobx-react";

const Loader = props => {

  return (
    <div className={`loader ${props.typing && 'active'}`}>
      <div className="loader-container">
        <span className="loader-dots"></span>
        <span className="loader-dots"></span>
        <span className="loader-dots"></span>
      </div>
    </div>
  )
}


Loader.propTypes = {
  typing: PropTypes.bool,
};

export default observer(Loader); 