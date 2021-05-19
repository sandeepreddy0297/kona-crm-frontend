import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteLead, getlead } from '../../actions/leadsAction';
import profile from "../images/profile.png"
import "./lead.css";
import Notes from './Notes';
import Tasks from './Tasks';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

function Lead(props) {

    const dispatch = useDispatch()
    const lead = useSelector(state => state.leads);
    const id = props.location.pathname.split("/")[2]
    console.log(lead)
    console.log("props", props)
    console.log('specific lead props', id)

    useEffect(() => {
        dispatch(getlead(id))
    }, [])

    const DeleteLead = (event) => {
        // event.preventDefault();
        dispatch(deleteLead(id));
        if (lead) {
            props.history.push("/leads")
        }
    }

    const EditLead = () => {
        props.history.push(`/editlead/${id}`)
    }


    return (
        <React.Fragment>
            <BrowserRouter>
            <div className="text-white">
                <p className="px-4" style={{ fontSize: '1.5' + 'em' }}>leads  >  {lead.name}</p>
            </div>

            <div className="row px-4 text-white">
                <div className="col-12 displayLead">

                    <div className="row">
                        <div className="col-1 p-3">


                            <img src={profile} alt="..." className="profile-img rounded-circle" />
                        </div>
                        <div className="col-7 px-4 pt-4">
                            <h4 className="pb-4">{lead.name}
                                <i onClick={EditLead} className='fas fa-pencil-alt px-2 text-white '></i>
                                <i onClick={DeleteLead} className='	fas fa-trash-alt px-2 text-white ' ></i>
                            </h4>
                            <div className="row" style={{ fontSize: '15' + 'px' }}>
                                <div className="col-6" >
                                    <p>Email  <span style={{ paddingLeft: "60" + "px" }}>{lead.email}</span> </p>
                                    <p>Technology  <span className="pl-4">{lead.technology}</span></p>
                                </div>
                                <div className="col-6">
                                    <p>Phone   <span className="pl-4">{lead.phone}</span></p>
                                    <p>Source   <span className="pl-4">{lead.source}</span></p>
                                </div>

                            </div>

                            <hr />
                            <div style={{ fontSize: '0.9' + 'em' }}>
                                <p>lead owner   <span className="pl-4">yet to write</span></p>

                            </div>

                        </div>
                        <div className="col-4">
                            <h1>extra attachment</h1>
                        </div>
                    </div>



                    <hr />
                    <div>
                        <h1>Lead stage</h1>


                    </div>

                    <hr />
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <NavLink to={`/notes/${lead._id}`} className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</NavLink>
                            <a className="nav-item nav-link" id="nav-notes-tab" data-toggle="tab" href="#nav-notes" role="tab" aria-controls="nav-notes" aria-selected="false">NOTES</a>
                            <a className="nav-item nav-link" id="nav-tasks-tab" data-toggle="tab" href="#nav-tasks" role="tab" aria-controls="nav-tasks" aria-selected="false">TASKS</a>
                            <a className="nav-item nav-link" id="nav-checklist-tab" data-toggle="tab" href="#nav-checklist" role="tab" aria-controls="nav-checklist" aria-selected="false">CHECKLIST</a>
                            <a className="nav-item nav-link" id="nav-email-tab" data-toggle="tab" href="#nav-email" role="tab" aria-controls="nav-email" aria-selected="true">EMAIL</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            Home
                         </div>
                        <div className="tab-pane fade" id="nav-notes" role="tabpanel" aria-labelledby="nav-notes-tab">
                        {/* <Notes /> */}

                        <Route exact path={`/notes/${lead._id}`}   > <Notes /> </Route>
                        </div>
                        <div className="tab-pane fade" id="nav-tasks" role="tabpanel" aria-labelledby="nav-tasks-tab">
                            <Tasks/>
                        </div>
                        <div className="tab-pane fade" id="nav-checklist" role="tabpanel" aria-labelledby="nav-checklist-tab" >
                            CHECKLIST
                        </div>
                        <div className="tab-pane fade" id="nav-email" role="tabpanel" aria-labelledby="nav-email-tab">
                            EMAILS
                        </div>
                    </div>


                </div>


            </div>


  </BrowserRouter>
        </React.Fragment>


    )
}

export default Lead


