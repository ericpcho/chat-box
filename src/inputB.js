import React from 'react'

export default function Input(props){
  const form = document.getElementById("inputB");
    return (
        <form id='inputB' className="inputB" onSubmit={event => {props.onSubmit();
            event.preventDefault();
            form.reset()}}>
            <input type="text" placeholder="Type Here" name="inputB" onChange={event => props.onChange(event.target.value)} value={props.value}>
            </input>
            <label htmlFor="inputB">Eric</label>
        </form>
    )
}