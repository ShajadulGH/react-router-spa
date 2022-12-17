import { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Fragment>
      <h1>These are our Products!</h1>
      <ul>
        <li>
          <Link to="/products/p1">Car</Link>
        </li>
        <li>
          <Link to="/products/p2">Cycle</Link>
        </li>
        <li>
          <Link to="/products/p3">Bike</Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default Products;
