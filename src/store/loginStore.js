import { observable, action } from 'mobx';
import { ConnectEnum } from '../chat/utils/connect';


let state = observable({
    username: "",
    email: "",
    isAuthenticated: false,
    user: null,
    isSubmitting: false,
    errorMessage: "",
    isConnect: false,
    connectEnum: ConnectEnum.CONNECTING,
});

const actions = {
    login: action(() => {
        // toggleIsSubmitting();
        // login(state.username, state.email).then(user => {
        //     state.user = user
        //     state.isAuthenticated = true
        //     state.connectEnum=ConnectEnum.SUCCEED,
        // }).catch(error => {
        //     state.errorMessage = "Please enter a valid username"
        //     toggleIsSubmitting();
        //     state.isConnect = false,
        //     state.connectEnum=ConnectEnum.FAILED,
        // });
        state.isAuthenticated = true
        state.isConnect = true,
        state.connectEnum=ConnectEnum.SUCCEED
    }),
    toggleIsSubmitting: action(() => {
        state.isSubmitting = !state.isSubmitting
    }),

    handleNameChange: action((value) => {
        state.username = value
    }),
    handleEmailChange: action((value) => {
        state.email = value
    }),

    checkInputIsEmpty: action(() => {
        return state.username === "" || state.email === "";
    }),

};

export default { state, actions }; 