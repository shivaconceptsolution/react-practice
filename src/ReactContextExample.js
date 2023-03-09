import React from "react";
const ThemeContext = React.createContext('light');
export default function ReactContextExample()
{
   return(<ThemeContext.Provider value="Test Context">
        <SecondApp />
   </ThemeContext.Provider>)
}

function SecondApp()
{
   return(<div>
    <ThirdApp />
   </div>)
}

function ThirdApp()
{
    
    return(<ThemeContext.Consumer>
          {value => <h1>{value}</h1>} 
    </ThemeContext.Consumer>)
}