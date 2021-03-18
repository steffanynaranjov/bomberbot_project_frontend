import logo from "../images/logo.png";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div
      className={`mt-2  md:justify-between md:flex-row md:items-center ${
        location.pathname === "/" ||
        location.pathname === "/SignUp" ||
        location.pathname === "/ForgotPass"
          ? "hidden"
          : "flex"
      }`}
    >
      <img
        className="md:ml-8 hidden md:flex"
        src={logo}
        alt="logo-codeskills"
      />

      <div className="hover:text-bom-orange ml-2">
        <Link to="/About">Home</Link>
      </div>
      <div className="hover:text-bom-orange px-2">
        <Link to="/TextEditor">Editor</Link>
      </div>
      <div className="hover:text-bom-orange px-2">
        <Link to="/Templates">Learning</Link>
      </div>
      <div className="">
        <Link to="/">
          <button className="rounded-lg shadow-md mr-20 px-4 py-2 bg-bom-orange hover:bg-opacity-75">
            Log Out
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
