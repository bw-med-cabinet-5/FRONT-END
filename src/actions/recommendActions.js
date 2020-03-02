import { axiosWithAuth } from '../utils/axiosWithAuth';

export const ADD_RECOMMENDATION_REQUEST = 'ADD_RECOMMENDATION_REQUEST';
export const ADD_RECOMMENDATION_SUCCESS = 'ADD_RECOMMENDATION_SUCCESS';
export const ADD_RECOMMENDATION_FAILURE = 'ADD_RECOMMENDATION_FAILURE';

export const EDIT_RECOMMENDATION_REQUEST = 'EDIT_RECOMMENDATION_REQUEST';
export const EDIT_RECOMMENDATION_SUCCESS = 'EDIT_RECOMMENDATION_SUCCESS';
export const EDIT_RECOMMENDATION_FAILURE = 'EDIT_RECOMMENDATION_FAILURE';

export const DELETE_RECOMMENDATION_REQUEST = 'DELETE_RECOMMENDATION_REQUEST';
export const DELETE_RECOMMENDATION_SUCCESS = 'DELETE_RECOMMENDATION_SUCCESS';
export const DELETE_RECOMMENDATION_FAILURE = 'DELETE_RECOMMENDATION_FAILURE';

export const GET_RECOMMENDATION_REQUEST= 'GET_RECOMMENDATIONS_REQUEST';
export const GET_RECOMMENDATION_SUCCESS = 'GET_RECOMMENDATIONS_SUCCESS';
export const GET_RECOMMENDATION_FAILURE = 'GET_RECOMMENDATIONS_FAILURE';

export const addRecommendation = (recommendation) => dispatch => {
    dispatch( { type: ADD_RECOMMENDATION_REQUEST});
    console.log(recommendation);

//TODO REPLACE ENTRY POINT DATA
    axiosWithAuth().post(`https://4000/api/${entry_point}`, recommendation)
    .then(res => {
        console.log(res);
        dispatch({type: ADD_RECOMMENDATION_SUCCESS, payload: res.data.entry_point})
    })
    .catch(err => {
        console.log('This is an error in add recommendation', err);
        dispatch({type: ADD_RECOMMENDATION_FAILURE, payload: err})
    })
    
};


export const editRecommendation = (recommendation) => dispatch => {
    dispatch( { type: EDIT_RECOMMENDATION_REQUEST});
    console.log(recommendation);
//TODO REPLACE ENTRY_POINT DATA AND OBJECT ID
    axiosWithAuth().put(`https://4000/api/${ENTRY_POINT}/${recommendation.recommendation_id}`, recommendation)
    .then(res => {
        console.log(res);
//TODO ADD RES.DATA.ENTRY_POINT / NAME OF RES LIST
        dispatch({type: EDIT_RECOMMENDATION_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('This is an error in edit recommendation: ', err);
        dispatch({type: EDIT_RECOMMENDATION_FAILURE, payload: err})
    });
};

export const deleteRecommendation = (recommendation) => dispatch => {
    dispatch( { type: DELETE_RECOMMENDATION_REQUEST});
    //console.log('In deleteRecommendation in actions');
//TODO REPLACE ENTRY_POINT DATA AND OBJECT ID
    axiosWithAuth().delete(`https://4000/api/${ENTRY_POINT}/${recommendation.recommendation_id}`)
    .then(res => {
        console.log(res)
//TODO ADD RES.DATA.ENTRY_POINT / NAME OF RES LIST
        dispatch({type: DELETE_RECOMMENDATION_SUCCESS, payload: res.data.ENTRY_POINT})
    })
    .catch(err => {
        console.log('delete action error', err)
        dispatch({type: DELETE_RECOMMENDATION_FAILURE, payload: err.message})
    })
};

export const getRecommendations = (searchParams) => dispatch => {
   
    dispatch( { type: GET_RECOMMENDATION_REQUEST});
    //console.log('In getRecommendations in actions');
    //console.log('With searchParams: ', searchParams);
    axiosWithAuth()
    .get("https://4000/api/recomendations/search", {
        params: searchParams,
        })
        .then(res => {
            console.log(res);
//TODO ADD RES.DATA.ENTRY_POINT / NAME OF RES LIST
            dispatch({type: GET_RECOMMENDATION_SUCCESS, payload: res.data.ENTRY_POINT})
        })
        .catch(err => {
            //console.log('get recommendations error', err);
            dispatch({type: GET_RECOMMENDATION_FAILURE, payload: err.message})
        })
}