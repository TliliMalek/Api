import "./App.css";
import { Api } from "./Component/Api";

function App() {
  return (
    <div>
      <div>
        <h1> la liste des utilisateurs </h1>
      </div>
      <div className="css">
        <Api />
      </div>
    </div>
  );
}

export default App;
