import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import Singature from '../../singature';
import './style.scss';
import { MessagePropTypes } from '../../../../utils/message';

class TextMessage extends Component {

    render() {
        return (
            <div>
                <div className={`lc-message-box ${this.props.message.get('isClient') ? 'client' : 'response'}`}>
                    <div className={`lc-message-column ${this.props.message.get('isClient') ? 'client' : 'response'}`}>
                        <Singature
                            name={this.props.message.get('name')}
                            date={this.props.message.get('date')}
                            isClient={this.props.message.get('isClient')}
                            expand={this.props.message.get('expand')} />
                        <div className={`lc-message-bubble ${this.props.message.get('isClient') ? 'client' : 'response'}`}>
                            <div className="lc-message-text">
                                <span>{this.props.message.get('text')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TextMessage.propTypes = {
    message: MessagePropTypes.text
};

export default TextMessage;