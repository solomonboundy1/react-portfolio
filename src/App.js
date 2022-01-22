import "./App.css";
import NavigationBar from "./screens/navigationBar/NavigationBar";
import Particles from "./Particles";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Technologies from "./screens/technologies/Technologies";
import Portfolio from "./screens/portfolio/Portfolio";
import ContactMe from "./screens/contactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Particles />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
