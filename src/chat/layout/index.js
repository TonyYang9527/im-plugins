import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Global extends Component {
    render() {
        return <div className='lc-global'>{this.props.children}</div>
    }
}
Global.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ])
};
export default Global;