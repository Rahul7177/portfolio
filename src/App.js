import About from "./Components/about";
import Contact from "./Components/contact";
import Home from "./Components/home";
import Navbar from "./Components/navbar";
import Projects from "./Components/projects";
import Skills from "./Components/skills";
import Social from "./Components/social";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Social/>
    </div>
  );
}

export default App;
