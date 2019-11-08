import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react";
import WidgetLayout from './layout';

class LiveChat extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.fullScreenMode) {
            this.props.store.toggleChat()
        }
    }

    toggleConversation = () => {
        this.props.store.toggleChat()
    }

    handleMessageSubmit = (event) => {
        event.preventDefault();
        const userInput = event.target.message.value;
        if (userInput.trim()) {
            this.props.store.addUserMessage(userInput)
            this.props.handleNewUserMessage(userInput);
        }
        event.target.message.value = '';
    }

    handleQuickButtonClicked = (event, value) => {
        event.preventDefault();

        if (this.props.handleQuickButtonClicked) {
            this.props.handleQuickButtonClicked(value);
        }
    }

    render() {
        return (
            <WidgetLayout 
                onToggleConversation={this.toggleConversation}
                onSendMessage={this.handleMessageSubmit}
                onQuickButtonClicked={this.handleQuickButtonClicked}
                title={this.props.title}
                titleAvatar={this.props.titleAvatar}
                subtitle={this.props.subtitle}
                senderPlaceHolder={this.props.senderPlaceHolder}
                profileAvatar={this.props.profileAvatar}
                showCloseButton={this.props.showCloseButton}
                fullScreenMode={this.props.fullScreenMode}
                badge={this.props.badge}
                autofocus={this.props.autofocus}
                customLauncher={this.props.customLauncher} />
        );
    }
}

LiveChat.propTypes = {
    title: PropTypes.string,
    titleAvatar: PropTypes.string,
    subtitle: PropTypes.string,
    handleNewUserMessage: PropTypes.func.isRequired,
    handleQuickButtonClicked: PropTypes.func.isRequired,
    senderPlaceHolder: PropTypes.string,
    profileAvatar: PropTypes.string,
    showCloseButton: PropTypes.bool,
    fullScreenMode: PropTypes.bool,
    badge: PropTypes.number,
    autofocus: PropTypes.bool,
    customLauncher: PropTypes.func
};

export default observer(LiveChat);