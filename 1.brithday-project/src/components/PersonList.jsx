import data from "../data/data";
import React from "react";

const PersonList = ({ item, deletePerson }) => {
    const { id, name, age, image } = item;

 

    return (
        <div>
            <h3>{name}</h3>
            <h5>{age}</h5>
            <img width={200} src={image} alt={name} />
            <button onClick={() => deletePerson(id)}>delete</button>
        </div>
    );
};

export default PersonList;
