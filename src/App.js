import "./App.css";
import NavigationBar from "./screens/navigationBar/NavigationBar";
import Particles from "./Particles";
import Header from "./screens/header/Header";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Particles />
    </div>
  );
}

export default App;
