import { useState } from "react"

function Number(){
    const [number, setNuber]=useState(0)
    const change1=()=>{
        
        if(document.getElementsByClassName("minus")){
            setNuber((number)=>
            number-1
            )
        }
    }
    const change=()=>{
        
         if(document.getElementsByClassName("plus")){
            setNuber((number)=>
            number+1
            )
        }
    }
    return(
        <div className="form">
            <button onClick={change1} className="minus">-</button>
            <h1>{number}</h1>
            <button onClick={change} className="plus">+</button>
        </div>
    )
}
export default Number