import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';
import Singature from '../singature';
import Avatar from '../avatar';
import TextMessage from './text';
import { createTextMessage, MessageSender } from '../../../utils/message';
class Message extends Component {


    getComponentToRender = message => {
        const Component = message.get('component');
        return <Component message={message} />;
    };


    render() {
        return (
            <div className={`lc-message ${this.props.isClient ? 'client' : 'response'}`} >
                <Avatar isClient={this.props.isClient} />
                <div className="lc-message-bubble">
                    {


                    }
                </div>
            </div>
        )
    }
}
// Message.propTypes = {
//     text: PropTypes.string,
//     isClient: PropTypes.bool,
//     expand: PropTypes.bool,
//     onTap: PropTypes.func,
// };

// Message.defaultProps = {
//     isClient: true,
//     expand: true
// };

Message.propTypes = {
    messages: PropTypes.array,
};

export default Message;