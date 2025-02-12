import React from 'react'

import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls=[
    {label: 'Salad', type:'salad'},
    {label: 'Tomato', type:'tomato'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Patty', type:'patty'}
]

const buildControls = (props) => (
    <div className='BuildControls'>
        <p>Curent Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        ))}
        <br/>
        <button 
            className='OrderButton'
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW
        </button>
    </div>
);

export default buildControls;