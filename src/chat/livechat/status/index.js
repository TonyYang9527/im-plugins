import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Status extends Component {
    render() {
        if (this.props.isConnect) {
            return null;
        }
        return (
            <div className="lc-status">
                {this.props.status}
            </div>
        )
    }
}

Status.propTypes = {
    status: PropTypes.string,
    isConnect: PropTypes.bool.isRequired
};

export default Status;