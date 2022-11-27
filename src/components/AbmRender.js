import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";
import { useTheme } from "../contexts/ThemeProvider";

export const AbmRender = (props) => {
    const [abmClass, SetAbmClass] = useState("abm-container-red");
    const [getBackgroundColor,setBackgroundColor] = useState("original-background");
    const { toggleTheme, themeName, theme } = useTheme();
  
    if (!props.flag) return null;
  
    const ChangeColor = () => {
      if (getBackgroundColor === "original-background") {
        setBackgroundColor("new-background");
        console.log(getBackgroundColor);
      } else {
        setBackgroundColor("original-background");
        console.log(getBackgroundColor);
      }
    };

    const alertMessage = () => {
      alert("ID: " + props.id +" - Nombre: "+ props.firstName+" - Apellido: "+ props.lastName);
    };
  
    return (
      <div className={getBackgroundColor} id={themeName}>
        <div>
          <h1 className="abm-title">Super ABM</h1>
          <br></br>
          <div className={abmClass}>
            <label>ID:</label>
            <input type="text" value={props.id}></input>
            <label>Nombre</label>
            <input type="text" value={props.firstName}></input>
            <label>Apellido</label>
            <input type="text" value={props.lastName}></input>
            <button type="submit" onClick={alertMessage}>Submit me</button>
          </div>
          <button onClick={() => ChangeColor()}>Cambiar color de fondo</button>
        </div>
      </div>
    );
  }
  
  