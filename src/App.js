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
import ProfileList from './profile/ProfileList';
import Search from './components/Search';
import SearchAilment from './search/SearchAilment';
import SearchName from './search/SearchName';
import SearchRace from './search/SearchRace';

function App() {

  return (

    <div className="App">
      <Header/>
      <Route exact path ='/' component={Login}/>
      <Route path = '/register' component={Register}/>
      <PrivateRoute exact path='/users' component={HomePage}/>
      <PrivateRoute exact path='/profile' component={ProfileList}/>
      <PrivateRoute exact path='/search' component={Search}/>
      <Switch>
      <PrivateRoute exact path='/ailments' component={SearchAilment}/>
      <PrivateRoute exact path='/name' component={SearchName}/>
      <PrivateRoute exact path='/race' component={SearchRace}/>
      </Switch>
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
