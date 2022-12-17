import { Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Prducts";
import Nav from "./components/Nav";
function App() {
  return (
    <div>
      <Nav />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}
export default App;
