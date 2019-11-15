import { observable, action} from 'mobx';

let state = observable({
    username: "",
    email: "",
    isAuthenticated: false,
    user: null,
    isSubmitting: false,
    errorMessage: "" ,
});

const actions = {
    login: action(() => {
        // toggleIsSubmitting();
        // login(state.username, state.email).then(user => {
        //     state.user = user
        //     state.isAuthenticated = true
        // }).catch(error => {
        //     state.errorMessage = "Please enter a valid username"
        //     toggleIsSubmitting();
        // });
       state.isAuthenticated = true
    }),
    toggleIsSubmitting: action(() => {
        state.isSubmitting = !state.isSubmitting
    }),

    handleNameChange: action((value) => {
        state.username=value
    }),
    handleEmailChange: action((value) => {
        state.email=value
    }),

    checkInputIsEmpty : action(()=>{
        return state.username === "" || state.email === "" ;
    }),

};

export default { state, actions }; 