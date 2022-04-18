import React, { useState } from 'react';

const Login = () => {
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const mailchange=(e)=>{
        
            console.log(e.target.value)
            setEmail(e.target.value)
    }
    const passchange=(e)=>{
            console.log(e.target.value)
            setPassword(e.target.value)
        
        
    }
    return (
        <div>
            <form >
                <label htmlFor=''>Signup</label><br></br>
                <label>Email address</label><br></br>
                <input type="email"
                placeholder='Enter email'
                
                value={email}
               
               onChange={mailchange}
               /><br></br>
                <label >Password</label><br></br>
                <input type="password"
                placeholder='Enter password'
            
                value={password}
                
                onChange={passchange}
                /><br></br>
                <button >Submit</button>
            </form>
        </div>
    );
};

export default Login;