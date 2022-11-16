import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";

export const AbmFetch = () => {
  const [postId, SetPostId] = useState(0);
  const [company, SetCompany] = useState("");
  const [model, SetModel] = useState("");
  const [status, SetStatus] = useState("");
  const [deletedCompany, SetDeletedCompany] = useState("");
  const [getId, SetGetId] = useState("");
  const [getCompanyData, SetGetCompanyData] = useState("");
  const [getModelData, SetGetModelData] = useState("");
  const [getStatusData, SetGetStatusData] = useState("");

  const apiUrl = "https://63321e993ea4956cfb6d3044.mockapi.io/cars/";

  const id = "2";

  const car = {
    company: "Fiat",
    model: "1600",
    status: "No Compite",
  };

  const PostData = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    };
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    SetPostId(data.id);
    SetCompany(data.company);
    SetModel(data.model);
    SetStatus(data.status);
  };

  const GetData = async () => {
    const response = await fetch(apiUrl + id);
    const data = await response.json();
    SetGetId(data.id);
    SetGetCompanyData(data.company);
    SetGetModelData(data.model);
    SetGetStatusData(data.status);
  };

  const DeleteData = async () => {
    const response = await fetch(apiUrl + id, { method: "DELETE" });
    const data = await response.json();
    SetDeletedCompany(data.company);
  };

  return (
    <div>
      <h1>AUTOS HISTORICOS DEL TURISMO CARRETERA 🏎</h1>
      POST Id: {postId}
      <br />
      POST Marca:{company}
      <br />
      <button onClick={() => PostData()}> Post</button>
      <p />
      Buscar por Id: {getId}
      <br />
      Marca: {getCompanyData}
      <br />
      Modelo: {getModelData}
      <br />
      Estado: {getStatusData}
      <br />
      <button onClick={() => GetData()}> Buscar</button>
      <p />
      DELETE Marca: {deletedCompany}
      <br />
      <button onClick={() => DeleteData()}> Delete</button>
    </div>
  );
};
