import "./App.css";
import { Api } from "./Component/Api";

function App() {
  return (
    <div>
      <div>
        <h1 className="titre"> La liste des utilisateurs </h1>
      </div>
      <div className="home">
        <div className="css">
          <Api />
        </div>
      </div>
    </div>
  );
}

export default App;
