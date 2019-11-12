import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react";
import './style.scss';

class QuickButtons extends Component {

  constructor(props) {
    super(props)
    this.getComponentToRender = this.getComponentToRender.bind(this);
  }

  getComponentToRender(button) {
    const ComponentToRender = button.get('component');
    return (
      <ComponentToRender
        onQuickButtonClicked={this.props.onQuickButtonClicked}
        button={button}
      />
    );
  }

  render() {

    if (!this.props.store.state.buttons.size) {
      return null;
    }

    return (
      <div className="quick-buttons-container">
        <ul className="quick-buttons">
          {
             this.props.store.state.buttons.map((button, index) =>
              <li className="quick-list-button" key={index}>
                {this.getComponentToRender(button)}
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

QuickButtons.propTypes = {
  buttons: PropTypes.array,
};


export default observer(QuickButtons);