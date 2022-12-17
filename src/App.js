import { Route, Switch } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Prducts";
import Nav from "./components/Nav";
import ProductDetails from "./Pages/ProductDetails";
function App() {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productID">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;
