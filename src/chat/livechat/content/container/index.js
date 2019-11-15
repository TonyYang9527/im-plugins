import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class Container extends Component {
    render() {
        return (<div className='lc-content-container'>
            <div className='lc-content'>
                {this.props.children}
            </div>
        </div>)
    }
}
Container.propTypes = {
    children: PropTypes.element.isRequired
};
export default Container;