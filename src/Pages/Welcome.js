import { Fragment } from "react";
import { Route } from "react-router-dom";
const Welcome = () => {
  return (
    <Fragment>
      <h1>Hey, Welcome to my app!</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, Shajadul Karim Bhuiyan</p>
      </Route>
    </Fragment>
  );
};
export default Welcome;
