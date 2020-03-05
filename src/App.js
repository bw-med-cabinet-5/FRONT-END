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
import StrainSection from './components/StrainSection';
import StrainList from './components/StrainList';
import StrainCard from './components/StrainCard';
import UserProfile from './components/UserProfile';
import AddStrain from './components/AddStrain';

function App() {

  return (

    <div className="App">
      <Header/>
      <Route exact path ='/' component={Login}/>
      <Route path = '/register' component={Register}/>
      <PrivateRoute exact path='/users' component={HomePage}/>
      <PrivateRoute exact path='/strain' component={StrainSection}/>
      <PrivateRoute exact path = '/card' component={StrainCard}/>
      <PrivateRoute exact path ='/profile' component={UserProfile}/>
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
