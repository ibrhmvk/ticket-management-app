import React from 'react'
import { StarIcon, UnStarIcon } from '../Assets/Assets'

const StarButton = ({ onClick, starredTickets,ticketid }) => {
    return (
        <button onClick={onClick}>
            {starredTickets.includes(ticketid) ? <StarIcon/>:<UnStarIcon/>}
        </button>
    )
}

export default StarButton