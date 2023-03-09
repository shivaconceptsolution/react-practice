import React from "react"
import { Link } from "react-router-dom";

export class FetchExample extends React.Component
{
    constructor()

   {

    super();
    this.state = { tdata:[],udata:'' }
    this.fun = this.fun.bind(this)

   }
   fun(e)
   {
      alert(e.target.value)
      e.preventDefault()
   }
   componentDidMount()
   {
    var s = sessionStorage.getItem("uid")
    if(s === null)
    {
       window.location='/login'
    }
    this.setState({udata:s})
    fetch('http://127.0.0.1:5000/customer')

    .then(res => res.json())

    .then((data) => {

      this.setState({ tdata: data})

      console.log(this.state.tdata)

    }).catch(console.log)
  }
  render()
  {
    return(<div>
      <h1> {this.state.udata} </h1>
      <Link to="/logout">Logout</Link>
        <table boder='1'>
            <tr><th>Name</th><th>mobileno</th><th>Email</th><th>Address</th><th>Edit</th><th>Delete</th></tr>
            {this.state.tdata.map((person,i)=> <TableRow Key={i} data={person} />)}   
        </table>

        <select onChange={this.fun}>
        <option value="">Select Person</option>  
        {this.state.tdata.map((person,i)=> <SelectRow Key={i} data={person} />)}   
        </select>

    </div>)
  }
    
}

class TableRow extends React.Component
{
    render()
    {
        return(
        
           <tr>
            <td> {this.props.data.name}</td>
            <td> {this.props.data.mobileno}</td>
            <td> {this.props.data.email}</td>
            <td> {this.props.data.address}</td>
            <td><Link to="/edit" state={this.props.data._id} >Edit</Link></td>
            <td><Link to="/delete" state={this.props.data._id} >Delete</Link></td>
           
        </tr>)
    }
}
class SelectRow extends React.Component
{
    render()
    {
        return(
        
           <option value={this.props.data.name}>
            {this.props.data.name}
            </option>
           )
    }
}