import React from "react";

const Form = ({ onClick }) => (
    <form onSubmit={e => onClick(e)}>
        <div>
            <input type='text' name='firstName' placeholder='First name' />
            <input type='text' name='lastName' placeholder='Last name' />
        </div>
        <button type='submit'>Abb</button>
    </form>
)

export default Form;