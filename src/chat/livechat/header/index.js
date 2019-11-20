import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';
import Action from './action';
import Title from './title';


class Header extends Component {
    render() {
        return (
            <div className='lc-header'>
                <Title title={this.props.title} />
                <Action close={this.props.close} />
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string,
    close: PropTypes.func.isRequired,
};

Header.defaultProps = {
    title: ' Chat with us! ',
    close: () => { }
};
export default observer(Header);