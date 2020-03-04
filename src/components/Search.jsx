import React from 'react';

import SearchName from './SearchName';
import SearchRace from './SearchRace';
import SearchAilment from './SearchAilment';
import { Dropdown} from 'react-bootstrap';
import { Route, Switch} from 'react-router-dom';
import LearnMore from './LearnMore';


const Search = () =>{

     
      return (
    <div className="Strains">
          
          <form className="search">
            
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
          
     
       
     
      
        <Switch>
        <Route path='/name' component={SearchName}/>
        <Route path='/race' component={SearchRace}/>
        <Route path='/ailment' component={SearchAilment}/>
        <Route path='/learnMore' component={LearnMore}/>
        </Switch>
         
         
       </div>
     
      );
    };
    
    




export default Search;