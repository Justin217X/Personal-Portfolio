import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
