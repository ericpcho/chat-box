import React from 'react';
import './output.css';

export default function Output(props){
     
        const chat = props.value.map((item, index) => {
           return( <li key={index}>
               {item}
               </li>
        )})
       return(<div className = 'chat'>
           <h1>Chat History</h1>
            <ul>
            {chat}
            </ul>
        </div>
    )
}