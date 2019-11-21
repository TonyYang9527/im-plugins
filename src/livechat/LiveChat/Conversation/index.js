import React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from './Header';
import Messages from './Messages';
import Sender from './Sender';
import QuickButtons from './QuickButtons';
import Login from '../../Login';
import './style.scss';
import { observer } from "mobx-react";
import LoginStore from '../../store/LoginStore';

class Conversation extends Component {

    render() {
        return (
            <div className="rcw-conversation-container">
                <Header
                    store={this.props.store}
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    toggleChat={this.props.toggleChat}
                    showCloseButton={this.props.showCloseButton}
                    titleAvatar={this.props.titleAvatar}
                />
                {!this.props.isAuth ?
                    (<Login store={LoginStore} />) :
                    (
                        <div>
                            <Messages 
                            store={this.props.store} 
                            profileAvatar={this.props.profileAvatar} />
                            <QuickButtons store={this.props.store} onQuickButtonClicked={this.props.onQuickButtonClicked} />
                            <Sender store={this.props.store} sendMessage={this.props.sendMessage}
                                placeholder={this.props.senderPlaceHolder}
                                disabledInput={this.props.disabledInput}
                                autofocus={this.props.autofocus} />
                        </div>
                    )

                }

            </div>
        );
    }
}

Conversation.propTypes = {
    title: PropTypes.string,
    titleAvatar: PropTypes.string,
    subtitle: PropTypes.string,
    sendMessage: PropTypes.func,
    senderPlaceHolder: PropTypes.string,
    profileAvatar: PropTypes.string,
    toggleChat: PropTypes.func,
    showCloseButton: PropTypes.bool,
    disabledInput: PropTypes.bool,
    autofocus: PropTypes.bool
};

export default observer(Conversation);