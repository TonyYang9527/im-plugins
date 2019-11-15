import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';


class Footer extends Component {
    render() {
        return (
            <div className='lc-footer'>
                <div className='lc-footer-container'>
                  <span>Powered by </span>
                  <strong>Marine </strong>
                  <strong className='lc-footer-color'> Online</strong>
                </div>
            </div>
        )
    }
}
export default Footer;