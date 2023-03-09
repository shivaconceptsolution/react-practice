import React from "react";
import Hoc from "./HOC"
 function HOCCHILD()
{
    return(<React.Fragment key={1}>
             <React.Fragment Key={1001}>
             <p>This is Child Component under HOC Fragment 1</p>
             </React.Fragment>
             <React.Fragment Key={1002}>
                <p>This is Child Component under HOC Fragment 2</p>
             </React.Fragment>
          
        </React.Fragment>
    
    )
}

HOCCHILD = Hoc(HOCCHILD)
export default HOCCHILD;
