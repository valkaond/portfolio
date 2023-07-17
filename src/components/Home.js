import React from 'react';
import Typewriter from "typewriter-effect";
import '../App.css';
function Home(){
   return (
      <div id="home">
         <h3>Welcome to my portfolio</h3>
         <Typewriter
            options={{
               strings: [
                  "I'm Ondřej Válka",
                  "I'm student at FIT CTU in Prague"
               ],
               delay: 100,
               pauseFor: 1750,
               autoStart: true,
               loop: true
            }
            }
         />
      </div>
   );
}

export default Home;