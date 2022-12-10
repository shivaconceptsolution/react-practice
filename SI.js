import React from "react";

export class SI extends React.Component
{
     constructor(props)
     {
        super(props)
        this.state = {p:'',r:'',t:'',res:''}
     }
     enterP = (e)=>{
        this.setState({p:e.target.value})
     }
     enterR = (e)=>{
        this.setState({r:e.target.value})
     }
     enterT = (e)=>{
        this.setState({t:e.target.value})
     }
     fun = (e) =>{
        var r = (this.state.p*this.state.r*this.state.t)/100
        this.setState({res:r})
     }
     render()
     {
        return(<div>
         <input type="text" onChange={this.enterP} />
         <br />
         <input type="text" onChange={this.enterR} />
         <br />
         <input type="text" onChange={this.enterT} />
         <br />
         <input type="button" onClick={this.fun} value="Calculate" />
         <br />
         {this.state.res}
        </div>)
     }
}