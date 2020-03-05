import {  
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    
    ADD_STRAIN_REQUEST,
    ADD_STRAIN_SUCCESS,
    ADD_STRAIN_FAILURE,
    
    GET_STRAIN_REQUEST,
    GET_STRAIN_SUCCESS,
    GET_STRAIN_FAILURE,

    DELETE_STRAIN_REQUEST,
    DELETE_STRAIN_SUCCESS,
    DELETE_STRAIN_FAILURE,

    EDIT_STRAIN_REQUEST,
    EDIT_STRAIN_SUCCESS,
    EDIT_STRAIN_FAILURE

} from '../actions/userActions'
import { act } from 'react-dom/test-utils';
const initialState = {
            first_name:'',
            last_name:'',
            email: '',
            cabinet:[],
            strain_id: null,
            strain_name:'',
            strain_type:'',
            strain_rating:null,
            strain_description: '',
            strain_effects:'',
            strain_flavors:'',
            isLoggedIn: false,
            isRegistered: false,
            isLoggingOut: false,
            isLoggingIn:false,
            isLoggedOut:false,
            isLoggingOut:false,
            isAddingStrain: false,
            isDeletingStrain:false,
            isGettingStrain:false,
            isEditingStrain:false,
            strain: null,
            isGettingStrain: false,
    }
        
    


    
const userReducer =  (state = initialState, action) => {
    console.log(state, action)
    switch(action.type) {
        case    REGISTER_REQUEST:
            return { 
                ...state,
                isRegistered: false,
                error:'Reg req'
            };
//REGISTER START

        case REGISTER_SUCCESS:
            // console.log(state, action)
            return {
                ...state,
                isLoggedIn: false,
                isRegistered: true,
                user_id: action.payload.user.user_id,
                first_name: action.payload.user.first_name, 
                last_name: action.payload.user.last_name, 
                email: action.payload.user.email,
                error: 'res success'
            };
    
        case REGISTER_FAILURE:
            // console.log(state, action)
            return {
                ...state,
                isRegistered: false,
                err: 'REGISTER FAILURE'
                
            };
//LOGIN START

        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true
            };
       
        case LOGIN_SUCCESS:
            console.log(state, action)
            return {
                ...state,
                isLoggedIn: true,
                isRegistered:true,
                isLoggingIn:false,
                first_name: action.payload.user.first_name, 
                last_name: action.payload.user.last_name, 
                email: action.payload.user.email,
                strain_id: action.payload.strain_id,
               strain_name:action.payload.strain_name,
               strain_type: action.payload.strain_type,
               strain_rating:action.payload.strain_rating,
               strain_description:action.payload.strain_description,
               strain_effects:action.payload.strain_effects,
               strain_flavors:action.payload.strain_flavors,
                error: '',
              
            };
          
        case LOGIN_FAILURE:
            // console.log(state, action)
            return {
                ...state,
                isLoggedIn: false,
                error: 'Login User Failure'
            };
//LOGOUT START

        case LOGOUT_REQUEST:
            console.log(state, action)
            return {
                ...state,
                isLoggingOut: true,
            };
      
        case LOGOUT_SUCCESS:
            console.log(state, action)
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                user_id:null,
                first_name:'',
                last_name:'',
                email: '',
                cabinet:[],
                strain_id: null,
                strain_name:'',
                strain_type:'',
                strain_rating:null,
                strain_description: '',
                strain_effects:'',
                strain_flavors:'',
                error:'',
                isLoggedOut: false
            };
//  LOGOUT
        case LOGOUT_FAILURE:
            console.log(state, action)
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn:false,
                isLoggedIn: false,
                error:'Logout Fail'
            };
            case ADD_STRAIN_REQUEST: 
            console.log(state, action)
                return{
                    ...state,
                  isAddingStrain:true
                };
// ADD STRAIN
             case ADD_STRAIN_SUCCESS: 
                console.log(state, action)
                    return {
                        ...state,
                        isAddingStrain:false,
                        cabinet:action.payload,
                        error:''
                    }
                case ADD_STRAIN_FAILURE:
                    console.log(state, action)
                    return {
                        ...state,
                        isAddingStrain:false,
                        error:'FAILURE TO ADD STRAIN'
                    }
//GET STRAIN
            case GET_STRAIN_REQUEST: 
            console.log(state, action)
                return{
                    ...state,
                  isGettingStrain:true,
                  error:''
                };
            case GET_STRAIN_SUCCESS: 
                console.log(state, action)
                    return {
                        ...state,
                     
                        strain:action.payload.action,
                        isGettingStrain:false,
                        error: ''
                    }
                case GET_STRAIN_FAILURE:
                    console.log(state, action)
                    return {
                        ...state,
                        error:action.payload,
                        isGettingStrain:false
                    }
//
                    case EDIT_STRAIN_REQUEST:
                        return{
                       ...state,
                       isEditingStrain: true,
                       error:''
                       }

                       case EDIT_STRAIN_SUCCESS:
                        return {
                       ...state,
                       isEditingStrain:false,
                       cabinet:action.payload,
                       error:'',
                        }
                       case EDIT_STRAIN_FAILURE:
                       return{
                       ...state,
                       isEditingStrain:false,
                       error: action.payload
                    }
                       case DELETE_STRAIN_REQUEST:
                       return {
                       ...state,
                       isDeletingStrain: true
                       }
                       case DELETE_STRAIN_SUCCESS:
                       return{
                       ...state,
                       isDeleteingStrain:false,
                       cabinet:action.payload,
                       error:''
                       }
                       case DELETE_STRAIN_FAILURE:
                       return{
                       ...state,
                       isDeleteingStrain:false,
                       error:action.payload
                       }
                default:
                return state
    }
        }
    export default userReducer

