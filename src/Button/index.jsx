import React from 'react'
import './style.css'

export default function Button({ text, value }) {
    return (
        <div className="button">
     <span>  <button>+</button> </span> 
    
     <span>  <button>-</button> </span> 
        </div>
    )
}