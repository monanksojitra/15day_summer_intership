import logo from "./logo.svg";
import "./App.css";
import { New_class } from "./components/class/addmethos";
import Mapmathodexe from "./components/class/Mapmathodexe";
import Coviddata from "./components/class/Coviddata";
import Calculator from "./miniproject/Calculator";
import Quiz from "./miniproject/Quize";
import Properex from "./components/class/Properex";
import NewsCards from "./components/NewsCards";

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
      {/* <h3>welcome user how are you ? in add 2nd function</h3> */}
      {/* <New_class /> */}
      {/* <Mapmathodexe/> */}
      {/* <Coviddata /> */}
      {/* <Calculator /> */}
      {/* <Quiz /> */}
      {/* <Properex name="monak"/> */}
      <NewsCards />
    </div>
  );
}

export default App;
export { Welcome };
