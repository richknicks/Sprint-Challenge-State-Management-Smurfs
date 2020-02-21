import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { FormContext } from '../contexts/FormContext';
import { SmurfCardContext } from '../contexts/SmurfCardContext';

// Components
import { Form } from './Form';
import { SmurfCard } from './SmurfCard';

const App = ()=> {
  const [smurf, setSmurf] = useState([]);
  const [newSmurf, setNewSmurf]=useState({name:"", age:"", height:""});
  
  useEffect(()=>{
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log("This is get",response.data)
      setSmurf(response.data)
    })
    .catch(error => console.log('There is an error', error))

  },[])
  const Add = (item)=>{
    axios
    .post('http://localhost:3333/smurfs',item)
    .then(response =>{
      console.log("This is post",response.data)
      setNewSmurf(response.data)
    })
    .catch(error => console.log("Not working",error))
  }

  
 
    return (
      <div className="App">
        
        <SmurfCardContext.Provider value={{smurf}}>
        <FormContext.Provider value={{newSmurf,smurf,setNewSmurf, Add}}>  
        <Form/>
        <SmurfCard/>
        </FormContext.Provider>
        </SmurfCardContext.Provider>
      </div>
    );
  }


export default App;
