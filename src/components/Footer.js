import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoGithub from "../images/github (1).png";

function Footer() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <div
      className={`bg-blue-400 text-black text-base w-full h-20 font-semibold  items-center justify-center ${
        location.pathname === "/" ||
        location.pathname === "/SignUp" ||
        location.pathname === "/ForgotPass"
          ? "hidden"
          : "flex"
      }`}
    >
      <div class="">
        <p class="text-center px-4 py-8 inline-block">
          &copy; By CodeSkills 2021.
        </p>
      </div>
      <div>
        <a href="https://github.com/steffanynaranjov/bomberbot_project_frontend">
          <img
            class="h-14"
            src={logoGithub}
            target="_blank"
            alt="logo-github"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
