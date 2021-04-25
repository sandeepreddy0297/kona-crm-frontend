import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteLead, getlead } from '../../actions/leadsAction';
import profile from "../images/profile.png"
import "./lead.css";

function Lead(props) {
    const dispatch = useDispatch()
    const lead = useSelector(state => state.leads);
    const id = props.location.pathname.split("/")[2]
    console.log(lead)
    console.log("props", props)
    console.log('specific lead props', props.location.pathname.split("/")[2])

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

    const EditLead=()=>{
        props.history.push(`/editlead/${id}`)
    }


    return (
        <React.Fragment>
            <div className="text-white">
                <h2 className="px-4" style={{ fontSize: '1.2' + 'em' }}>leads  {lead.name}</h2>
            </div>

            <div className="row px-4 text-white">
                <div className="col-12 displayLead">

                    <div className="row">
                        <div className="col-1 p-3">


                            <img src={profile} alt="..." className="profile-img rounded-circle" />
                        </div>
                        <div className="col-7 px-4 pt-4">
                            <h3>{lead.name}  
                                <i  onClick={EditLead} className='fas fa-pencil-alt px-2 text-white' style={{fontsize:'36'+'px'}}></i>
                                <i onClick={DeleteLead} className='	fas fa-trash-alt px-2 text-white' style={{fontsize:'36'+'px'}}></i>
                            </h3>
                            <div className="row" style={{ fontSize: '0.9' + 'em' }}>
                                <div className="col-6" >
                                    <p>email  <span className="pl-5">{lead.email}</span> </p>
                                    <p>technology  <span className="pl-4">{lead.technology}</span></p>
                                </div>
                                <div className="col-6">
                                    <p>phone   <span className="pl-4">{lead.phone}</span></p>
                                    <p>source   <span className="pl-4">{lead.source}</span></p>
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

                </div>


            </div>



        </React.Fragment>


    )
}

export default Lead

{/* <div className="text-white" style={{ backgroundColor: " #252C48", opacity: "1" }}>
<div className="container-fluid px-4 bordered">
<h2 className="px-4">{lead.name}</h2>

<button>Edit</button>
<button onClick={DeleteLead}>Delete</button>
    <div className="row">
        <div className="col-6 px-5">
            
            <p>email <span className="px-5">{lead.email}</span></p>
            <p>technology <span className="px-5">{lead.technology}</span></p>
        </div>
        <div className="col-6 ">
            <p>phone <span className="px-5">{lead.phone}</span></p>
            <p>source <span className="px-5">{lead.source}</span></p>

        </div>


    </div>
    <hr className="solid" />
    <div className="row">
        <div className="col-12">
            <h1>lead stage</h1>

        </div>

    </div>
    <div className=" row container">
        <div className="row">
            <div className="col-xs-12 ">
                <ul className="nav nav-tabs ">
                    <li ><a className="nav-item nav-link active" data-toggle="tab" href="#home">Home</a></li>
                    <li ><a className="nav-item nav-link " data-toggle="tab" href="#menu1">Menu 1</a></li>
                    <li ><a className="nav-item nav-link " data-toggle="tab" href="#menu2">Menu 2</a></li>
                    <li ><a className="nav-item nav-link " data-toggle="tab" href="#menu3">Menu 3</a></li>
                </ul>

                <div className="tab-content  py-3 px-3 px-0">
                    <div id="home" className="tab-pane fade in active">
                        <h3>HOME</h3>

                    </div>
                    <div id="menu1" className="tab-pane fade in">
                        <h3>Menu 1</h3>

                    </div>
                    <div id="menu2" className="tab-pane fade in">
                        <h3>Menu 2</h3>

                    </div>
                    <div id="menu3" className="tab-pane fade in">
                        <h3>Menu 3</h3>

                    </div>
                </div>


            </div>
        </div>


    </div>
</div>
</div> */}