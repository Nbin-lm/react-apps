/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import Child from "./Child"
import { Child2 } from "./child2"
function parent() {
    const[name,setName] = useState("Nabin");
    function handleChange(){
        setName("samir");
    }
  return (
    <div>
        <Child handleChange = {handleChange}/>
        <Child2 name = {name} />
    </div>
  )
}

export default parent