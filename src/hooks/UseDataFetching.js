import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";

const useDataFetching = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const { user } = useContext(UserContext);

  useLayoutEffect(() => {
    (async function fetchData() {
      setLoading(true);
      await axios
        .get(url, { headers: { Authorization: "Bearer " + user.token } })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("err", err);
          setError(err.message);
          setLoading(false);
        });
    })();
  }, [url]);

  console.log("data", data);

  return [loading, error, data];
};

export default useDataFetching;
