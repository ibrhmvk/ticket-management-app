import React from 'react'
import { truncateString } from './Helpers';
import Tags from './Tags';


const SubjectItem = ({ subject, message, tagData, ticketData }) => {
    return (<div className="w-full my-5">
        <h2 className="text-md font-semibold text-sm">{truncateString(subject, 30)}</h2>
        <p className="text-sm font-normal my-2">{truncateString(message, 50)}</p>



        <Tags tagData={tagData} ticketData={ticketData} />


    </div>

    )
}
export default SubjectItem;