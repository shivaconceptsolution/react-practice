
const coursename=["C","C++","DS","JAVA","PHP"]
var c = coursename.map((x)=>{
    return <li>{x}</li>;
})
const coursename1=["C","C++","DS","JAVA","PHP"]
var c1 = coursename1.map((x)=>{
    return <option value={x}>{x}</option>;
})
const coursename2=["C","C++","DS","JAVA","PHP"]
var c2 = coursename2.map((x)=>{
    return <span><input type="checkbox" value={x} />{x}</span>;
})
export default function ListExample()
{
   return(<div>
      
      <ul>
          {c}
      </ul>
      <select>
          {c1}
      </select>
      <select multiple>
          {c1}
      </select>
      <div>
        {c2}
      </div>

   </div>)
}