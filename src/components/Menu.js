import "../App.css";
import { useState } from "react"

function Menu(){
    return (
        <div>
            <div className="menu">
                <ul>
                    <li><a className="menuLink" href="/#">Home</a></li>
                    <li><a className="menuLink" href="/#about">About</a></li>
                    <li><a className="menuLink" href="/#projects">Projects</a></li>
                    <li><a className="menuLink" href="/#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;