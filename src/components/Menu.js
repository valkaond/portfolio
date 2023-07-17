import "../App.css";
import { useState } from "react"

function Menu(){
    return (
        <div>
            <div className="menu">
                <ul>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;