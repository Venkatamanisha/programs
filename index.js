import React from 'react';
import  ReactbodyOM from 'react-dom';
import fake from 'faker'
import './style.css'


function Box(){
    return(
     
        <table className="ui very basic collapsing celled table" align="centre">
               
  <thead>
    <tr><th>Employee</th>
    <th>Correct Guesses</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <h4 className="ui image header">
         
        <img src={fake.image.image()} alt="" className="ui mini rounded image"/>
          <div className="content">
            Lena
            <div className="sub header">Human Resources
          </div>
        </div>
      </h4></td>
      <td>
        22
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
         
        <img src={fake.image.image()} alt="" className="ui mini rounded image"/>
          <div className="content">
            Matthew
            <div className="sub header">Fabric Design
          </div>
        </div>
      </h4></td>
      <td>
        15
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
          <img src={fake.image.image()} alt="" className="ui mini rounded image"/>
          <div className="content">
            Lindsay
            <div className="sub header">Entertainment
          </div>
        </div>
      </h4></td>
      <td>
        12
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
          
        <img src={fake.image.image()} alt="" className="ui mini rounded image"/>
          <div className="content">
            Mark
            <div className="sub header">Executive
          </div>
        </div>
      </h4></td>
      <td>
        11
      </td>
    </tr>
  </tbody>
  
</table>

    )
}

        


ReactbodyOM.render(
    <div>
       
     <Box/>  
     
    
    </div>,
    
    document.getElementById('root')

)