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
                <Title title="Chat with us!" />
                <Action toggleChat={(e) => { }} />
               
            </div>
        )
    }
}
export default Header;