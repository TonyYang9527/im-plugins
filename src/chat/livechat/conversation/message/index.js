import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import Bubble from '../bubble';
import './style.scss';
import {mergeMessage} from '../../../utils/message';
class Messages extends Component {


    ComponentRender = (message, index) => {
        const Component = message.get('component');
        const sender = message.get('sender');
        return (
            <Bubble sender={sender} key={`ble-${index}`}>
                <Component message={message} key={`msg-${index}`} />
            </Bubble>
        )
    };


    render() {
          console.log(mergeMessage(this.props.messages))
        return (
            <div className='lc-conversation-container'>
                {this.props.messages.map((message, index) => this.ComponentRender(message, index))}
            </div>)
    }
}

Messages.propTypes = {
    messages: PropTypes.array,
};

export default observer(Messages);