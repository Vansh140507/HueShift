import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";

function App(){
    const [color,setcolor] = useState("white")
    useEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color]);
    return(

    <div className="box">
        <h1>Background Color Changer </h1>
        <div className="but">
        <button style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}>Red</button>
        <button style={{backgroundColor:"orange"}} onClick={()=>setcolor("orange")}>Orange</button>
        <button style={{backgroundColor:"pink"}} onClick={()=>setcolor("pink")}>Pink</button>
        <button style={{backgroundColor:"yellow"}} onClick={()=>setcolor("yellow")}>Yellow</button>
        <button style={{backgroundColor:"green"}} onClick={()=>setcolor("green")}>Green</button>
        </div>
    </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('display'))
root.render(<App/>)