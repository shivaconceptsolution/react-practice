import React, { useState }   from 'react';
import { useLocation } from "react-router";
import axios from 'axios'
function EditCust()

{

 let data = useLocation();

 console.log(data.state);

 const baseURL = "http://127.0.0.1:5000/customer/"+data.state;

 const [post, setPost] = useState("");

 const [name,setName]= useState(undefined)

 const [email,setEmail]= useState(undefined)
 const [mobile,setMobile]= useState(undefined)
 const [address,setAddress]= useState(undefined)
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

   if(name==undefined)
   {
    setName(post.name)
   }
   if(email==undefined)
   {
    setEmail(post.email)
   }
   if(mobile==undefined)
   {
   setMobile(post.mobileno)
   }
   if(address==undefined)
   {
    setAddress(post.address)
   }

    axios.put(baseURL, {

      name: name,
      mobileno:mobile,
      email: email,
      address:address

    })

    .then((response) => {

     // setPost(response.data);

     window.location.href="/customerdashboard";

    });

     

    e.preventDefault();   

}

  if (!post) return null;

   return(

       <div id="middle">
            <form onSubmit={changeSubmit}>
              <table>
              <tr>Name <td></td><td>  <input type="text"  id='name' defaultValue={post.name}  onChange={handelName}   />   </td></tr>
              <tr>Mobileno<td></td> <input type="text"  id='mobileno' defaultValue={post.mobileno}  onChange={handelMobile}       /> <td></td></tr>
              <tr>Email <td></td><td>  <input type="text"  id='email' defaultValue={post.email}   onChange={handelEmail} /></td></tr>
              <tr>Address<td></td><td><input type="text"  id='address' defaultValue={post.address} onChange={handelAddress}/></td></tr>
              <tr><td colSpan={2} align={'left'}><button type="submit" value="Submit">Submit</button></td></tr>
              </table>
              </form>
              </div>

   );

}



export default EditCust;



