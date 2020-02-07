import React from 'react';
import Card from './Card';

const CardList = ({waifus}) =>{
    return(
        <div>
            {
                waifus.map( waifu => {
                    return(
                            <Card 
                            key={waifu.id} 
                            name={waifu.name} 
                            age={waifu.age} 
                            series={waifu.series} 
                            img={waifu.img}
                            />
                    )
                })
            }
        </div>          
    );
}

export default CardList;