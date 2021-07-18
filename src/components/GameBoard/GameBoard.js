import React, {useState, useEffect } from 'react';
import HouseCard from '../HouseCard';
import houseList from '../houseList.json';


const shuffleHouses = (arr) =>   {
    for(let i = arr.length-1; i>0; --i) {
        const j = Math.floor(Math.random() * i);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
} 

function GameBoard(props) {
    
    const [houses, setHouses] = useState(() => shuffleHouses(houseList));

    const handleClick = (e) => {

        if(e.visited === false) {
            props.setScore(prev => prev + 1);
            e.visited = true;
        }
        else {
            houses.map(house => house.visited = false);
            props.setScore(0)
        }
    }

    useEffect(() => {
        setHouses(shuffleHouses(houses))
    }, [props.score]);

    const boardList = houses.map(house => {return  <HouseCard click={() => handleClick(house)} house={house} key={house.id}/>})


    return (
        <div className="gameboard-container">
            {boardList}
        </div>
    )
}

export default GameBoard;
