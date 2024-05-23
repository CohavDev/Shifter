import logo from "./logo.svg";
import "./App.css";
import WeekGroup from "./components/WeekGroup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>משמרות השבוע</h2>
        <WeekGroup />
      </header>
    </div>
  );
}

export default App;
