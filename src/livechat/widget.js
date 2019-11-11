import React from 'react';
import PropTypes from 'prop-types';
import LiveChat from './LiveChat';

const Widget = props =>
    <LiveChat
        store={props.store}
        title={props.title}
        titleAvatar={props.titleAvatar}
        subtitle={props.subtitle}
        handleNewUserMessage={props.handleNewUserMessage}
        handleQuickButtonClicked={props.handleQuickButtonClicked}
        senderPlaceHolder={props.senderPlaceHolder}
        profileAvatar={props.profileAvatar}
        showCloseButton={props.showCloseButton}
        fullScreenMode={props.fullScreenMode}
        badge={props.badge}
        autofocus={props.autofocus}
        customLauncher={props.launcher} />;

Widget.propTypes = {
    title: PropTypes.string,
    titleAvatar: PropTypes.string,
    subtitle: PropTypes.string,
    handleNewUserMessage: PropTypes.func.isRequired,
    handleQuickButtonClicked: PropTypes.func,
    senderPlaceHolder: PropTypes.string,
    profileAvatar: PropTypes.string,
    showCloseButton: PropTypes.bool,
    fullScreenMode: PropTypes.bool,
    badge: PropTypes.number,
    autofocus: PropTypes.bool,
    launcher: PropTypes.func
};

Widget.defaultProps = {
    title: 'Welcome',
    subtitle: 'This is your chat subtitle',
    senderPlaceHolder: 'Type a message...',
    showCloseButton: true,
    fullScreenMode: false,
    badge: 0,
    autofocus: true
};

export default Widget;


