import React from 'react';
import './criarCard.css';

class CriarCard extends React.Component {
    render() {
        const {name, type, averageWeight, image} = this.props.pokemom
        return (
            <div className='pokemon container'>
                <div className='card'>
                    <div>{name}</div>
                    <div>{type}</div>
                    <div>{averageWeight.value} {averageWeight.measurementUnit}</div>
                </div>
                <div className='card'>
                    <img src={image} alt={name}/>
                </div>
            </div>
        )
    }
}

export default CriarCard;