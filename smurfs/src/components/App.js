import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { SmurfCardContext } from '../contexts/SmurfCardContext';
// Components
import  Form from './Form';
import { SmurfCard } from './SmurfCard';
const App = () => {
  const [smurf, setSmurf] = useState([]);
  useEffect(()=>{
    axios
    .get('http://localhost:3333/smurfs')
    .then( res => {
      console.log("Response with data",res.data)
      setSmurf(res.data)
    })
    .catch(error => console.log('Error is getting data', error))
  },[])
    return (
      <div className="App">
        <SmurfCardContext.Provider value={{smurf}}>
        <Form/>
        <SmurfCard/>
        </SmurfCardContext.Provider>
      </div>
    );
  }
export default App;