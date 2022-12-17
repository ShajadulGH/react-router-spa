import { Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Prducts";
function App() {
  return (
    <div>
      <h1>Lets Start!</h1>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}
export default App;
