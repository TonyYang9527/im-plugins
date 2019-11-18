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
                    <img src={this.props.avatar}  className={`avatar-img  ${this.props.isClient ? 'client' : 'response'}`}/>
                </div>
            </div>
        )
    }
}

Avatar.propTypes = {
    avatar: PropTypes.string,
    isClient: PropTypes.bool,
};
Avatar.defaultProps = {
    avatar: user,
    isClient :true,
  };

export default Avatar;