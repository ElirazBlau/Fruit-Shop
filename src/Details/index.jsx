import React from 'react'
import './style.css'


export default function Details({ text, value }) {
    return (
        <div>
        <div className="details">
            <span>{text}:</span>
            <span>{value}</span> 
      
        </div>
    </div>
    )
}