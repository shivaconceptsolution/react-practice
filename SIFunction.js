import { useState } from "react"

const SIFunction = ()=>{
    const[p,setP] = useState("")
    const[r,setR] = useState("")
    const[t,setT] = useState("")
    const[res,setRes] = useState("")
    var enterP = (e)=>{
        setP(e.target.value)
    }
    var enterR = (e)=>{
        setR(e.target.value)
    }
    var enterT = (e)=>{
        setT(e.target.value)
    }
    var calc = (e)=>{
      var res = (parseInt(p)*parseInt(r)*parseInt(t))/100
      setRes(res)
    }

    return(<div>


         <input type="text" onChange={(e)=>enterP(e)} />
         <br />
         <input type="text" onChange={(e)=>enterR(e)} />
         <br />
         <input type="text" onChange={(e)=>enterT(e)} />
         <br />
         <input type="button" onClick={calc} value="Calculate" />
         <br />
         {res}
        </div>
    )
}
export default SIFunction