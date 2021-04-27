import React from "react";

const style = {border: '2px solid black'};

const Card = ({id, firstName, lastName, onRemoveCard}) => (
    <div key={id} style={style}>
        <p>First Name: {firstName} </p>
        <p>Last Name: {lastName} </p>
        <button onClick={() => onRemoveCard(id)}>Delete</button>
    </div>
)

export default Card;