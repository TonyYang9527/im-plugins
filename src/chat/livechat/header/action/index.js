import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';
import close from '../../../../assets/icon/tools/minus.svg';

class Action extends Component {
    render() {
        return (<div className='lc-action'>
            <button className="lc-action-button" onClick={this.props.toggleChat} >
                <img src={close} className="lc-action-icon" alt="" />
            </button>
        </div>)
    }
}
Action.propTypes = {
    toggleChat: PropTypes.func.isRequired,
};

export default observer(Action);