import React from 'react';
import './card.styles.css'

const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.id}?set=set2`} alt='Monster' />
        <h1>{props.monster.name}</h1>
    </div>
);

export default Card;