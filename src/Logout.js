import React from "react"
export class Logout extends React.Component
{
    constructor()
    {
        super();
    }
   componentDidMount()
   {
    var s = sessionStorage.removeItem("uid")
    window.location='/login'
 
   
  }
  render()
  {
    return(<div>
     

    </div>)
  }
    
}

