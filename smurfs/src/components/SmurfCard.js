import React from 'react'; 
import { useContext } from 'react';
import { SmurfCardContext } from '../contexts/SmurfCardContext';
import cuid from 'cuid';



export const SmurfCard = () => {
    const { smurf } = useContext(SmurfCardContext);
    
    return (
    
    <div className="smurfCard">
        {smurf.map(item=>{
            return (
                <div key={cuid()}>
                <p>{item.name}</p>
                <p>{item.age}</p>
                <p>{item.height}</p>
                 </div>
            )
            })}
        
    </div>); 
    
}
     