import {  
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from '../actions/userActions'
    

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    isLoggedIn: false,
    isRegistered: false,
    isLoggingIn: false,
    isLoggingOut: false

}
    
const userReducer =  (state = initialState, action) => {
    switch( action.type) {
        case    REGISTER_REQUEST:
            return { 
                ...state,
                isRegistered: true
            };
//REGISTER START
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isRegistered: false,
                first_name: action.payload.user.first_name, 
                last_name: action.payload.user.last_name, 
                email: action.payload.user.email,
                error: ''
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                err: 'REGISTER FAILUR',
                isRegistered: false,
            };
//LOGIN START
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                first_name: action.payload.user.first_name, 
                last_name: action.payload.user.last_name, 
                email: action.payload.user.email,
                error: ''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
                error: 'Login User Failure'
            };
//LOGOUT START
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                first_name:'',
                last_name:'',
                email: ''
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: true
            }
            default:
                return state
        }
    }

    export default userReducer