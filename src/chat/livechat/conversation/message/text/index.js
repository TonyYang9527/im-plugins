import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import Singature from '../../singature';
import './style.scss';


class TextMessage extends Component {
    render() {
        return (
            <div>
                <div className={`lc-message-box ${this.props.isClient ? 'client' : 'response'}`}>
                    <div className={`lc-message-column ${this.props.isClient ? 'client' : 'response'}`}>
                        <Singature name={this.props.name} date={this.props.date} isClient={this.props.isClient} show={this.props.showSingature} />
                        <div className={`lc-message-bubble ${this.props.isClient ? 'client' : 'response'}`}>
                            <div className="lc-message-text">
                                <span>{this.props.text}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
TextMessage.propTypes = {
    isClient: PropTypes.bool,
    name: PropTypes.string,
    date: PropTypes.string,
    showSingature: PropTypes.bool,
    text: PropTypes.string,


    onTap: PropTypes.func,
};

TextMessage.defaultProps = {
    isClient: true,
    showSingature: true
};

export default TextMessage;