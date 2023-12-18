import './App.css';
import CompoNent  from "./Component/Sidebar";

function App() {
  return (
    <div className="App">
      <CompoNent.Sidebar />
      <CompoNent.Dashboard />
    </div>
  );
}

export default App;
