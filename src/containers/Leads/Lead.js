import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteLead, getlead } from '../../actions/leadsAction';

import "./le.css";

function Lead(props) {
    const dispatch = useDispatch()
    const lead = useSelector(state => state.leads);
    const id = props.location.pathname.split("/")[2]
    console.log(lead)
    console.log("props",props)
    console.log('specific lead props', props.location.pathname.split("/")[2])

    useEffect(() => {
        dispatch(getlead(id))
    }, [])

    const DeleteLead = (event) => {
       // event.preventDefault();
        dispatch(deleteLead(id));
        if(lead){
            props.history.push("/leads")
        }
    }

    // const EditLead=()=>{
    //     props.history.push(`/editlead/${id}`)
    // }


    return (
        <div className="text-white" style={{ backgroundColor: " #252C48", opacity: "1" }}>
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
        </div>
    )
}

export default Lead

{/* <nav>
                                <div className="nav nav-tabs " >
                                    <a className="nav-item nav-link active" id="nav-home" data-toggle="tab" href="#home" role="tab"  >Home</a>
                                    <a className="nav-item nav-link" id="nav-profile" data-toggle="tab" href="#profile" role="tab" >Profile</a>
                                    <a className="nav-item nav-link" id="nav-contact" data-toggle="tab" hr="#contact" role="tab" >Contact</a>
                                    <a className="nav-item nav-link" id="nav-about" data-toggle="tab" href="#about" role="tab" >About</a>
                                </div>
                            </nav>
                            <div className="tab-content py-3 px-3 px-sm-0" >
                                <div className="tab-pane fade in active " id="home" role="tabpanel" >
                                    Home
                                    </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" >
                                    profile
                                    </div>
                                <div className="tab-pane fade" id="contact" role="tabpanel" >
                                    contact
                                    </div>
                                <div className="tab-pane fade" id="about" role="tabpanel" >
                                    about
                                      </div>
                            </div> */}