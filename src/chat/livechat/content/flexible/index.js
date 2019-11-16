import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class Flexible extends Component {
    render() {
        return (
            <div className='lc-flexible' >
                {this.props.children}
            </div>
        )
    }
}

Flexible.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ])
};
export default Flexible;