
import axios from "axios";
import { axiosAuth } from "../utils/axiosAuth";


export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const ADD_STRAIN_REQUEST= 'ADD_STRAIN_REQUEST'
export const ADD_STRAIN_SUCCESS = 'ADD_STRAIN_SUCCESS'
export const ADD_STRAIN_FAILURE = 'ADD_STRAIN_FAILURE'

export const DELETE_STRAIN_REQUEST= 'DELETE_STRAIN_REQUEST'
export const DELETE_STRAIN_SUCCESS = 'DELETE_STRAIN_SUCCESS'
export const DELETE_STRAIN_FAILURE = 'DELETE_STRAIN_FAILURE'

export const GET_STRAIN_REQUEST= 'GET_STRAIN_REQUEST'
export const GET_STRAIN_SUCCESS = 'GET_STRAIN_SUCCESS'
export const GET_STRAIN_FAILURE = 'GET_STRAIN_FAILURE'

export const EDIT_STRAIN_REQUEST= 'GET_STRAIN_REQUEST'
export const EDIT_STRAIN_SUCCESS = 'GET_STRAIN_SUCCESS'
export const EDIT_STRAIN_FAILURE = 'GET_STRAIN_FAILURE'


//REGISTER USER START
export const registerUser = (newUser, history) => dispatch => {
  console.log(`action register`)
  dispatch({ type: REGISTER_REQUEST });
  axios
    .post("https://med-cabinet-production.herokuapp.com/api/users/register", newUser)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      localStorage.setItem('token', res.data.token)
      history.push("/user");
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload:err.data });
    });
};

//LOGIN USER START
export const loginUser = (user, history) => dispatch => {

  dispatch({ type: LOGIN_REQUEST });
  axios
    .post("https://med-cabinet-production.herokuapp.com/api/users/login", user)
    .then(res => {
      localStorage.setItem("token", res.data.user);
      localStorage.setItem('userID', res.data.user.user_id)

      console.log(res.data)
      dispatch({type:LOGIN_SUCCESS, payload: res.data})
      history.push('/users');
      // console.log(res.data.user.user_id)
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.res });
    });
};

//LOGOUT USER START
export const logoutUser = () => dispatch => {
  dispatch({ type: LOGOUT_REQUEST });
  localStorage.removeItem("token");
  const tokenCheck = localStorage.getItem("token");
  if (tokenCheck === null) {
    dispatch({ type: LOGOUT_SUCCESS });
  } else {
    dispatch({ type: LOGOUT_FAILURE });
  }
};


export const addStrain = (strain) => dispatch => {

     dispatch({type: ADD_STRAIN_REQUEST})
     console.log(strain)
     axiosAuth().post(`https://med-cabinet-production.herokuapp.com/api/users/${1}/strains`, strain)
     .then (res => {
         console.log(res)
         console.log(strain)
         dispatch({type: ADD_STRAIN_SUCCESS, payload: res.data})
         .catch(err => {
             console.log(err)
         })
     })
 }

 export const getStrain = (searchParms) =>  dispatch => {
   dispatch({type:GET_STRAIN_REQUEST})
   axiosAuth().get('https://med-cabinet-production.herokuapp.com/api/strains', {
     params:searchParms,
   })
   .then(res => {
     console.log(res)
     dispatch({type:GET_STRAIN_SUCCESS, payload: res.data})

     .catch(err => {
       console.log(err)
       dispatch({type:GET_STRAIN_FAILURE})
     })
   })
 }
 export const deleteStrain = () =>  dispatch => {
   dispatch({type:DELETE_STRAIN_REQUEST})
   axiosAuth().delete('https://med-cabinet-production.herokuapp.com/api/strains', {
 
   })
   .then(res => {
     console.log(res)
     dispatch({type:DELETE_STRAIN_SUCCESS, payload: res.data})

     .catch(err => {
       console.log(err)
       dispatch({type:DELETE_STRAIN_FAILURE})
     })
   })
 }

 export const editStrain = (searchParms) =>  dispatch => {
   dispatch({type:EDIT_STRAIN_REQUEST})
   axiosAuth().put('https://med-cabinet-production.herokuapp.com//api/strains', {
     params:searchParms,
   })
   .then(res => {
     console.log(res)
     dispatch({type:GET_STRAIN_SUCCESS, payload: res.data})

     .catch(err => {
       console.log(err)
       dispatch({type:GET_STRAIN_FAILURE})
     })
   })
 }
