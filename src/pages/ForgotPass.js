import React from "react";
import { Apiurl } from "../service/ApiForgotPass";
import axios from "axios";
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
      <div className="min-h-screen bg-hero-pattern bg-no-repeat flex justify-start">
        <div className="ml-52 max-w-md w-full mx-auto mt-20 p-6 ">
          <div className="font-semibold text-4xl mb-4 ml-28">
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
          </form>
          <br></br>
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

export default ForgotPass;
