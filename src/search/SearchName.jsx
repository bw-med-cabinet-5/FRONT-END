import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Searchcards from './Searchcards';
import styled from 'styled-components';


const NewSearch = styled.input`
margin-top: .25rem;
`
const SearchName = () =>{

    const [data, setData]=useState([]);
    const [query, setQuery]=useState('');
    const handleSubmit =(e) => {
      e.preventDefault();
      console.log('data', query)
  }
    
     useEffect(() => {
      const NAME= `${query}`;
       axios.get(`http://strainapi.evanbusse.com/cl50S6p/strains/search/name/${NAME}`).then(response =>{
         console.log( 'c log',response.data);
         const strains= response.data.filter(name => name.name.toLowerCase().includes(query.toLowerCase() )
       
     );
     setData(strains);
      
       }); 
       
     }, [query]);
     const handleInputChange = event => {
        setQuery(event.target.value);
    };
     return (
        
        <div className="main-cta">
          <h2>Names</h2><Link to='/search'>back --></Link>
          
          <form onSubmit={handleSubmit}>
            <label>Search: </label>
            <NewSearch type='text' value={query} required onChange={handleInputChange} placeholder='search by name'/>
            <input type='submit' value='GO!'/>


        </form> 
      <div className="main-cta">
       { data.map(data => {
          return (
            <div className='strain-list' key={data.id}>
              <Searchcards name={data.name} race={data.race}  desc={data.desc}/>
            
            </div>
          )
        })} 
        </div>
     </div>
     )
}

export default SearchName;

