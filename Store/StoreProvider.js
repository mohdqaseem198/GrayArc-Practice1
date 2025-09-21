
"use client"; // very important

import { Provider } from "react-redux";
import  AppStore  from "../Store/AppStore"; // adjust path to your store

export function StoreProvider({ children }) {
  return <Provider store={AppStore}>{children}</Provider>;
};
