import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Content extends Component {
    render() {
        return (
            <div className='lc-content-container'>
                {this.props.children}
            </div>)
    }
}
Content.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ])
};
export default Content;