import React from 'react';
import  ReactDOM from 'react-dom';
import "./style.css";
import image from './images/lizard.png';
function Student1(){
    return(
   
<div  >
    <br/>
    <br/>
    <br/>
<img src={image} height={400} width={500} />
<br>
</br>
<h2>Lizard</h2>
<p>
    Lizards are dangerous and poisionous .Many of the lizards are green in color .It was observed in forest.Lizards are widespread group of squamate reptiles,with over 60,000.
</p>

   <a href='#'>Share</a> &nbsp;&nbsp;
   <a href='#'>Learn More</a> 
   </div>

    )
        
        
      
    
}


ReactDOM.render(
    <>
       <Student1/>
       
    </>,
    
    document.getElementById('root')

)