import React from "react";

import { Helmet } from "react-helmet";
import { Layout } from "../../../../components/index";
import Typewriter from "typewriter-effect";
import style from "./style_initial.module.css";

export function Initial() {
  



  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Inicio </title>
      </Helmet>
      <Layout>
        <section className={style.containerInitial1}>
          <aside className={style.containerContent1}>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Software y soluciones digitales adaptadas a tu negocio.",
                    "Sistemas personalizado para tu Éxito empresarial.",
                    "Diseño a la altura de tus expectativas.",
                    "Convierte tus ideas en software de calidad.",
                    "Software que se ajusta a tus Requisitos",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 25,
                }}
              />
            </h1>
            <div className={style.tecnologyAndDesignContainer}>
              <b> Desarrollo web </b>
              <b> Diseño </b>
            </div>
          </aside>

          <aside className={style.containerImg1}>
            <img
              src="https://us.123rf.com/450wm/theerakit/theerakit1711/theerakit171100005/90426044-icono-de-correo-electr%C3%B3nico-sobre-fondo-blanco-signo-de-correo-electr%C3%B3nico-estilo-plano-s%C3%ADmbolo-de.jpg"
              alt="img"
            />
          </aside>
        </section>

        <section className={style.containerInitial2}>
          <h1> ¿Porque elegir nuestra agencia? </h1>

          <div className={style.containerContent2}>
            <h2> Las ventajas de la plataforma</h2>
            <div className={style.containerOfAdvantages}>
              <article className={style.containerOfAdvantagesItem}>
                <h1> 01 </h1>
                <div>
                  <h3> Agil desarrollo </h3>
                  <p>
                    Los productos digitales se trabajan con metodologiias agiles
                    por lo tanto podemos garantizar un desarrollo fluido y
                    eficiente
                  </p>
                </div>
              </article>

              <article className={style.containerOfAdvantagesItem}>
                <h1> 02 </h1>
                <div>
                  <h3> Diseños atractivos </h3>
                  <p>
                    En nuestra agencia de desarrollo de productos de IMPACT X
                    desarrollamos interfaces de usuario funcionales y
                    atractivas.
                  </p>
                </div>
              </article>

              <article className={style.containerOfAdvantagesItem}>
                <h1> 03 </h1>
                <div>
                  <h3> Optimizacion </h3>
                  <p>
                    Optimizamos continuamente nuestros procesos para ofrecer
                    productos de gran calidad mientras reducimos los costos y
                    tiempos de desarrollo
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={style.containerInitial3}>
          <aside className={style.containerContent3}>
            <h1>Construimos mas que solo aplicaciones</h1>
            <p>
              IMPACT X es una agencia de diseño, desarrollo y mantenimiento de
              productos digitales. cuenta con expertos de mas de 5 años de
              experiencia que utilizan de forma eficiente y eficaz las
              herramientas de punta en el desarrollo y diseño para la creacion
              de proyectos desde cero.
            </p>
          </aside>
          <aside className={style.containerImg2}>
            <img
              src="https://us.123rf.com/450wm/theerakit/theerakit1711/theerakit171100005/90426044-icono-de-correo-electr%C3%B3nico-sobre-fondo-blanco-signo-de-correo-electr%C3%B3nico-estilo-plano-s%C3%ADmbolo-de.jpg"
              alt="img"
            />
          </aside>
        </section>

        <section className={style.containerInitial4}>
          <aside className={style.containerContent4}>
            <div className={style.containerImg3}>
              <img
                src="https://femcet.com/wp-content/uploads/2021/05/atencion-al-cliente-jpg-800.jpg"
                alt="img"
              />
            </div>
            <div>
              <h1> ¿Tienes dudas?</h1>
              <p>
                Solicita una demostración con nuestro equipo, totalmente gratis
                y sin compromiso.
              </p>
              <button type="button"> Solicitar demostracion </button>
            </div>
          </aside>
        </section>
      </Layout>
    </main>
  );
}
