import React, { Component } from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import Container from './container';
import ConnectStatus from './status';


class Content extends Component {
    render() {
        return (
            <Container>
                <ConnectStatus isConnect={false} connectStatus="Reconnecting" />
            </Container>
        )
    }
}
export default Content;