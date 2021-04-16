import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getallLeads } from '../../actions/leadsAction'
import "./leads.css"


function AllLeads(props) {
    const dispatch = useDispatch();
    var AllLeads = useSelector(state => state.leads);
    //console.log(AllLeads);

    const [state, setState] = useState({
        "lead": {}
    })

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const header = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
        dispatch(getallLeads(header));
    }, [])

    const getAllLeads = () => {
        if (AllLeads.length > 0) {
            let leads = AllLeads.map(lead => {
                return <tr key={lead._id} onClick={() => {
                    setState((previousState) => ({ ...previousState, "lead": lead }));
                    props.history.push(`/lead/${lead._id}`)  
                }} >
                    <td  >{lead.name} </td>
                    <td>{lead.phone}</td>
                    <td>{lead.email}</td>
                    <td>{lead.technology}</td>
                    <td>{lead.source}</td>
                </tr>
            })
            return leads;
        }
    }

   // console.log(state.lead);
    return (
        <>
            <div className=" leads row">
                <div className="col-6">
                    <h2 style={{ color: "white" }}>Leads</h2>
                </div>
                <div className="col-6">
                    <NavLink to="/createlead" className="btn btn-primary rounded-pill button" > create Contact</NavLink>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <table className="table"><thead><tr>
                        <th scope="col">Name</th>
                        <th scope="col">MobileNo</th>
                        <th scope="col">Email</th>
                        <th scope="col">technology</th>
                        <th scope="col">source</th>

                    </tr >
                    </thead>
                        <tbody>{getAllLeads()}</tbody>

                    </table>


                </div>

            </div>

        </>

    )
}

export default AllLeads;





// props.history.push(`/lead/${lead._id}`)