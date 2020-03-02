import axios from "axios";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

//REGISTER USER START
export const registerUser = (newUser, history) => dispatch => {
  console.log(`action register`)
  dispatch({ type: REGISTER_REQUEST });
  axios
    .post("https://med-cabinet-production.herokuapp.com/api/register", newUser)
    .then(res => {
      console.log(res.data);
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
   
      localStorage.setItem("token", res.data.token);
      history.push("/");
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.res });
    });
};

//LOGIN USER START
export const loginUser = (user, history) => dispatch => {
  dispatch({ type: LOGIN_REQUEST });

  axios
    .post(" https://cors-anywhere.herokuapp.com/https://med-cabinet-production.herokuapp.com/api/login", user)
    .then(res => {
      console.log(history.push);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      history.push("/homepage");
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
