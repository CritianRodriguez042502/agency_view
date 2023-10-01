import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosGetUserBlogReactions } from "../../../redux/index";
import style from "./style_reaction_dashboard.module.css";

export function GetReactionDashboard({ params }) {
  const dispatch = useDispatch();
  const access = JSON.parse(localStorage.getItem("access"));

  const infoGetUserBlogReactions = useSelector(
    (state) => state.getUserBlogReactions
  );
  const [visibilityComments, setVisibilityComments] = useState("none");
  const [visibilityLikes, setVisibilityLikes] = useState("none")

  useEffect(() => {
    dispatch(
      axiosGetUserBlogReactions({
        jwt: access,
        slug: params,
      })
    );
  }, []);

  function likes(e) {
    const selectedLikes = infoGetUserBlogReactions.info.likes?.filter(
      (index) => {
        return index.selected === false;
      }
    );
    return (
      <div>
        {selectedLikes.length !== 0 ? (
          selectedLikes?.map(function (data) {
            return (
              <div key={data.id}>
                <p> Like {data.user.username}</p>
              </div>
            );
          })
        ) : (
          <p> No hay likes</p>
        )}
      </div>
    );
  }

  function visibilityReactionsComments(e) {
    setVisibilityComments("initial");
    setVisibilityLikes("none")
  }

  function whitoutvisibilityComments(e) {
    setVisibilityComments("none");
  }

  function visibilityReactionsLikes (e) {
    setVisibilityLikes("initial")
    setVisibilityComments("none")
  }

  function whitoutvisibilityLikes(e) {
    setVisibilityLikes("none");
  }

  return (
    <main>
      <b onClick={visibilityReactionsComments}> Reacciones </b>

      <div className={style.containerFixed} style={{ display: visibilityComments }}>
        <button onClick={whitoutvisibilityComments}> Cerrar </button>
        <b> Comentarios </b>
        <b onClick={visibilityReactionsLikes}> 👉 </b>
        {infoGetUserBlogReactions.status === "fulfilled" ? (
          infoGetUserBlogReactions.info.comments?.map((data) => {
            return (
              <div style={{ background: "gray" }} key={data.id}>
                <li> {data.user.username} </li>
                <li> {data.comments} </li>
              </div>
            );
          })
        ) : (
          <p>Adios</p>
        )}
      </div>

      <div style={{display : visibilityLikes}} className={style.containerFixed}>
        <button onClick={whitoutvisibilityLikes}> Cerrar </button>
        <b> Likes </b>
        <b onClick={visibilityReactionsComments}> 👈 </b>
        {infoGetUserBlogReactions.status === "fulfilled" ? likes() : false}
      </div>

    </main>
  );
}