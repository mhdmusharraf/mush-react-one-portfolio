import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-800">
     
      <NavBar />
      <Home  />
      <SocialLink />
      <About  />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
