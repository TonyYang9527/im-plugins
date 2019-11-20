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
                            onNameChange={this.props.onNameChange}
                            onEmailChange={this.props.onEmailChange}
                            showError={this.props.showError}
                            errorMessage={this.props.errorMessage}
                            onSubmit={this.props.onSubmit}
                        />
                        <Conversation
                            isAuth={this.props.isAuth}
                            messages={this.props.messages}  />
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
    onNameChange: PropTypes.func,
    onEmailChange: PropTypes.func,
    onSubmit: PropTypes.func,
    showError: PropTypes.bool,
    errorMessage: PropTypes.string,

    messages: PropTypes.array,
};

export default observer(Chat);