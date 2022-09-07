import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav
        style={{
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/form">Form</Link>
      </nav>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
