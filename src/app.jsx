import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import {RouterProvider} from "react-router-dom"
import { Redirects, Redirects2 } from "./routes/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider store={store}>
      <Redirects2/>
    </Provider>
  </>
);
