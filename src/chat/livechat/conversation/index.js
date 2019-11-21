import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import Messages from './message';
import './style.scss';

class Conversation extends Component {
    render() {
        if (!this.props.isAuth) {
            return null;
        }
        return (<Messages messages={this.props.messages} />)
    }
}
Conversation.propTypes = {
    isAuth: PropTypes.bool,
    messages: PropTypes.array,
};

export default observer(Conversation);