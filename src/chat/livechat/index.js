import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import ChatContainer from './container';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Status from './status';
import Login from '../login';
import Conversation from './conversation';
import { ConnectEnum } from '../utils/connect';
import './style.scss';


class Chat extends Component {

    render() {
        if (this.props.launcherOpened) {
            return null;
        }

        return (
            <ChatContainer>
                <div className='lc-widget'>
                    <Header title={this.props.title} close={this.props.close} />
                    <Status showConnect={this.props.showConnect} connect={this.props.connect} />
                    <Content >
                        <Login
                            isAuth={this.props.isAuth}
                            name={this.props.name}
                            email={this.props.email}
                            onNameChanged={this.props.onNameChanged}
                            onEmailChanged={this.props.onEmailChanged}
                            showError={this.props.showError}
                            errorMessage={this.props.errorMessage}
                            disabledSubmit={this.props.disabledSubmit}
                            onSubmit={this.props.onSubmit}
                        />
                        <Conversation isAuth={this.props.isAuth} />
                    </Content>
                    <Footer />
                </div>
            </ChatContainer>
        )
    }
}


Chat.propTypes = {
    isAuth: PropTypes.bool,
    title: PropTypes.string,
    close: PropTypes.func,
    showConnect: PropTypes.bool,
    connect: PropTypes.any,
    onTouch: PropTypes.func,
    launcherOpened: PropTypes.bool,
    name: PropTypes.string,
    email: PropTypes.string,
    onNameChanged: PropTypes.func,
    onEmailChanged: PropTypes.func,
    onSubmit: PropTypes.func,
    disabledSubmit: PropTypes.bool,
    showError: PropTypes.bool,
    errorMessage: PropTypes.string,
};

// Chat.defaultProps = {
//     isAuth: false,
//     title: 'Welcome',
//     connect: ConnectEnum.SUCCEED,
// };
export default observer(Chat);