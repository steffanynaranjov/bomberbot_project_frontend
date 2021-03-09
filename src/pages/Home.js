import React from "react";
import logoSignIn from "../images/LogosingIn.png";
import { Link } from "react-router-dom";
import { Apiurl } from "../service/ApiLogIn";
import axios from "axios";

class Home extends React.Component {
  state = {
    form: {
      username: "",
      password: "",
    },
    error: false,
    errorMessage: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    // console.log(this.state.form);
  };

  handleButton = () => {
    let url = Apiurl;
    axios.post(url, this.state.form).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="min-h-screen bg-hero-pattern flex justify-start">
        <div className="ml-52 max-w-md w-full mx-auto mt-20 p-6 ">
          <div className="font-semibold text-4xl mb-4 ml-20">Sign In Here</div>
          <form onSubmit={this.handleSubmit} action="" className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="password"
                placeholder="******"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="font-medium text-sm text-blue-500">
              <Link to="/SignUp">Forgot Pasword?</Link>
            </div>
            <button
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
              onClick={this.handleButton}
            >
              Submit
            </button>
            <div className="ml-10 font-medium text-sm text-blue-500">
              <Link to="/SignUp">Doesn't have account yet? Sign Up here!</Link>
            </div>
          </form>
          {this.state.error === true && (
            <div>
              Error mensaje
              {this.state.errorMessage}
            </div>
          )}
        </div>
        <div className="">
          <img className="mr-24" src={logoSignIn} alt="logo-codeskills" />
        </div>
      </div>
    );
  }
}

export default Home;
