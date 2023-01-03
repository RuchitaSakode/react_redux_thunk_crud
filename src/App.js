import "./App.css";
import createMockServer from "./main";
import "bootstrap/dist/css/bootstrap.css";
import MainContainer from "./Components/MainContainer";
createMockServer();

function App() {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
