import Addition from "./Addition"
import Substraction from "./Substraction"
export default function Operation()
{
    return(<div>
        <Addition a="10" b="20" />
        <br/>
        <Substraction a="100" b="20" />
    </div>)
}