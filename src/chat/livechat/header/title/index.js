import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class Title extends Component {
    render() {
        return (<div className='lc-header-title'>
            {this.props.title}
        </div>)
    }
}
Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default observer(Title);