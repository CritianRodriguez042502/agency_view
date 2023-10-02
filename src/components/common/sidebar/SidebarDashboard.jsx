import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./style_sidebar_dashboard.module.css";

export function SidebarDashboard() {
  const dispatch = useDispatch();

  const infoUserData = useSelector((state) => state.userData);

  const [updateDataUser, setUpdateDataUser] = useState({});
  const [visibility, setVisibility] = useState("none");

  // QUEDAMOS AQUI EN EL SISTEMA DE ACTUALIZACION DE DATOS DE USUARIO
  useEffect(() => {
    if (infoUserData.status === "fulfilled") {
      setUpdateDataUser({
        first_name: infoUserData.info.first_name,
        last_name: infoUserData.info.last_name,
        username: infoUserData.info.username,
      });
    }
  }, [infoUserData.info]);

  function onChangeUpdateDataUser(e) {
    setUpdateDataUser({
      ...updateDataUser,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitUpdateDataUser(e) {
    e.preventDefault();

    if (updateDataUser.first_name && updateDataUser.last_name && updateDataUser.username) {
      
    } else {
      alert("Estas tratando de enviar datos vacios")
    }
  }

  function visibilityOptions() {
    setVisibility("initial");
  }

  function withoutVisibilityOptions() {
    setVisibility("none");
  }

  return (
    <main className={style.containerLayout}>
      <nav className={style.containerLiks}>
        <Link to={"/home"}> Impact x </Link>
        <Link to={"/dashboard"}> Inicio </Link>
        <Link to={"/dashboard/blogs_user"}> Blogs </Link>
        <p onClick={visibilityOptions}> Ajustes </p>
      </nav>

      <div className={style.containerFixed} style={{ display: visibility }}>
        <p onClick={withoutVisibilityOptions}> Xd </p>
        <p> Modificar datos de usuario </p>
        <form onSubmit={onSubmitUpdateDataUser}>
          {Object.keys(updateDataUser).length !== 0 ? (
            <div>
              <label htmlFor="first_name"> Primer nombre </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={updateDataUser.first_name}
                onChange={onChangeUpdateDataUser}
                required
              />
              <label htmlFor="last_name"> Segundo nombre</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={updateDataUser.last_name}
                onChange={onChangeUpdateDataUser}
                required
              />
              <label htmlFor="username"> nombre de usuario </label>
              <input
                type="text"
                name="username"
                id="username"
                value={updateDataUser.username}
                onChange={onChangeUpdateDataUser}
                required
              />
              <button type="submit"> Actualizar </button>
            </div>
          ) : (
            <p> Error </p>
          )}
        </form>
      </div>
    </main>
  );
}