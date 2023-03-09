export default function ListProps(props)
{
  
    var c = props.myLists
     const c1 = c.map((data)=>{
        return <li>{data}</li>
     })
     return(<div>
          <ul>

         {c1}
       </ul>
       <h3>{props.test}</h3>


     </div>)

}