import {
    
    ADD_RECOMMENDATION_REQUEST,
    ADD_RECOMMENDATION_SUCCESS,
    ADD_RECOMMENDATION_FAILURE,

    EDIT_RECOMMENDATION_REQUEST,
    EDIT_RECOMMENDATION_SUCCESS,
    EDIT_RECOMMENDATION_FAILURE,

    DELETE_RECOMMENDATION_REQUEST,
    DELETE_RECOMMENDATION_SUCCESS,
    DELETE_RECOMMENDATION_FAILURE,

    GET_RECOMMENDATION_REQUEST,
    GET_RECOMMENDATION_SUCCESS,
    GET_RECOMMENDATION_FAILURE 
} from '../actions/recommendActions'

const initialState = {
    savedList:[],
    recommendations:null,
    isAddingRecommendation: false,
    isEditingRecommendation:false,
    isAddingRecommendation: false,
    isDeletingRecommendation: false,
    isGettingRecommendation: false,
    error:''
}

const recommendReducer = (state = initialState, action) => {
    switch(action.type) {
//ADD RECOMMEND START
        case ADD_RECOMMENDATION_REQUEST:
            return {
                ...state,
                isAddingRecommendation:true
            }
            case ADD_RECOMMENDATION_SUCCESS:
                return{
                    ...state,
                    isAddingRecommendation:false,
                    savedList: action.payload,
                    error: ''
                }
            case ADD_RECOMMENDATION_FAILURE:
                return{
                    ...state,
                    isAddingRecommendation:false,
                    error:'Recommendation was not saved'
                }
//EDIT RECOMMEND START
            case EDIT_RECOMMENDATION_REQUEST:
                return{
                    ...state,
                    isEditingRecommendation:true
                }
            case EDIT_RECOMMENDATION_SUCCESS:
                return{
                    ...state,
                    isEditingRecommendation:false,
                    savedList:action.payload,
                    error: ''
                }
            case EDIT_RECOMMENDATION_FAILURE:
                return {
                    ...state,
                    isEditingRecommendation:false,
                    error: action.payload
                }
//DELETE RECOMMEND START
            case DELETE_RECOMMENDATION_REQUEST: 
                return {
                    ...state,
                    isDeletingRecommendation:true
                }
            case DELETE_RECOMMENDATION_SUCCESS:
                return {
                    ...state,
                    isDeletingRecommendation:false,
                    savedList:action.payload,
                    error:''
                }
            case DELETE_RECOMMENDATION_FAILURE:
                return {
                    isDeletingRecommendation:false,
                    error:action.payload
                }
//GET RECOMMEND START
            case GET_RECOMMENDATION_REQUEST:
                return {
                    ...state,
                    isGettingRecommendation:true,
                    error:''
                }
            case GET_RECOMMENDATION_SUCCESS:
                return {
                    ...state,
                    Recommendation:action.payload,
                    error: '',
                    isGettingRecommendation:false
                }
            case GET_RECOMMENDATION_FAILURE:
                return{
                    ...state,
                    error:action.payload,
                    isGettingRecommendation:false
                }

                default:
                return state
    }
}

export default recommendReducer