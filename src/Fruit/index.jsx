import React from 'react'
import './style.css'
import Details from '../Details'
import Button from '../Button'

export default function Fruit({ name, price }) {

    return (
        <div>
        <div className="fruit">
                <Details text={"Name"} value={name} />
                <Details text={"Price"} value={price} />
        </div>
      <div>
        <Button/> </div>
        </div>
    )
}
