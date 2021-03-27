import React from 'react'

const VehicleItem = props => {
    return (
        <div className='card' key={props.element.id}>
            {props.element.title} - {props.element.model}
            <button>Więcej</button>
        </div>)
}

export default VehicleItem