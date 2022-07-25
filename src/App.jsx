import { useState } from "react";
import "./globalStyles/root.css";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Inicio from "./components/Inicio";

function App() {
  const [statusLog, setStatusLog] = useState(false);

  return (
    <div className="App">
      {statusLog ? (
        <Dashboard setStatusLog={setStatusLog} />
      ) : (
        <Inicio setStatusLog={setStatusLog} />
      )}
    </div>
  );
}

export default App;
