
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {useSelector,useDispatch} from "react-redux";
import { leadAction } from '../../actions/leadsAction';
function Createlead(props) {
    const [state, setState] = useState({
        name: "",
        email: "",
        source: "",
        technology: "",
        phone: "",
    })
    const { register, handleSubmit, errors } = useForm();
    const dispatch=useDispatch();
    const captureData = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        setState(state => ({
            ...state, [name]: value
        }))
        
    }
    const onSubmit = (data) => {

        console.log(data);
        dispatch(leadAction(data)) 
        props.history.push("/leads")  
    }
   // console.log(state)

  // const AllLeads = useSelector(state => state.leads);
   //console.log("use selcetor allLeads",AllLeads);
    return (
        <div className="container">
                    <div className="card text-white" style={{backgroundColor:" #252C48"}}>
                        <div className="signin"><h3>CREATE LEAD</h3></div>
                        <div className="card-body">
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="email">Name:</label>
                                    <input type="text" className="form-control" onChange={captureData} name="name" placeholder="Enter email" id="name" ref={register( { required: { value: true, message: "name is required" } })} />
                                    {errors.name && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.name.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" onChange={captureData} name="email" placeholder="Enter email" id="email" ref={register( { required: { value: true, message: "Email is required" }, pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Invalid email format' } })} />
                                    {errors.email && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.email.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Mobile:</label>
                                    <input type="text" className="form-control" onChange={captureData} name="phone" placeholder="Enter mobile number" id="mobile" ref={register( { required: { value: true, message: "mobile number is required" }, minLength: { value: 10, message: "Invalid mobile number" }, maxLength: { value: 10, message: "Invalid mobile number" } })} />
                                    {errors.phone && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.phone.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Technology:</label>
                                    <input type="text" className="form-control" onChange={captureData} name="technology" placeholder="Enter Technology" id="technology" ref={register( { required: { value: true, message: "Technology is required" } })} />
                                    {errors.technology && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.technology.message}</p>)}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Source:</label>
                                    <input type="text" className="form-control" onChange={captureData} name="source" placeholder="Enter source" id="source" ref={register({ required: { value: true, message: "source required" } })} />
                                    {errors.source && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.source.message}</p>)}
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="pwd">Leadowner:</label>
                                    <input type="email" className="form-control" name="leadOwner" placeholder="Enter leadowner" id="pwd" {...register('leadOwner', { required: { value: true, message: "leadowner is required" } })} />
                                    {errors.leadOwner && (<p style={{ color: 'red', fontSize: 15 + 'px', textAlign: "center" }} >{errors.leadOwner.message}</p>)}
                                </div> */}
                                <div className="createleadbutton" >
                                    <button style={{ width: 200 + 'px' }} type="submit" className="btn btn-danger">CREATE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    )
}

export default Createlead
