import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux"
import {createNotes} from "../../actions/leadsAction"
import "./Notes.css"
function Notes(props) {
  
    // console.log("path",props)
   const dispatch=useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const [state, setState] = useState({
        notes: ""
    })

    const captureData = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setState(state => ({
            ...state, [name]: value
        }))
    }


    const onSubmit = (data) => {

        console.log(data);
        dispatch(createNotes(data))
        // props.history.push("/leads")  
    }

    // const newNotes = (event)=>{
    //     console.log("notes state ",state)
    // }



    return (
        <React.Fragment>

            <div className="row">
                <div className="col-12 pt-3">
                    {/* <NavLink to="#" className="btn float-right mr-4">Create Note</NavLink> */}

                    <NavLink to="#" className="btn borderless float-right mr-4" data-toggle="modal" data-target="#exampleModal">
                        Create Note
                    </NavLink>


                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header" style={{ backgroundColor: " #E9204F" }}>
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body" style={{ backgroundColor: "#252C48" }}>
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <textarea rows="10" onChange={captureData} name="notes" placeholder="start typing to leave a note..." className="textarea" style={{ backgroundColor: "#252C48" }} ref={register({ required: { value: true, message: "name is required" } })} />


                                        <div className="modal-footer" style={{ backgroundColor: "#252C48" }}>

                                            <button type="submit" className="btn mr-auto">Save Note</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <h6 className="pl-4 ">june </h6>
            <div className="row pt-4 notesDisplay" >
                <div className="col-6">
                    <p style={{ color: "#E9204F" }}>Note</p>
                </div>
                <div className="col-6">
                    <p className="float-right">Delete</p>
                </div>


                <div className="px-3 notesText" >
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="float-right">edit</p>
                    <hr />
                    <div>
                        <p>User <span style={{ fontSize: "0.9" + "em" }}>left a note</span></p>
                    </div>
                </div>



            </div>


        </React.Fragment>
    )
}

export default Notes
