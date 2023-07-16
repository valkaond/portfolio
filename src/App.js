import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
      <Projects/>
    </div>
  );
}

export default App;
