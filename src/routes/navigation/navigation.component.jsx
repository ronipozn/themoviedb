import { Fragment } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import Button from "../../components/button/button.component";

import "./navigation.styles.scss";

const Navigation = () => {
  const navigate = useNavigate();

  const goToFavoritetsHandler = () => {
    navigate("/favorites");
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-home-container" to="/">
          MOVIES
        </Link>
        <div className="nav-links-container">
          <Button onClick={goToFavoritetsHandler}>FAVORTIES</Button>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
