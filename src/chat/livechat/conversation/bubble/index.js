import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import Avatar from '../avatar';
import './style.scss';


class Bubble extends Component {

    render() {
        return (
            <div className={`lc-message ${this.props.sender}`} >
                <Avatar sender={this.props.sender} />
                <div className="lc-message-bubble">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Bubble.propTypes = {
    sender: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ])
};

export default Bubble;