import React from 'react'

export default function Input(props){
    return (
        <form className="inputA" onSubmit={event => {props.onSubmit();
            event.preventDefault()}}>
            <input type="text" placeholder="Type Here" name="inputA" onChange={event => props.onChange(event.target.value)} value={props.value}>
            </input>
            <label htmlFor="inputA">inputA</label>
        </form>
    )
}