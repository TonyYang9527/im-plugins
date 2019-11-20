import { observable, action } from 'mobx';
import { ConnectEnum } from '../chat/utils/connect';


let state = observable({
    name: "",
    email: "",
    isAuth: false,
    user: null,
    isSubmitting: false,
    errorMessage: "",
    showError: false,
    connectEnum: ConnectEnum.CONNECTING,
    launcherOpened: true,
});

const actions = {

    login: action(() => {
        if (state.name === "" || state.email === "") {
            state.launcherOpened=false
            state.errorMessage = 'Please enter a valid name or email'
            state.showError = true
           

    
        }else{
            state.isAuth = true
            state.connectEnum = ConnectEnum.SUCCEED
        }
        // toggleIsSubmitting();
        // login(state.username, state.email).then(user => {
        //     state.user = user
        //     state.isAuth = true
        //     state.connectEnum=ConnectEnum.SUCCEED,
        // }).catch(error => {
        //     state.errorMessage = "Please enter a valid username"
        //     toggleIsSubmitting();
        //     state.isConnect = false,
        //     state.connectEnum=ConnectEnum.FAILED,
        // });

       

    }),
    toggleIsSubmitting: action(() => {
        state.isSubmitting = !state.isSubmitting
    }),

    handleNameChange: action((value) => {
        state.name = value
    }),
    handleEmailChange: action((value) => {
        state.email = value
    }),

    checkInputIsEmpty: action(() => {
        return state.name === "" || state.email === "";
    }),

    onTouch: action(() => {
        state.launcherOpened = !state.launcherOpened;

    }),
};

export default { state, actions }; 