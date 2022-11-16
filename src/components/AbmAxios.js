import { useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { getDefaultNormalizer } from "@testing-library/react";
import "../App.css";

export const AbmAxios = (props) => {
    const [getId, SetGetId] = useState("");
    const [getData, SetGetData] = useState("");
    const apiUrl =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";
    const id = "1";
  
    const GetData = async () => {
      await axios
        .get(apiUrl + id)
        .then((response) => {
          SetGetId(response.data.id);
          SetGetData(response.data);
          console.log(response);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <div>
        <h1>Axios</h1>
        <br />
        GET Id: {getId}
        <br />
        GET Username:
        <br />
        <button onClick={() => GetData()}> GET POST</button>
        <br />
        {!getData ? null : (
          <table className="table">
            <thead>
              <tr>
                <td>nombre</td>
                <td>simbolo</td>
                <td>precio</td>
                <td>MCR</td>
                <td>MC</td>
                <td>imagen</td>
              </tr>
            </thead>
  
            {getData.map((data) => {
              return (
                <tbody>
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.symbol}</td>
                    <td>{data.current_price}</td>
                    <td>{data.market_cap_rank}</td>
                    <td>{data.market_cap}</td>
                    <td>
                      <img src={data.image} className="thumbnail" />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}
      </div>
    );  
  }
  
  