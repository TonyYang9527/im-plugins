import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import './style.scss';
import { observer } from "mobx-react";

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
  buttons: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
};


export default observer(QuickButtons);