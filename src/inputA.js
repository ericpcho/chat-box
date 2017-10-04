import React from 'react';
import './input.css';

export default function Input(props){
    return (
        <form className="inputA" onSubmit={event => {props.onSubmit();
            event.preventDefault()}}>
            <input type="text" placeholder="Type Here" name="inputA" onChange={event => props.onChange(event.target.value)} value={props.value}>
            </input>
            <label htmlFor="inputA">Giri</label>
        </form>
    )
}