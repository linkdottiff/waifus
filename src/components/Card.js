import React from 'react';
import './card.css';

const Card = ({name, age, series, img}) => {
        return (
            <div className='bg-dark-gray dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
                <img className='br3' src={img} alt="waifu"/>
                <div className='near-white'>
                    <h2>{name}</h2>
                    <p>Series: {series}</p>
                    <p>Age: {age}</p>
                </div>
            </div>   
        );
}

export default Card;