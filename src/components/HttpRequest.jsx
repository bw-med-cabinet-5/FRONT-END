import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const HttpRequest = (props) => {
console.log(props)
    const [req, setReq] = useState()
    const [name, setName] =useState()
    const [strain, setStrain] = useState()

    const [searchTerms, setSearchTerms] = useState('')
    const [searchResult, setSearchResult] = useState('')
    let API_URL = 'strainapi.evanbusse.com/zZGNySQ/strains/search/all'

    let obj

    useEffect(() => {
        axios.get('')
        .then(res => {
            console.log(res)
            const strainList = (res.data)
            // console.log(strainList)
            const strainObj = new Map(Object.entries(strainList))
            console.log()
            Object.keys(strainList).map((key, index)=> {
            obj =strainList[key]
        
            setStrain(strainObj)
            setReq(obj)
            setName(key)
              })
        })
        .catch(err => {
            console.error(err);
        })
    }, [])


    const handleChange = e => {
        setSearchTerms(e.target.value)
        console.log(e.target.value)
        
    }
    
 const   handleSubmit = e => {
        e.preventDefault()
        // props.toggleSearch()
        fetchTerms()
    }

    const fetchTerms = async() => {
       const result = axios.get(`https://meb-cab-50.herokuapp.com/happy`)
       .then( res => {
           console.log(res)
       })
        setSearchTerms(result)
        console.log(result)
    }

    console.log()

console.log(req)
console.log(name)

    return (

        <div className='strains-full-cta'>
    
            <form onSubmit={handleSubmit}>
                <input type='search' 
                value={searchTerms}
                onChange={handleChange}/>
                <Link to={`${API_URL}${searchTerms}`}>
                <button onClick={handleSubmit} type='submit'>Search</button>
                </Link>
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return{...state }
}
export default connect(
    mapStateToProps,
    {}
)(HttpRequest)

