import React, { useState } from "react"
import "./App.css"
import data from "./resources/countryData.json"

function App() {
  const [value,setValue]=useState("")

  const handleChange=(e)=>{
    const hii=setValue(e.target.value)

  }

  const handleEscape=(e)=>{
    if(e.key==="Escape"){
      document.getElementById("dropdown").style.display="none"
    }else{
      document.getElementById("dropdown").style.display="inline"
    }
  }
  

  return (
    <>
      <input type="text" value={value} onChange={handleChange} onKeyDown={handleEscape}/>
      <button onClick={()=>handleSearch(value)}>Search</button>
      
      <div id="dropdown">
        {
          data.filter((item)=>{
            let searchTerm=value.toLowerCase();
            let fullname=item.name.toLowerCase();
            return(
              searchTerm && fullname.startsWith(searchTerm) && fullname!==searchTerm
            )
          }).slice(0,10).map((item,index)=>{
            return(
              <div key={index} onClick={()=>handleSearch(item.name)}>
                {item.name}

              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
