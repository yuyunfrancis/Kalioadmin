import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import img from "../assets/login.png";
import UserContext from "../contexts/UserContext";
import { config } from "../config/config";

const Login = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = React.useState(true);

  const { user, contextError, loginUser } = useContext(UserContext);

  useEffect(() => {
    // ConnectyCube.init(credentials, appConfig);
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  const [phoneNumber, setphoneNumber] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(null);

  useEffect(() => {
    setError();
  }, []);

  const buttonPress = (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      alert("Error", "Enter a valid phone number");
      return;
    }
    setLoading(true);
    axios
      .post(
        `${config.app.api_url}/request-verification-code`,
        {
          phone: phoneNumber,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        setLoading(false);
        if (response.status === 201) {
          navigate("/verify-phone", { state: { phoneNumber } });
        }
        return response.data;
      })
      .catch((err) => {
        setLoading(false);
        alert("Whoups!", "Something went wrong, please try again.");
        setNetworkError(err.message);
        // onToggleSnackBar()
      });
  };

  return (
    <section className="h-screen px-auto lg:px-40">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img src={img} className="w-full" alt="Sample image" />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div className="items-center justify-center self-center content-center mb-0 lg:mb-10">
                <h2 className="text-2xl text-center font-medium font-poppins text-slate-900 mb-2 mr-4">
                  Welcome back Admin
                </h2>
                <p className="text-l text-center mb-0 mr-4">
                  Enter your phone number to login
                </p>
              </div>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>

              {/* <div className="mb-10 mt-10">
                <input
                  type="email"
                  className="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-700 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div> */}

              <div className="mb-10 mt-8">
                <input
                  type="tel"
                  className="form-control block w-full px-4 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-700 focus:outline-none"
                  id="phone"
                  placeholder="+237673993113"
                  value={phoneNumber}
                  onChange={(e) => setphoneNumber(e.target.value)}
                />
              </div>
              {/* 
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-gray-800">
                  Forgot password?
                </a>
              </div> */}
              <div className="lg:text-center lg:pb-0 pb-14">
                <button
                  onClick={buttonPress}
                  type="button"
                  className="px-7 py-3 bg-green-700 text-white font-medium text-sm leading-snug w-full uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg- active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
