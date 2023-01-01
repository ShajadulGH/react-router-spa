import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
const Welcome = () => {
  return (
    <Fragment>
      <h1>Hey, Welcome to my app!</h1>
      <Link to="new-user">New User</Link>
      <Outlet />
    </Fragment>
  );
};
export default Welcome;
