import React from "react";
import { Apiurl } from "../service/ApiForgotPass";
import axios from "axios";
import { Link } from "react-router-dom";
import logoSignIn from "../images/LogosingIn.png";

class ForgotPass extends React.Component {
  state = {
    form: {
      email: "",
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
    axios
      .post(url, this.state.form)
      .then((response) => {
        if (response.data.status === 200) {
          console.log(response);
          window.location = "/";
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
          errorMessage: "El email no ha sido registrado anteriormente",
        });
      });
  };
  render() {
    return (
      <div className="min-h-screen bg-hero-pattern bg-no-repeat bg-cover md:flex md:justify-start">
        <div className="">
          <img
            className="h-48 w-48 ml-20 md:h-72 md:w-72 lg:w-96 lg:h-96"
            src={logoSignIn}
            alt="logo-codeskills"
          />
        </div>
        <div className="md:ml-52 max-w-md w-full mt-4 p-6 ">
          <div className="font-semibold md:text-4xl text-3xl mb-4 md:ml-32">
            Reset your password
          </div>
          <br></br>
          <form onSubmit={this.handleSubmit} action="" className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="email"
                placeholder="anaperez@g..."
                onChange={this.handleChange}
              ></input>
            </div>
            <button
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
              onClick={this.handleButton}
            >
              Submit
            </button>
            <div className="ml-4 font-medium text-sm text-blue-500">
              <Link to="/">Do you remember your password? Sign in here</Link>
            </div>
          </form>
          <br></br>
          {this.state.error === true && (
            <div className="text-white w-full py-2 px-4 border border-red-300 bg-red-500 rounded mt-1">
              {this.state.errorMessage}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ForgotPass;
