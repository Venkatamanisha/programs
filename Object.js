import React,{useState} from 'react';

const Object = () => {
    const[student,setStudent]=useState({
        Studentname:'manisha',
        college:'SVECW',loc:'BVRM'
    })
    const updateCollege=()=>{
        setStudent({
            college:'SRKR',
            Studentname:'nitya',
            loc:'ongl'
        })
    }
    
    return (
        <div>
            <h3>Your name:{student.Studentname}</h3>
            <h3>Your college:{student.college}</h3>
            <h3>college location:{student.loc}</h3>
          <button onClick={updateCollege}>update</button>  
        </div>
    );
};

export default Object;