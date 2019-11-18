import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class Conversation extends Component {
    render() {
        return (
        <div className='lc-conversation-container'>
            {this.props.children}
        </div>)
    }
}
Conversation.propTypes = {
    children:  PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
      ])
};
export default Conversation;