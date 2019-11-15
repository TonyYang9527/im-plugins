import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class Global extends Component {
    render() {
        return <div className='lc-global'>{this.props.children}</div>
    }
}
Global.propTypes = {
    children: PropTypes.element.isRequired
};
export default Global;