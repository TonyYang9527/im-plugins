import React, { Component } from 'react';
import Container from './container';
import ConnectStatus from './status';
import Separator from './separator';
import Login from '../../login';
import Flexible from './flexible';


class Content extends Component {
    render() {
        return (
            <Container>
                <ConnectStatus isConnect={false} status={"Reconnecting"} />
                <Flexible>
                    <Login />
                </Flexible>

                <Separator />
            </Container>
        )
    }
}
export default Content;