import { useState } from "react"
import { Link,useNavigate} from "react-router-dom"
export default function Operation()
{
   let navigate = useNavigate(); 
   const[a,setA] = useState(0)
   const[b,setB] = useState(0)
   function fun()
   {
      navigate('add');
   /*   if(props.ope=='+')
    {
       
       alert(parseInt(a.target.value) + parseInt(b.target.value));
    }
    else if(props.ope=='-')
    {
      alert(parseInt(a.target.value) - parseInt(b.target.value));
    }
    else if(props.ope=='*')
    {
      alert(parseInt(a.target.value) * parseInt(b.target.value));
    }  
    else if(props.ope=='/')
    {
      alert(parseInt(a.target.value) / parseInt(b.target.value));
    }
    else
    {
      alert("other");
    }*/
   }
 
    return (<div>
      <Link to="add">Addition</Link>  <Link to="sub">Substraction</Link>  <Link to="multi">Multiplication</Link>  <Link to="div">Division</Link>
      <br />
      <input type="text" onChange={(e)=>setA(e)} />
      <br/>
      <input type="text" onChange={(e)=>setB(e)} />
      <br />
      <input type="button" onClick={fun} value="Click" />
     <p>Props Example</p>
    </div>)
   
}
