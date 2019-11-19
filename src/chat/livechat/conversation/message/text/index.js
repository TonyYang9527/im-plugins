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
                <div className={`lc-message-box ${this.props.message.get('sender')}`}>
                    <div className={`lc-message-column ${this.props.message.get('sender')}`}>
                        <Singature
                            name={this.props.message.get('name')}
                            date={this.props.message.get('date')}
                            sender={this.props.message.get('sender')}
                            expand={this.props.message.get('expand')} />

                         <div className={`lc-message-bubble ${this.props.message.get('sender')}`}>
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
    message: PropTypes.object
};

export default TextMessage;