import React, { Component } from "react";
import spinner from "../../assets/icon/tools/logo.svg";
import { observer } from "mobx-react";
import './style.scss';

class Login extends Component {

    onSubmit = e => {
        if (this.props.store.state.username !== "" && this.props.store.state.email !== "") {
            e.preventDefault();
            this.props.store.actions.login();
        }
    };
    handleNameChange = e => {
        this.props.store.actions.handleNameChange(e.target.value);
    };
    handleEmailChange = e => {
        this.props.store.actions.handleEmailChange(e.target.value);
    };

    render() {
        // if (this.state.isAuthenticated) {
        //     return (
        //         <Redirect
        //             to={{
        //                 pathname: "/chat",
        //                 state: { user: this.state.user }
        //             }}
        //         />
        //     );
        // }
        return (
            <div className="App">
                <h1>COMET CHAT</h1>
                <p>Create an account through your CometChat dashboard or login with one of our test users, superhero1, superhero2, etc.</p>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" value={this.props.store.state.username} onChange={this.handleNameChange} />
                    <input type="text" value={this.props.store.state.email} onChange={this.handleEmailChange} />

                    <span className="error">{this.props.store.state.errorMessage}</span>
                    {
                        this.props.store.state.isSubmitting ?
                            (<img src={spinner} alt="Spinner component" className="App-logo" />)
                            : (<input type="submit" disabled={this.props.store.actions.checkInputIsEmpty()} value="LOGIN" />)
                    }

                </form>
            </div>
        );
    }
}

export default observer(Login);