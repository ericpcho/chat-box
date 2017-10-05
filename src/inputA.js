import React from 'react';
import './input.css';

export default function Input(props){
    const form = document.getElementById("inputA");
    return (
        <form className="inputA" id="inputA" onSubmit={event => {props.onSubmit();
            event.preventDefault()
            form.reset()}}>
            <input type="text" placeholder="Type Here" name="inputA" onChange={event => props.onChange(event.target.value)} value={props.value}>
            </input>
            <label htmlFor="inputA">Giri</label>
        </form>
    )
}