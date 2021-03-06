import React, { Component } from 'react';
import { observer } from "mobx-react";
import ChatApp from './ChatApp';


class LiveChat extends Component {
    
    render() {
        return (
            <ChatApp
                launcherOpened={this.props.authStore.state.launcherOpened}
                onTouch={this.props.authStore.actions.onTouch}
                isAuth={this.props.authStore.state.isAuth}
                close={this.props.authStore.actions.onTouch}
                name={this.props.authStore.state.name}
                email={this.props.authStore.state.email}
                connect={this.props.authStore.state.connect}
                showConnect={this.props.authStore.state.showConnect}
                errorMessage={this.props.authStore.state.errorMessage}
                showError={this.props.authStore.state.showError}
                onNameChange={this.props.authStore.actions.handleNameChange}
                onEmailChange={this.props.authStore.actions.handleEmailChange}
                onSubmit={this.props.authStore.actions.login}
                messages={this.props.chatStore.state.messages.slice()}
            />
        )
    }
}


export default observer(LiveChat);