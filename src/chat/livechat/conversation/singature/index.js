import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class Singature extends Component {
    render() {
        return (
            <div>
                <div className="singature-client">
                    <span className="singature-client-name">{this.props.name}</span>
                    <span className="singature-client-date">{this.props.date}</span>
                </div>
            </div>
        )
    }
}

Singature.propTypes = {
    sender: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string
};
export default Singature;