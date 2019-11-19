import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class Singature extends Component {
    render() {
        if (!this.props.expand) {
            return null;
        }
        return (
            <div>
                <div className={`singature ${this.props.isClient ? 'client' : 'response'}`} >
                    <span className="singature-name">
                        {this.props.name}
                    </span>
                    <span className={`singature-date ${this.props.isClient ? 'client' : 'response'}`}>
                        {this.props.date}
                    </span>
                </div>
            </div>
        )
    }
}

Singature.propTypes = {
    isClient: PropTypes.bool,
    expand: PropTypes.bool,
    name: PropTypes.string,
    date: PropTypes.string
};

Singature.defaultProps = {
    isClient: true,
    expand: true,
};
export default Singature;