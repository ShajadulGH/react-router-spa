import { Fragment } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <Fragment>
      <h1>Product Details</h1>
      <p>{params.productID}</p>
    </Fragment>
  );
};
export default ProductDetails;
