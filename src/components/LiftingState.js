import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../App.css";


const MyItem = ({item, onClick}) => {
    return (
        <p className="item" onClick={() => onClick(item.id)}>{item.name}</p>
    )
};

const LiftingState = () => {

    const [items, setItems] = useState([
        {name: "apple", selected: false, id: 1},
        {name: "banana", selected: false, id: 2},
        {name: "coconut", selected: false, id: 3},
        {name: "dragonfruit", selected: false, id: 4}
    ]);

    function onClick(id) {
        console.log(id);
        const updatedItems = [...items];
        const item = updatedItems.find((item) => item.id === id);
        item.selected = !item.selected;
        setItems(updatedItems);
        console.log(items);
    }

    function onDelete() {
        const updatedItems = items.filter((item) => item.selected === false);
        setItems(updatedItems);
    }

    return(
        <div className="raised_state">
            {items.map( (item) => {
                return <MyItem item={item} key={item.id} onClick={onClick}/>
            } )}
            <button onClick={onDelete}>Delete selected</button>

        </div>
    )
};

export default LiftingState;