import React from "react"
import "./Style.css"
import Button from "./Button"

function Apple(){
    return(
        <div style={{textAlign:"center",color:"white"}}>
            <h1 >Hello World</h1>
            <Button buttontext="Lemon"/>
            <Button buttontext="Apple"/>
            <Button buttontext="Orange"/>
        </div>
    )
}

export default Apple