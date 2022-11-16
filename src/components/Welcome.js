import { useParams } from "react-router-dom";
import react, { useState } from "react";
import "../App.css";

export const Welcome = (props) => {

    return(
  <div>
    <h1>Bienvenido {props.name}</h1>
  </div>
  );
};
