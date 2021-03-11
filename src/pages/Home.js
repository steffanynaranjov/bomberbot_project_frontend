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
    errorMessage: "Usuario o contraseña invalidos",
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
    axios
      .post(url, this.state.form)
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response);
          window.location = "/About";
        } else {
          this.setState({
            error: true,
            errorMessage: response.data.result.errorMessage,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
          errorMessage: "Usuario o contraseña incorrectos",
        });
      });
  };

  render() {
    return (
      <div className="min-h-screen bg-hero-pattern bg-no-repeat flex justify-start">
        <div className="ml-52 max-w-md w-full mx-auto mt-20 p-6 ">
          <div className="font-semibold text-4xl mb-4 ml-32">Sign In</div>
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
              <Link to="/ForgotPass">Forgot Pasword?</Link>
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
            <div className="text-white w-full py-2 px-4 border border-red-300 bg-red-500 rounded mt-1">
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
