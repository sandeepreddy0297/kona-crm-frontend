import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux"
import {createNotes} from "../../actions/leadsAction"
import { NavLink } from 'react-router-dom'
import "./Notes.css"
function Tasks(props) {


 
    console.log("path",props)
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



    return (
        <React.Fragment>


<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


    </React.Fragment>
    )
}

export default Tasks
