import React from 'react'; 
import axios from 'axios';
export default class Form extends React.Component {
    constructor(){
        super();
        this.state= {
            name: '',
            age: '',
            height: ''
    }};
    handleChanges = e =>{
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value})
    };
    onSubmit = e =>{
        e.preventDefault();
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then( res =>{
              console.log("This adding a smurf", res.data)
            })
            .catch(error => console.log("Adding is not working",error))
          window.location.reload();
    }
    render() {
    return (
    <div className="formCard">
        <form className="card" onSubmit={this.onSubmit}>  
                <input 
                type="text" 
                value={this.state.name} 
                placeholder="Enter Smurf Name"
                name="name" 
                onChange={this.handleChanges}
                />  
                <input 
                type="text" 
                value={this.state.age} 
                placeholder="Enter Age"
                name="age" 
                onChange={this.handleChanges}
                />  
                <input 
                type="text" 
                value={this.state.height} 
                placeholder="Enter Height"
                name="height" 
                onChange={this.handleChanges}
                />
            <button type="submit">Submit</button>    
        </form> 
    </div>
    )
  }
}