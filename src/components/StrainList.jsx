import React, {useState, useEffect} from 'react'
import AddStrain from './AddStrain'
import { connect } from 'react-redux'
import axios from 'axios'
import StrainCard from './StrainCard'

const StrainList = (props) => {
 
const [addingStrain, setAddingStrain] = useState(false)
const [name, setName] = useState()
const [req, setReq] = useState()
 const handleClick = () => {
    setAddingStrain(!addingStrain)
 }
/*
 let obj
    
 useEffect(() => {
     axios.get('http://strainapi.evanbusse.com/zZGNySQ/strains/search/all')
     .then(res => {
         const strainList = (res.data)
         // console.log(strainList)
         const strainObj = new Map(Object.entries(strainList))
         console.log()
         Object.keys(strainList).map((key, index)=> {
         obj =strainList[key]
   setReq(obj)
         setName(key)
           })
     })
     .catch(err => {
         console.error(err);
     })
 }, [])
 */

 console.log(req)
 console.log(name)

return(
    <div>
        <h3>Add Strain</h3>
        <button onClick={handleClick}>{addingStrain ? 'Cancel' : 'Add'}</button>
        {addingStrain && <AddStrain toggleAdd={handleClick}/>}
        <div className='strain-list-cta'>
 
        {/*    {props.cabinet.map(strain=>{
                <StrainCard
                key={strain.strain_id}
                strain={strain}
                history={props.history}/>}
        )} */}
        </div>
    </div>
)
}

const mapStateToProps = state => {
    return {
        ...state,
        cabinet: state.cabinet
    }
}
export default connect(
    mapStateToProps,
    { }
)(StrainList)