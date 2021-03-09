import logo from "../images/logo.png";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const routes = ["/SignUp", "/SignIn"];

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div
      className={`mt-2  justify-between flex-row items-center ${
        location.pathname === "/SignUp" ? "hidden" : "flex"
      }`}
    >
      <img className="ml-8" src={logo} alt="logo-codeskills" />
      <div className="hover:text-bom-orange">
        <Link to="/">Home</Link>
      </div>
      <div className="hover:text-bom-orange">
        <Link to="/About">About</Link>
      </div>
      <div className="hover:text-bom-orange">
        <Link to="/TextEditor">Text-Editor</Link>
      </div>
      <div className="hover:text-bom-orange">
        <Link to="/Templates">Templates</Link>
      </div>
      <button className="rounded-lg shadow-md mr-28 px-4 py-2 bg-bom-orange hover:bg-opacity-75">
        Log Out
      </button>
    </div>
  );
}
export default Navbar;
