import React ,{useState}from 'react';
import Showhooks from './Showhooks';
 import Counteffect from './Counteffect';
 
const Counthook = () => {
    const[count,setCount]=useState(0)
    const increase=()=>{
        setCount(count+1);
    }
    const decrease=()=>{
        setCount(count-1);
        
    }
    return (
        <div>
            <h3>count:{count}</h3>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <Showhooks/>
            <Counteffect/>
            
        </div>
    );
};

export default Counthook;