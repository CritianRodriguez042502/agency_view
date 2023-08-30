import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { axiosUserData } from "../../../redux/index";

export function InitialDashboard() {
  //  const dispatch = useDispatch()
  //  dispatch(axiosUserData())
  
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Dashboard / user </title>
      </Helmet>

      <div>
        <h1> Dashboard </h1>
      </div>
    </main>
  );
}
