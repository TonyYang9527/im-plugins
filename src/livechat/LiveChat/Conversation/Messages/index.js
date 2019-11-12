import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react";
import { scrollToBottom } from '../../../utils/messages';
import Loader from './Loader';
import './styles.scss';

class Messages extends Component {

  componentDidMount() {
    scrollToBottom(this.$message);
  }

  componentDidUpdate() {
    scrollToBottom(this.$message);
  }

  $message = null

  getComponentToRender = message => {
    console.log("Messages ******** getComponentToRender  message ********", message)
    const ComponentToRender = message.get('component');
    if (message.get('type') === 'component') {
      return <ComponentToRender {...message.get('props')} />;
     }
    return <ComponentToRender message={message} />;
  };

  shouldRenderAvatar = (message, index) => {
    const previousMessage =  this.props.store.state.messages.get(index - 1);
    if (message.get('showAvatar') && previousMessage.get('showAvatar')) {
      this.props.store.hideAvatar(index);
    }
  }

  render() {
    const { profileAvatar, store} = this.props;
    const { msgLoader,messages } = store.state;
   // const { toggleMsgLoader } = store.actions;
    console.log("Messages <<<<<<<<<<<<<<messages >>>>>>>>>>>>>", messages)
    return (
      <div id="messages" className="rcw-messages-container" ref={msg => this.$message = msg}>
        {messages.map((message, index) =>
          <div className="rcw-message" key={index}>
            {profileAvatar &&
              message.get('showAvatar') &&
              <img src={profileAvatar} className="rcw-avatar" alt="profile" />
            }
            {this.getComponentToRender(message)}
          </div>
        )
        }
        <Loader typing={msgLoader} />
      </div>
    );
  }
}

Messages.propTypes = {
  profileAvatar: PropTypes.string
};

export default observer(Messages);

