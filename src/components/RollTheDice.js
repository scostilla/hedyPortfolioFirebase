import react, { useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";

export const RollTheDice = () => {
  const [getValue, setValue] = useState("");
  const [getDice, setDice] = useState("");

  function Roll() {

    let value = Math.floor(Math.random() * 6 + 1);

    switch (value.toString()) {
      case "1":
        setDice('https://i.ibb.co/6FGykY6/dice1.jpg');
        break;
        case "2":
          setDice('https://i.ibb.co/kXDVcj6/dice2.jpg');
        break;
        case "3":
          setDice('https://i.ibb.co/5TtzYw0/dice3.jpg');
        break;
        case "4":
          setDice('https://i.ibb.co/NVzdTNC/dice4.jpg');
        break;
        case "5":
          setDice('https://i.ibb.co/8cZBrT0/dice5.jpg');
        break;
        case "6":
          setDice('https://i.ibb.co/55Y2h87/dice6.jpg');
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
