
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {useSelector,useDispatch} from "react-redux";
import { leadAction } from '../../actions/leadsAction';
function Createlead() {
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
        dispatch(leadAction(data))   //creatinewlead
    }
   // console.log(state)

  // const AllLeads = useSelector(state => state.leads);
   //console.log("use selcetor allLeads",AllLeads);
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" onChange={captureData} name="name" placeholder="Name" ref={register}/> <br></br><br></br>
                    <input type="text" onChange={captureData} name="phone" placeholder="phone"  ref={register}/> <br></br><br></br>
                    <input type="text" onChange={captureData} name="email" placeholder="email"  ref={register}/> <br></br><br></br>
                    <input type="text" onChange={captureData} name="technology" placeholder="technology"  ref={register}/> <br></br><br></br>
                    <input type="text" onChange={captureData} name="source" placeholder="source"  ref={register}/> <br></br><br></br>
                    <input type="submit" value="submit"></input>

                </form>
            </div>
        </div>
    )
}

export default Createlead
