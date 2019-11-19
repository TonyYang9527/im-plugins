import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import './style.scss';
import user from '../../../../assets/icon/tools/user.svg';


class Avatar extends Component {
    render() {
        return (
            <div className="avatar-container">
                <div className="avatar">
                    <img src={this.props.avatar}  className={`avatar-img  ${this.props.sender}`} alt=''/>
                </div>
            </div>
        )
    }
}

Avatar.propTypes = {
    avatar: PropTypes.string,
    sender: PropTypes.string,
};
Avatar.defaultProps = {
    avatar: user,
  };

export default observer(Avatar);