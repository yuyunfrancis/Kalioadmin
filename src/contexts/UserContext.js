import React, { createContext, useReducer } from "react";

export const UserContext = createContext({});
const initialState = {
  user: null,
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        error: "",
      };
    case "SET_USER_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "REMOVE_USER":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function loginUser(user) {
    try {
      dispatch({ type: "SET_USER", payload: user });
      localStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      dispatch({ type: "SET_USER_ERROR", payload: e.message });
    }
  }

  async function logoutUser() {
    try {
      localStorage.removeItem("user");
      dispatch({ type: "REMOVE_USER" });
    } catch (e) {}
  }

  async function getUser() {
    try {
      const user = localStorage.getItem("user");
      if (user !== null) {
        dispatch({ type: "SET_USER", payload: JSON.parse(user) });
      }
    } catch (e) {}
  }

  async function setUser(user) {
    try {
      console.log("setUser", user);
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "SET_USER", payload: JSON.parse(user) });
    } catch (e) {}
  }

  return (
    <UserContext.Provider
      value={{ ...state, loginUser, logoutUser, getUser, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
