import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class Container extends Component {
    render() {
        return (<div className='lc-content-container'>
            {this.props.children}
        </div>)
    }
}
Container.propTypes = {
    children:  PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
      ])
};
export default Container;