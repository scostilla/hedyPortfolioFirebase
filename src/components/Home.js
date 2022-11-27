import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import { RollTheDice } from "./RollTheDice.js";
import { Welcome } from "./Welcome.js";
import { UsersComponent } from "./UsersComponent.js";
import { UsersFunction } from "./UsersFunction.js";
import { Cars } from "./Cars.js";
import { AsyncFunction } from "./AsyncFunction.js";
import { AbmRender } from "./AbmRender.js";
import { AbmFetch } from "./AbmFetch.js";
import { AbmAxios } from "./AbmAxios.js";
import { EventParagraph } from "./Paragraph";
import { ReactForms } from "./ReactForms.js";
import SyncedInputs from "./SyncedInputs.js";
import ContextMain from "./ContextMain.js";
import ThinkingInReact from "./ThinkingInReact.js";

import { useTheme } from "../contexts/ThemeProvider";
import ReactSwitch from "react-switch";

const Home = () => {
  const [getName, setName] = useState("");
  const [getUserName, setUserName] = useState("");
  const [getFirstName, setFirstName] = useState("");
  const [getLastName, setLastName] = useState("");
  const [getFlag, setFlag] = useState("");
  const { toggleTheme, themeName, theme } = useTheme();

  return (
    <div className="main" id={themeName}>
      <div className="head" id={themeName}>
        <Router>
        <label className="labelSwitch">{themeName === "light" ? "Modo Claro" : "Modo Oscuro"}</label>
          <div className="switch">
            <ReactSwitch
              onChange={toggleTheme}
              checked={themeName === "dark"}
            />
          </div>
          <h1 className="h1" align="center" id={themeName}>Hedy Portfolio - Sebastian R. Costilla</h1>
          <div className="nest-header">
            <h4 id={themeName}>
              <Link to={"./RollTheDice"}>Actividad 1 - Girar el Dado</Link>
              <p />
              <Link to={"./Welcome"}>Actividad 2 - Mensaje de Bienvenida </Link>
              <input
                className="input"
                type="text"
                value={getName}
                onChange={(e) => setName(e.target.value)}
                placeholder="ingrese su nombre"
              />
              <p />
              <Link to={"./UsersComponent"}>
                Actividad 3 - Componente Usuarios{" "}
              </Link>
              <p />
              <Link to={"./UsersFunction"}>
                Actividad 4 - Funcion Usuarios{" "}
              </Link>
              <input
                type="text"
                className="input"
                value={getUserName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Nombre de usuario"
              />
              <input
                type="text"
                className="input"
                value={getFirstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Nombre"
              />
              <input
                type="text"
                className="input"
                value={getLastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Apellido"
              />
              <p />
              <Link to={"./Cars"}>Actividad 5 - Autos y Suma Aleatoria </Link>
              <p />
              <Link to={"./AsyncFunction"}>
                Actividad 6 - funcion asincronica{" "}
              </Link>
              <p />
              <Link to={"./AbmRender"}>Actividad 7 - Renderizado </Link>
              <input
                type="Checkbox"
                value={getFlag}
                onChange={(e) => {
                  setFlag(e.target.checked);
                }}
              />
              <label className="label" id={themeName}>Activar CheckBox para renderizar</label>
              <h4 className="h4" id={themeName}>Mostrará los valores de los input del punto 4</h4>
              <p />
              <Link to={"./AbmFetch"}>Actividad 8 - Fetch </Link>
              <p />
              <Link to={"./AbmAxios"}>Actividad 9 - Axios </Link>
              <p />
              <Link to={"./EventParagraph"}>Actividad 10 - Eventos </Link>
              <p />
              <Link to={"./ReactForms"}>Actividad 11 - Formularios </Link>
              <p />
              <Link to={"./SyncedInputs"}>
                Actividad 12 - Input Sincronizados{" "}
              </Link>
              <p />
              <Link to={"./ContextMain"}>Actividad 13 - React Context </Link>
              <p />
              <Link to={"./ThinkingInReact"}>
                Actividad 14 - Thinking In React{" "}
              </Link>
            </h4>
            <Routes>
              <Route path="/RollTheDice" element={<RollTheDice />} />
              <Route path="/Welcome" element={<Welcome name={getName} />} />
              <Route path="/UsersComponent" element={<UsersComponent />} />
              <Route
                path="/UsersFunction"
                element={
                  <UsersFunction
                    userName={getUserName}
                    firstName={getFirstName}
                    lastName={getLastName}
                  />
                }
              />
              <Route path="/Cars" element={<Cars />} />
              <Route path="/AsyncFunction" element={<AsyncFunction />} />
              <Route
                path="/AbmRender"
                element={
                  <AbmRender
                    flag={getFlag}
                    id={getUserName}
                    firstName={getFirstName}
                    lastName={getLastName}
                  />
                }
              />
              <Route path="/AbmFetch" element={<AbmFetch />} />
              <Route path="/AbmAxios" element={<AbmAxios />} />
              <Route path="/EventParagraph" element={<EventParagraph />} />
              <Route path="/ReactForms" element={<ReactForms />} />
              <Route path="/SyncedInputs" element={<SyncedInputs />} />
              <Route path="/ContextMain" element={<ContextMain />} />
              <Route path="/ThinkingInReact" element={<ThinkingInReact />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Home;
