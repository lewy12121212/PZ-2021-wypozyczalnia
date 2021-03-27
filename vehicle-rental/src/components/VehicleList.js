import React from 'react'
import VehicleItem from './VehicleItem'

class VehicleList extends React.Component {
    state = {
        elements: [
            { id: '01', title: 'Pojazd 1', model: 'VW'},
            { id: '02', title: 'Pojazd 2', model: 'Mercedes'},
            { id: '03', title: 'Pojazd 3', model: 'Wardburg'}
        ]
    }

    render(){
        const elements = this.state.elements.map(e => {
            return <VehicleItem element={e} />
        })
        return(
            <div>
                Todo app
                {elements}
            </div>
        )
    }
}

export default VehicleList