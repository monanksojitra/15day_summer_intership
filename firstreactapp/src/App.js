import logo from "./logo.svg";
import "./App.css";
import { New_class } from "./components/class/addmethos";
import Mapmathodexe from "./components/class/Mapmathodexe";
import Coviddata from "./components/class/Coviddata";

function App() {
  return (
    <div>
      <h1>hello monank sojitra in app</h1>
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h3>welcome user how are you ? in add 2nd function</h3>
      {/* <New_class /> */}
      {/* <Mapmathodexe/> */}
      <Coviddata />
    </div>
  );
}

export default App;
export { Welcome };
