import React from 'react';

import SearchName from '../search/SearchName';
import SearchRace from '../search/SearchRace';
import SearchAilment from '../search/SearchAilment';
import { Dropdown} from 'react-bootstrap';
import { Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () =>{

     
      return (
    <div className="main-cta">
          
          <form className="search">
            <h1>Search by Category </h1>
          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Pick Search Type
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/name">Name</Dropdown.Item>
    <Dropdown.Item href="/race">Race</Dropdown.Item>
    <Dropdown.Item href="/ailment">Ailment</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          </form>
          
     
       
     
{/*       
        <Switch>
        <Route path='/name' component={SearchName}/>
        <Route path='/race' component={SearchRace}/>
        <Route path='/ailment' component={SearchAilment}/>
        
        </Switch>
          */}
         
       </div>
     
      );
    };
    
    




export default Search;