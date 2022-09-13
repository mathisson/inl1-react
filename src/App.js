import { Navbar, Welcome, ApiTable } from "./components/";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Welcome/>
        <ApiTable/>
    </div>
  );
}

export default App;
