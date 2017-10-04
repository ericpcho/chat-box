import React from 'react'

export default function Input(props){
    return (
        <form className="inputB" onSubmit={event => {props.onSubmit();
            event.preventDefault()}}>
            <input type="text" placeholder="Type Here" name="inputB" onChange={event => props.onChange(event.target.value)} value={props.value}>
            </input>
            <label htmlFor="inputB">Eric</label>
        </form>
    )
}