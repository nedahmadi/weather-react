import "./App.css";
import Weathersearch from "./Weathersearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weathersearch />
        <br />
        <br />
        <br />
        <br />
        <br />
        <span>
          {" "}
          <a href="https://github.com/nedahmadi/weather-react">
            {" "}
            Open-source code{" "}
          </a>
          ,by Neda Ahmadi{" "}
        </span>
      </header>
    </div>
  );
}

export default App;
