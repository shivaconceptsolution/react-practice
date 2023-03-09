import React, {Component} from 'react';
export default function Hoc(HocComponent){  
    return class extends Component{  
        render(){  
            return (  
                <div>  
                     <HocComponent></HocComponent>  
                    <p>High Order Component</p>
                    <HocComponent></HocComponent> 
                </div>  
  
            );  
        }  
    }   
}