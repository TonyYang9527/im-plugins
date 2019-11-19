import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';


class ChatContainer extends Component {
    render() {
        return (<div className='lc-container-livechat'>
            {this.props.children}
        </div>)
    }
}
ChatContainer.propTypes = {
    children: PropTypes.element.isRequired
};
export default ChatContainer;