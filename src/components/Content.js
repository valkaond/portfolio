import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Content(){
    return(
        <div id="content">
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Content