import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import openLauncher from '../../assets/icon/tools/launcher_button.svg';
import './style.scss';

class Launcher extends Component {

    render() {
        if (!this.props.launcherOpened) {
            return null;
        }
        return (
            <div className='lc-launcher'>
                <div className='lc-container '>
                    <div className='lc-icon-container'>
                        <div className='lc-icon'>
                            <button type="button" className='rcw-launcher-button' onClick={this.props.onTouch}>
                                <img src={openLauncher} className="rcw-open-launcher" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Launcher.propTypes = {
    onTouch: PropTypes.func,
    launcherOpened: PropTypes.bool,
};
export default observer(Launcher);