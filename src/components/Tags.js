import React from 'react'
import { TicketTag } from '../Assets/Assets'

function Tags({ tagData, ticketData }) {
    return (

        <div className='flex items-center '>
            <span className='flex items-center bg-[#FFE57F] mr-2 px-2 rounded-xl'>
                <TicketTag />
                <h4 className='ml-2 text-[13px]'>important</h4>
            </span>
            <span className='flex items-center bg-[#FFE57F] mr-2 px-2 rounded-xl'>
                <TicketTag />
                <h4 className='ml-2 text-[13px]'>important</h4>
            </span>
            <span className='flex items-center bg-[#FFE57F] mr-2 px-2 rounded-xl'>
                <TicketTag />
                <h4 className='ml-2 text-[13px]'>important</h4>
            </span>
            {/* {console.log(ticketData.tags)}
        {console.log(tagData[0].tag_id)}
        
        {ticketData.tags.map(x => {
            return parseInt(x, 10);
        })} */}
        </div>

    )
}

export default Tags