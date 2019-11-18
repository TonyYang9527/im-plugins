import React, { Component } from 'react';
import Container from './container';
import Separator from './separator';
import Login from '../../login';
import Flexible from './flexible';
import Senders from '../senders';

class Content extends Component {
    render() {
        return (
            <Container>

                <Login />
                {/* <Separator />
                <Senders /> */}
            </Container>
        )
    }
}
export default Content;