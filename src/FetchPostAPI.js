import React, { useState }   from 'react';
import axios from 'axios'
function FetchPostAPI()
{
const baseURL = "http://127.0.0.1:5000/customer";
const [name,setName]= useState(undefined)
const [email,setEmail]= useState(undefined)
const [mobile,setMobile]= useState(undefined)
const [address,setAddress]= useState(undefined)
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
  axios.post(baseURL, {
      name: name,
      mobileno:mobile,
      email: email,
      address:address}).then((response) => {
        window.location.href="/customerdashboard";
    });
    e.preventDefault();   
}
return(
<div id="middle">
            <form onSubmit={changeSubmit}>
              <table>
              <tr>Name <td></td><td>  <input type="text"  id='name'  onChange={handelName}   />   </td></tr>
              <tr>Mobileno<td></td> <input type="text"  id='mobileno' onChange={handelMobile}       /> <td></td></tr>
              <tr>Email <td></td><td>  <input type="text"  id='email'   onChange={handelEmail} /></td></tr>
              <tr>Address<td></td><td><input type="text"  id='address' onChange={handelAddress}/></td></tr>
              <tr><td colSpan={2} align={'left'}><button type="submit" value="Submit">Submit</button></td></tr>
              </table>
              </form>
              </div>

   );

}
export default FetchPostAPI;



