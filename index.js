import React from 'react';
import  ReactDOM from 'react-dom';
import Image from 'faker'
import style from './style.css';


function Faker1 (props){
    return(
        
        <div class="ui cards">
            
            <div class='card' >
            <div class="content">
                <img class="right floated mini ui image" src= {Image.image.image()} alt=""/>
                
                <div class="header">
                    Elliot Fu
                </div>
                <div class="meta">
                    Friends of Veronika
                </div>
                <div class="description">Elliot requested permission to view your content
            </div>
        </div>
        <div className='extra content'>
            <div className='ui two buttons'>
                <div className='ui basic green button'>{props.accept?"yes":"No"}</div>
                <div className='ui basic red button'>Decline</div>
            </div>
        </div>
        </div>,
        
        <div class="ui cards">
            
        <div class='card'>
        <div class="content">
            <img class="right floated mini ui image" src= {Image.image.image()} alt=""/>
            
            <div class="header">
Jenny Hess
            </div>
            <div class="meta">
                New Member
            </div>
            <div class="description">Jenny wants to add you to the group best friends
        </div>
    </div>
    
    <div className='extra content'>
        <div className='ui two buttons'>
            <div className='ui basic green button'>{props.decline?"Yes":"No"}</div>
            <div className='ui basic red button'>Decline</div>
        </div>
    </div>
    </div>
    </div>
    </div>
    
        
    )
}

ReactDOM.render(
    <>
       
       <Faker1  name="manisha" accept={true} decline={false}/>
    
    </>,
    
    document.getElementById('root')

)