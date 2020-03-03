import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Searchcards from './Searchcards';

const Search = () =>{

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
      
      useEffect(() => {
        const RACE= `${query}`;
         axios.get(`http://strainapi.evanbusse.com/cl50S6p/strains/search/race/${RACE}`).then(response =>{
           console.log( 'c log2',response.data);
           const strains= response.data.filter(race => race.race.toLowerCase().includes(query.toLowerCase() )
         
       );
       setData(strains);
        
         }); 
        }, [query]);

        useEffect(() => {
            const EFFECT = `${query}`;
             axios.get(`https://strainapi.evanbusse.com/cl50S6p/strains/search/effect/${EFFECT}`).then(response =>{
               console.log( 'c log3',response.data);
               const strains= response.data.filter(effect => effect.effect.toLowerCase().includes(query.toLowerCase() )
             
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
                <Searchcards name={data.name} race={data.race} effect={data.effect}/>
              </div>
            )
          })} 
          </div>
       </div>
      
      );
    };
    
    




export default Search;