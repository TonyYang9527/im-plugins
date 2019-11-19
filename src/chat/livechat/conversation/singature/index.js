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
                <div className={`singature ${this.props.sender}`} >
                    <span className="singature-name">
                        {this.props.name}
                    </span>
                    <span className={`singature-date ${this.props.sender}`}>
                         {this.props.date}
                    </span>
                </div>
            </div>
        )
    }
}

Singature.propTypes = {
    sender: PropTypes.string,
    expand: PropTypes.bool,
    name: PropTypes.string,
    date: PropTypes.string
};

Singature.defaultProps = {
    expand: true,
};
export default  observer(Singature);