function Projects(){
    return (
        <div id="projects">
            <div>
                Projects
                <div>
                    BeachStats
                    {/* Add image*/}
                    <div>
                        Statistical application for beach volleyball
                    </div>
                    <div>
                        My first project, was part of my high school final exam. 
                    </div>
                    <div onClick={()=>window.open("https://beachstats.netlify.app/")}>
                        Try BeachStats
                    </div>    
                </div>
                <div>
                    Weather App
                    {/* Add image*/}
                    <div>
                        App to find out the current weather in different locations
                    </div>
                    <div>
                        On this project I wanted to learn how to work with the API
                    </div>
                    <div onClick={()=>window.open("https://weather-app-valkaond.netlify.app/")}>
                        Try WeatherApp
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Projects;