import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import Global from './layout';
import Launcher from './launcher';
import Chat from './livechat';
import { ConnectEnum } from './utils/connect';


class ChatApp extends Component {
    render() {
        console.log("ChatApp  render")
        return (
            <Global>
                <Launcher
                    launcherOpened={this.props.launcherOpened}
                    onTouch={this.props.onTouch} />

                <Chat
                    isAuth={this.props.isAuth}
                    launcherOpened={this.props.launcherOpened}
                    title={this.props.title}
                    close={this.props.close}
                    connect={this.props.connect}
                    showConnect={this.props.showConnect}
                    name={this.props.name}
                    email={this.props.email}
                    onNameChange={this.props.onNameChange}
                    onEmailChange={this.props.onEmailChange}
                    onSubmit={this.props.onSubmit}
                    showError={this.props.showError}
                    errorMessage={this.props.errorMessage}
                />
            </Global>

        )
    }
}

ChatApp.propTypes = {
    launcherOpened: PropTypes.bool,
    onTouch: PropTypes.func,

    isAuth: PropTypes.bool,
    title: PropTypes.string,
    close: PropTypes.func,
    showConnect: PropTypes.bool,
    connect: PropTypes.any,

    name: PropTypes.string,
    email: PropTypes.string,
    onNameChange: PropTypes.func,
    onEmailChange: PropTypes.func,
    onSubmit: PropTypes.func,
    showError: PropTypes.bool,
    errorMessage: PropTypes.string,
};

ChatApp.defaultProps = {
    title: 'Welcome',
    connect: ConnectEnum.SUCCEED,
};

export default observer(ChatApp);