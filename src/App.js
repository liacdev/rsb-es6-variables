import logo from "./logo.svg";
import "./App.css";
import Variables from "./Components/variables.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React ES6 Variables</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-es6-variables"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        <Variables />
      </header>
    </div>
  );
}

export default App;
