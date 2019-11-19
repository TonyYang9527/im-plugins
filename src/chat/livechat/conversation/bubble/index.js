import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import Avatar from '../avatar';
import './style.scss';


class Bubble extends Component {
    
    render() {
        return (
            <div className={`lc-message ${this.props.isClient ? 'client' : 'response'}`} >
                <Avatar isClient={this.props.isClient} />
                <div className="lc-message-bubble">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Bubble.propTypes = {
    isClient: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ])
};

export default Bubble;