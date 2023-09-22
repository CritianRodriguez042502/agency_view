import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  axiosJWTVerify,
  axiosCreateBlogUser,
  axiosCategorys,
} from "../../../redux/index";

export function CreateBlogUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const infoJWTVerifi = useSelector((state) => state.JWTVerify);
  const infoCategory = useSelector((state) => state.category);

  const access = JSON.parse(localStorage.getItem("access"));
  const username = JSON.parse(localStorage.getItem("username"))

  const [dataCreate, setDataCreate] = useState({});
  const [contentCkeditor, setContentCkeditor] = useState("");
  const [selectCategory, setSelectCategory] = useState("Seleccionar categoria");

  useEffect(() => {
    if (!access || !username ) {
      localStorage.clear()
      location.href = "http://localhost:5173/access/signin";
    }
    if (!infoJWTVerifi.status) {
      dispatch(axiosJWTVerify({ token: access }));
    }

    if (infoJWTVerifi.status === "fulfilled" && !infoCategory.info) {
      dispatch(axiosCategorys());
    }

    if (infoJWTVerifi.status === "rejected") {
      location.href = "http://localhost:5173/access/signin";
    }
  }, [infoJWTVerifi.status]);

  function onChangeCreateBlog(e) {
    if (e.target.type === "checkbox") {
      setDataCreate({
        ...dataCreate,
        [e.target.name]: e.target.checked,
      });
    } else {
      setDataCreate({
        ...dataCreate,
        [e.target.name]: e.target.value,
        public : false
      });
    }
  }

  function onClickSelectCategory(e) {
    setSelectCategory(e.target.value);
  }

  function onSubmitCreateBlog(e) {
    e.preventDefault();

    function aggregationData() {
      return [dataCreate]?.map((index) => {
        const datos = {
          title: index.title,
          description: index.description,
          public: index.public,
          content: contentCkeditor,
          category: selectCategory,
        };
        return datos;
      });
    }
    
    const data = {
      jwt: access,
      info: aggregationData()[0],
    };

    if (dataCreate.title && dataCreate.description) {
      if (data.info.category !== "Seleccionar categoria") {
        if (data.info.content) {
          dispatch(axiosCreateBlogUser(data));
          navigate("/dashboard/blogs_user");
        } else {
          alert("Es necesario el apartado de blog");
        }
      } else {
        alert("Debes seleccionar una categoria");
      }
    } else {
      alert("Esta tratando de enviar datos vacios");
    }
  }

  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Crear blog </title>
      </Helmet>

      <section>
        
        <h1> Crea tu blog </h1>

        {infoJWTVerifi.status === "fulfilled" && access ? (
          <form onSubmit={onSubmitCreateBlog}>
            <input
              type="text"
              name="title"
              id="title"
              onChange={onChangeCreateBlog}
            />
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              onChange={onChangeCreateBlog}
            ></textarea>
            <input
              type="checkbox"
              name="public"
              id="public"
              onChange={onChangeCreateBlog}
            />

            <select onClick={onClickSelectCategory}>
              <option>Seleccionar categoria</option>
              {infoCategory.status === "fulfilled" && infoCategory.info
                ? infoCategory.info?.map(function (data) {
                    return <option key={data.id}> {data.name} </option>;
                  })
                : false}
            </select>

            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContentCkeditor(data);
              }}
            />
            <button type="submit"> Enviar </button>
          </form>
        ) : (
          <h1> Cargando... </h1>
        )}
      </section>

    </main>
  );
}
