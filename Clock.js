import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            date: new Date().toLocaleTimeString(),
        };
    }
   
    componentDidMount(){
        

            setInterval(()=>{
                this.setState({
                    date:new Date().toLocaleTimeString(),
                })
            },1000)
        
    
        }
    
                    
    
    render() {

        return (
            <div>
               
               <p>Current time:{this.state.date}</p> 
            </div>
        );
    }
}

export default Clock;