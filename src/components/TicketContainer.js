import React, { useEffect, useState } from "react";
import { Dropdown } from "../Assets/Assets";
import axios from 'axios';
import SubjectItem from "./SubjectItem";
import AssignedItem from "./AssignedItem";
import moment from 'moment'
import StarButton from "./StarButton";


const url = 'http://localhost:8010/proxy/api/tickets/assigned?page=1'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2luc3RhbGFuZS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjI2ZDY3YzQ4YjNjZTIwMDZhYmQ4YjkyIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCIsImlhdCI6MTY2NDI4Nzk4MywiZXhwIjoxNjY0Mzc0MzgzLCJhenAiOiJUaUdRRnU0TFhVN1FydUVib1k2ZXFBbUVRMlRvQ0JPYyIsInNjb3BlIjoiIn0.XJoiLG9JD8PHaKTCfb3AyhMKFd5XAFnFT3QT41RDxdY'

function TicketContainer() {
    const [data, setdata] = useState(null)
    const [tagData, setTagData] = useState(null)
    const [starredTickets, setStarredTickets] = useState([])

    useEffect(() => {
        fetchTickets()
    }, [])


    const fetchTickets = async () => {

        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const result = await axios.get(url, config);

            if (result.data.success) {
                const ticketdata = result.data.response.tickets.data
                const tagdata = result.data.response.tags
                setdata(ticketdata)
                setTagData(tagdata)
            } else {
            }
        } catch (error) {
            alert(JSON.stringify(error.message))

        }
    };

    const starTicket = (id) => {
        if (starredTickets.includes(id)) {
            //remove from starred
            setStarredTickets(prev => prev.filter(i => i != id))
        } else {
            //add to starred
            setStarredTickets(prev => [...prev, id])


        }
    }

    return (
        <div className="w-[80%] h-fit mt-4 ml-4 shadow-2xl">

            <table className="w-full">
                <thead>
                    <tr className="w-full border-b-2">
                        <th className=" px-10 py-8"><div className="flex items-center"><h2 className="mr-2">Customer </h2>  <Dropdown /></div> </th>
                        <th ><div className="flex items-center"><h2 className="mr-2">Subject </h2>  <Dropdown /></div> </th>
                        <th ><div className="flex items-center"><h2 className="mr-2">Assigned To </h2>  <Dropdown /></div> </th>
                        <th ><div className="flex items-center"><h2 className="mr-2">Waiting since </h2>  <Dropdown /></div> </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(i => (
                        <tr className="my-6 border-b-[1px]">
                            <td className="px-10 py-8"><h3 className="text-sm">{i.sender_name}</h3> </td>
                            <td> <SubjectItem subject={i.subject} message={i.trimmed_message} tagData={tagData} ticketData={i} /> </td>
                            <td><AssignedItem name={i.name} /></td>
                            <td><h4 className="text-sm">{moment(i.updated_at, "YYYYMMDD").fromNow()}</h4></td>
                            <td className="px-4"><StarButton onClick={() => starTicket(i.ticket_id)} starredTickets={starredTickets} ticketid={i.ticket_id} /></td>
                        </tr>
                    ))}
                </tbody>


            </table>
        </div>
    );
}

export default TicketContainer;
