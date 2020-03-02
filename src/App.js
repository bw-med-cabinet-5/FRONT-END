import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import HomePage from './components/HomePage'
import PrivateRoute from './utils/PrivateRoute';
import Recommendations from './components/Recommendations';
import Records from './components/Records';


function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path ='/' component={Login}/>
      <Route path = '/register' component={Register}/>
      {/* <Route path='/homepage' component={HomePage}/>
      <Route path='/records' component={Records}/>
      <Route path='/recommendations' component={Recommendations}/> */}
   
    <PrivateRoute exact path='/homepage' component={HomePage}/>
      <PrivateRoute exact path='/records' component={Records}/>
      <PrivateRoute exact path='/recommendations' component={Recommendations}/> 
      
      <Footer/>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(
  mapStateToProps,
  { }
)(App)
