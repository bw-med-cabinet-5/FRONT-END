import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Searchcards from './Searchcards';
import styled from 'styled-components';

const NewSearch = styled.input`
margin-top: .25rem;
`

const SearchRace = () =>{

    const [data, setData]=useState([]);
    const [query, setQuery]=useState('');
    const handleSubmit =(e) => {
      e.preventDefault();
      console.log('data', query)
  }
    
    useEffect(() => {
        const RACE= `${query}`;
         axios.get(`http://strainapi.evanbusse.com/cl50S6p/strains/search/race/${RACE}`).then(response =>{
           console.log( 'c log2',response.data);
           const strains= response.data.filter(race => race.race.toLowerCase().includes(query.toLowerCase() )
         
       );
       setData(strains);
        
         }); 
        }, [query]);

     const handleInputChange = event => {
        setQuery(event.target.value);
    };
     return (
        
        <div className="main-cta">
               <h2>Race</h2><Link to='/search'>back --></Link>
          <form onSubmit={handleSubmit}>
            <label>Search: </label>
            <NewSearch type='text' value={query} required onChange={handleInputChange} placeholder='search type'/>
            <input type='submit' value='GO!'/>


        </form> 
        
    
      <div className="strains">
       { data.map(data => {
          return (
            <div className='strain-list' key={data.id}>
              <Searchcards name={data.name} race={data.race} effect={data.effect} desc={data.desc}/>
              {/* <LearnMore name={data.name} race={data.race} effect={data.effect} desc={data.desc}/> */}
            </div>
          )
        })} 
        </div>
     </div>
     )
}

export default SearchRace;