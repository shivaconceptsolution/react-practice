import { useState } from "react"

function SIFunctionNew()
{
    const[p,setP] = useState("")
    const[r,setR] = useState("")
    const[t,setT] = useState("")
    const[res,setRes] = useState("")
    function enterP(e) {
        setP(e.target.value)
    }
    function enterR(e) {
        setR(e.target.value)
    }
    function enterT(e) {
        setT(e.target.value)
    }
    function calc(e) {
      var res = (parseInt(p)*parseInt(r)*parseInt(t))/100
      setRes(res)
    }

    return(<div>


         <input type="text" onChange={enterP} />
         <br />
         <input type="text" onChange={enterR} />
         <br />
         <input type="text" onChange={enterT} />
         <br />
         <input type="button" onClick={calc} value="Calculate" />
         <br />
         {res}
        </div>
    )
}
export default SIFunctionNew