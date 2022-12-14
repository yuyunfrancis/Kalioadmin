import { useContext, useState } from "react";
import { config } from "../config/config";
import UserContext from "../contexts/UserContext";

const usePostData = (url, method = "POST") => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { user } = useContext(UserContext);

  const postAxiosData = async (data) => {
    try {
      setLoading(true);

      await fetch(`${config.app.api_url}/${url}`, {
        method: method,
        body: data,
        headers: {
          Authorization: "Bearer " + user.token,
        },
      })
        .then((response) => response.json())
        .then((res) => {
          setLoading(false);
          if (
            res.statusCode !== null &&
            res.statusCode !== undefined &&
            res.statusCode >= 300
          ) {
            console.log("res err", res);
            alert("Oups!", "Something went wrong please try again.");
          } else if (res.data && res.status === "success") {
            console.log("res", res);
            alert("success!", res.message);
            setResult(res);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log("err", err);
          alert("Oups!", "Something went wrong please try again.");
        });
    } catch (err) {
      console.log("err", err);
      alert("Oups!", "Something went wrong please try again.");
      setLoading(false);
    }
    console.log("result", result);
    return result;
  };
  return [loading, postAxiosData];
};

export default usePostData;
