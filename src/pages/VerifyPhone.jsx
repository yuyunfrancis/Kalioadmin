import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { config } from "../config/config";

const VerifyPhone = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log("====================================");
  console.log("phone:", state);
  console.log("====================================");
  const [otp, setOtp] = useState("");

  const { user, loginUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [user]);

  const resendOtp = () => {
    setLoading(true);
    axios
      .post(`${config.app.api_url}/request-verification-code`, {
        phone: state.phoneNumber,
      })
      .then((response) => {
        setLoading(false);
        return response.data;
      })
      .catch((err) => {
        setLoading(false);
        console.log("axios error", err);
      });
  };

  const storeSessionData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem("user", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const verifyOtp = () => {
    const newOtp = otp;
    if (newOtp.length !== 4) {
      alert("Error!", "Please enter the verification code");
      return;
    }
    setLoading(true);
    const user = axios
      .post(`${config.app.api_url}/verify-phone`, {
        phone: state.phoneNumber,
        code: newOtp,
      })
      .then(async (response) => {
        setLoading(false);
        if (response.data.verificationStatus.status === "approved") {
          const userLog = response.data.user;
          userLog.token = response.data.access_token;
          console.log("====================================");
          console.log("UserToken", userLog);
          console.log("====================================");
          await loginUser(userLog);
          // await Updates.reloadAsync();
        }
      })
      .catch((err) => {
        console.log("axios error", err);
      });
  };

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-xl font-bold text-center text-green-700 sm:text-3xl">
          Verify Phone Number
        </h1>

        <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
          Please enter the verification code sent to
        </p>
        <p className="max-w-md mx-auto mt-1 text-center text-green-700 font-semibold">
          {state.phoneNumber}
        </p>

        <div className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
          <div>
            <label htmlFor="to" className="text-sm font-medium">
              Verification code
            </label>

            <div className="relative mt-5">
              <input
                type="tel"
                name="to"
                id="to"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="form-control block w-full px-4 py-2.5 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-700 focus:outline-none"
                placeholder="Pin"
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={verifyOtp}
            className="block w-full px-5 py-3 text-sm font-medium text-white bg-green-700 hover:bg-green-600 rounded-lg"
          >
            Verify
          </button>

          <p className="text-sm text-center text-gray-500">
            Didn't receive the code{" "}
            <button
              className="underline hover:text-green-700"
              onClick={resendOtp}
            >
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhone;
