import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Products from "./Pages/Prducts";
import Nav from "./components/Nav";
import ProductDetails from "./Pages/ProductDetails";
function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />

          <Route path="/welcome/*" element={<Welcome />}>
            <Route
              path="new-user"
              element={<p>Welcome, Shajadul Karim Bhuiyan</p>}
            />
          </Route>

          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
