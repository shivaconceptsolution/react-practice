import React from "react";
import axios from "axios";
function Login()
{

 const baseURL = "http://127.0.0.1:5000/login";
 
 const [username, setUsername] = React.useState("");
 const [password, setPassword] = React.useState("");
 const handelInput =(e)=>{
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value)
        break;
        case "password":
          setPassword(e.target.value)
          break;
       
        default:
          break;
    }
}
const changeSubmit =(e)=>{
    e.preventDefault()   
    axios
    .post(baseURL, {
      username: username,
      password: password,
     
    })
    .then((response) => {
        console.log(response.data);
        if(response.data.message == "1")
        {
          sessionStorage.setItem("uid",username)
           window.location='customerdashboard';
        }
        else
        {
            window.location = '/login';
        }
    });
     
   
}
 
   return(
       <>
           
          
            <form onSubmit={changeSubmit}>
           
           username <input type="text"  id='username'   onChange={handelInput} />
            <br />
             password <input type="text"  id='password'  onChange={handelInput}/>
            <br />
           
            <button type="submit" value="Submit">Submit</button>
        </form>
          
       </>
   );
}

export default Login;