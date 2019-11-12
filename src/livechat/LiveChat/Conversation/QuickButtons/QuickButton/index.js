import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { observer } from "mobx-react";


const QuickButton = observer(props => {
  console.log("QuickButton ***props********", props);
  return (
    <button className="quick-button"
      onClick={(event) => props.onQuickButtonClicked(event, props.button.get('value'))}
    >
      {props.button.get('label')}
    </button>
  )
})

QuickButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
};

export default QuickButton; 