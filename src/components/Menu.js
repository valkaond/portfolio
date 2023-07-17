import "../App.css";
import { useState } from "react"

function Menu(){
    const [select, setSelect] = useState(0)
    return (
        <div id="menu">
            <div>
                <h3>
                    Ondřej Válka
                </h3>
            </div>
            <p
                onClick={()=>setSelect(0)}>
                <a href="/#">Home</a>
            </p>
            <p
                onClick={()=>setSelect(1)}>
                <a href="#about">About</a>
            </p>
            <p
                onClick={()=>setSelect(2)}>
                <a href="#projects">Projects</a>
            </p>
            <p
                onClick={()=>setSelect(3)}>
                <a href="#contact">Contact</a>
            </p>
        </div>
    )
}

export default Menu;