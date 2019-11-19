import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import { ConnectEnum } from '../../utils/connect';
import './style.scss';

class Status extends Component {

    render() {
        if (!this.props.showConnect) {
            return null;
        }
        return (
            <div className={`lc-status ${ConnectEnum.properties[this.props.connect].status}`} >
                {ConnectEnum.properties[this.props.connect].desc}
            </div>
        )
    }
}

Status.propTypes = {
    connect: PropTypes.any.isRequired,
    showConnect: PropTypes.bool.isRequired
};

Status.defaultProps = {
    showConnect: true,
    connect: ConnectEnum.CONNECTING,
};

export default observer(Status);