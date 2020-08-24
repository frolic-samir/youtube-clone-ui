import React, { useReducer } from "react";
import { createContext } from "react";

const Store = createContext();

const InitialState = {
  headerBarClicked: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HeadBar_Clicked":
      return {
        ...state,
        headerBarClicked: true,
      };
    default:
      return alert("error");
  }
};

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  <Store.Provider value={}>{props.children}</Store.Provider>;
};
