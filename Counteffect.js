import React,{useState,useEffect} from 'react';

const Counteffect = () => {
const[count,setCount]=useState(30);

    useEffect(() => {
        setTimeout(() => {
          setCount(count - 1)
        }, 1000)
        if(count==0){
          alert("stop");
        }
      });
    
    

    return (
        <div>
           <h1>{count}</h1> 
        </div>
    );
};

export default Counteffect;