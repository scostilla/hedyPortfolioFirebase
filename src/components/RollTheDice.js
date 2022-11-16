import react, { useState } from "react";
import dice1 from "../img/dice1.jpg"
import dice2 from "../img/dice2.jpg"
import dice3 from "../img/dice3.jpg"
import dice4 from "../img/dice4.jpg"
import dice5 from "../img/dice5.jpg"
import dice6 from "../img/dice6.jpg"
import "../App.css";
import { useParams } from "react-router-dom";

export const RollTheDice = () => {
  const [getValue, setValue] = useState("");
  const [getDice, setDice] = useState("");

  function Roll() {

    let value = Math.floor(Math.random() * 6 + 1);

    switch (value.toString()) {
      case "1":
        setDice(dice1);
        break;
        case "2":
          setDice(dice2);
        break;
        case "3":
          setDice(dice3);
        break;
        case "4":
          setDice(dice4);
        break;
        case "5":
          setDice(dice5);
        break;
        case "6":
          setDice(dice6);
        break;
    }
    setValue(value);
  }

  return(
  <div>
    <h1>Presione el boton para girar el dado</h1>
    <button onClick={() => Roll()}>Girar el dado</button>
    <h2>
      El resultado es: <b>{getValue}</b>
    </h2>
    <p>
      <img src={getDice} />
    </p>
  </div>
  );
};
