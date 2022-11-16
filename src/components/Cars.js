import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";


export const Cars = () => {
    const [marca, setMarca] = useState("Mitsubishi");

    const [racings, setRacings] = useState([
        { id: 1, eventName: "Rally de los 1000 Lagos", typeOfSoprt: "rally", biggestWinner: "Hannu Mikkola" },
        { id: 2, eventName: "Paris-Dakar", typeOfSoprt: "rally raid", biggestWinner: "stephan pheterhansel" },
        { id: 3, eventName: "Grand Prix Monaco", typeOfSoprt: "Formula 1", biggestWinner: "Ayrton Senna" },
        { id: 4, eventName: "500 Millas de Daytona", typeOfSoprt: "NASCAR Cup Series", biggestWinner: "Richard Petty" }
    ]);

    const [count, setCount] = useState(0);
    function RandomNumber() {
        return Math.floor(Math.random() * 10 + 1);
    }
    let value = RandomNumber();

    return (
        <div >
            <div className="title">
                <h1 onClick={() => setMarca("Subaru")}>{marca}</h1>
            </div>
            <p>valor a sumar: {value}</p>
            <p>valor: {count}</p>

            <button onClick={() => setCount(count + value)}>Sumar valor alatorio</button>
            <p>
                <h1>CARRERAS MAS FAMOSAS</h1>
                <table className="table">
                    <tr>
                        <th>Evnto</th> <th>Tipo de Carrera</th> <th>Maximo Ganador</th>
                    </tr>
                    {racings.map((race) => (
                            <tr key={race.id}>
                                <td>{race.eventName}</td> <td>{race.typeOfSoprt}</td> <td>{race.biggestWinner}</td>
                            </tr>
                    ))}
                </table>
            </p>
        </div>
    )
}
