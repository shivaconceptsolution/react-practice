import React, { useState }   from 'react';
import { useLocation } from "react-router";
import axios from 'axios'
function DeleteCust()

{

 let data = useLocation();

 console.log(data.state);

 const baseURL = "http://127.0.0.1:5000/customer/"+data.state;

 const [post, setPost] = useState("");

 const [name,setName]= useState("")

 const [email,setEmail]= useState("")
 const [mobile,setMobile]= useState("")
 const [address,setAddress]= useState("")



 React.useEffect(() => {

    axios.get(baseURL).then((response) => {

      setPost(response.data[0]);
      //console.log("Data is ",response.data[0].name);
      //console.log("Post data is ",post);

    });

  }, []);



  const handelName =(e)=>{
   
    setName(e.target.value)

}
const handelEmail =(e)=>{
   
    setEmail(e.target.value)

}
const handelMobile =(e)=>{
   
    setMobile(e.target.value)

}
const handelAddress =(e)=>{
   
    setAddress(e.target.value)

}

const changeSubmit =(e)=>{

   

    axios

    .delete(baseURL) .then((response) => {

     // setPost(response.data);

     window.location.href="/customerdashboard";

    });

     

    e.preventDefault();   

}

  if (!post) return null;

   return(

       <div id="middle">
        <h1>Are you sure to delete the record?</h1>
         <form onSubmit={changeSubmit}>
            Name is {post.name}
            <br />
            Mobileno {post.mobileno} 
            <br />  
            Email  {post.email}
            <br />
            Address {post.address} 
            <br />
            <button type="submit" value="Submit">Delete</button>
         </form>
        
       </div>

   );

}



export default DeleteCust;



