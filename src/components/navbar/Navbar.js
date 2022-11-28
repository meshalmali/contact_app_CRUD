import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/evolent-logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-white ">
        <div className="row">
          <div className="col-md-6 ms-5">
            <Link to={"/"} className="navbar-brand">
              <h2 className="ms-3 fw-bolder">evolent</h2>
              <p>
                <h5 className="ms-5">HEALTH</h5>
              </p>
            </Link>
          </div>
          <div className="col-md-3">
            <img src={logo} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// navbar - expand - sm;
