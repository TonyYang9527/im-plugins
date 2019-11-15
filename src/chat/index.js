import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Global from './layout';
import Launcher from './launcher';

class LiveChat extends Component {
    render() {
        return (
            <Global>
                <div>
                    <Launcher toggle={(e) => {}} />
                </div>
            </Global>
        )
    }
}

export default LiveChat;