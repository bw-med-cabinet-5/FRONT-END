import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Searchcards from './Searchcards';

const SearchName = () =>{

    const [data, setData]=useState([]);
    const [query, setQuery]=useState('');
    
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
        
        <div className="Strains">
          
        <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="search-name"
            placeholder="search by name"
            autoComplete="off"
          />
        </form>
        
    
      <div className="strains">
       { data.map(data => {
          return (
            <div className='strain-list' key={data.id}>
              <Searchcards name={data.name} race={data.race} effect={data.effect} desc={data.desc}/>
            </div>
          )
        })} 
        </div>
     </div>
     )
}

export default SearchName;

