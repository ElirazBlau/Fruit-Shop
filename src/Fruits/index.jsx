import React from 'react'
import './style.css'
import Fruit from '../Fruit'


export default function Fruits ({name, price, image})  {
function temp(){
  return name+price
}
  return (
   
    <div className="main_fruit">
<img className="img" src={image} alt={name} />
<Fruit key={temp()} name={name} price={price}/>

  
   
 </div> )
}
