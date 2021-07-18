import React from 'react'

const HouseCard = (props) => {
    return(
        <div className="card-container">
            <div onClick={props.click}>
                <img src={props.house.photoUrl}></img>
            </div>
            <div>{props.house.name}</div>
        </div>
    )
}

export default HouseCard;