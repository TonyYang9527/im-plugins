import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import Global from './layout';
import Launcher from './launcher';
import Chat from './livechat';
import { ConnectEnum } from './utils/connect';


class ChatApp extends Component {

    render() {
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

            
                    name={this.props.name}
                    email={this.props.email}
                    onNameChanged={this.props.onNameChanged}
                    onEmailChanged={this.props.onEmailChanged}
                    showError={this.props.showError}
                    errorMessage={this.props.errorMessage}
                    disabledSubmit={this.props.disabledSubmit}
                    onSubmit={this.props.onSubmit}
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
    onNameChanged: PropTypes.func,
    onEmailChanged: PropTypes.func,
    onSubmit: PropTypes.func,
    disabledSubmit: PropTypes.bool,
    showError: PropTypes.bool,
};

ChatApp.defaultProps = {
    title: 'Welcome',
    connect: ConnectEnum.SUCCEED,
};

export default observer(ChatApp);