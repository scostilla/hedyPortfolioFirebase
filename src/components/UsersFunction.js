import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";

export function UsersFunction(props) {
  const [getUser, setUser] = useState([
    {
      id: 1,
      userName: "scostilla",
      firstName: "Sebastian",
      lastName: "Costilla",
    },
    {
      id: 2,
      userName: "javicost",
      firstName: "Javier",
      lastName: "Costilla Capobianco",
    },
    {
      id: 3,
      userName: "paulicost",
      firstName: "Paula",
      lastName: "Costilla Capobianco",
    },
    {
      id: 4,
      userName: props.userName,
      firstName: props.firstName,
      lastName: props.lastName,
    },
  ]);

  return (
    <div>
      <p>
        <h1>LISTADO DE USUARIOS</h1>
        <table className="table">
          <tr>
            <th>Nombre de Usuario</th> <th>Nombre</th> <th>Apellido</th>
          </tr>
          {getUser.map((user) => (
            <tr key={user.id}>
              <td>{user.userName}</td> <td>{user.firstName}</td>{" "}
              <td>{user.lastName}</td>
            </tr>
          ))}
        </table>
      </p>
    </div>
  );
}
