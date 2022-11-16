import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import "../App.css";

export function AsyncFunction(){
    const url = 'https://63321e993ea4956cfb6d3044.mockapi.io/cars'
    const [todo, setTodo] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON =  await response.json()
        setTodo(responseJSON)

    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div>
        <h1>Autos de Turismo Carretera</h1>

        <ul className='title'>
            {!todo ? 'Cargando' :
            todo.map((todo,index) =>{
                return (
                <li className='races' key={index}>{todo.company} - {todo.model}</li>
                )
                })}
        </ul>
    </div>
    );
}