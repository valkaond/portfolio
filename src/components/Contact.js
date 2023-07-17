import React from "react";
function Contact (){
    return (
    <div id="contact">
        <div>
            Contact
        </div>
        <div onClick={()=>window.open("https://www.linkedin.com/in/valkaond/")}>
            Visit my LinkedIn
        </div>
        <div>
            Send me an
            <a href="mailto:ondra.valka@gmail.com"> Email</a>
        </div>
    </div>
    )
}

export default Contact;