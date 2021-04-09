import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux"
import registerAction from "../../actions/userAction";
import "./Register.css";
function Register() {
    const {register,handleSubmit,errors}=useForm();
   const dispatch = useDispatch();

    const [state,setState]=useState(
        {
            
            lastName: "",
            email: "",
            password: "",
            mobileNo: "",
            city: ""

        }
    )

   const captureData=(event)=>{
        var name=event.target.name;
        var value=event.target.value;
        setState(state=>({
            ...state,[name]:value
        }))
    }

    const onSubmit = (data) => {

        console.log(data)
        dispatch(registerAction(data))


    }
    return (
        <div className="register">
        <div id="login" >
            <h1 className="text-center text-white pt-5 headcolor" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h1>

            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12 text-center">
                            <form id="login-form" className="form" onSubmit={handleSubmit(onSubmit)} >
                                <h3 className="text-center text-info" ><span style={{ color: "white" }}>SIGN IN</span></h3>


                                <div className=" txt_field form-group">

                                    <input type="text" name="firstName" onChange={captureData} className="form-control" placeholder="Firstname" ref={register({required:true})} />
                                    {errors.firstName && <p style={{ color: "red" }}>firstName  required</p>}
                                </div>

                                <div className=" txt_field form-group">

                                    <input type="text" name="lastName" onChange={captureData} className="form-control" placeholder="Lastname" ref={register({required:true})}/>
                                    {errors.lastName && <p style={{ color: "red" }}>lastName  required</p>}
                                </div>



                                <div className=" txt_field form-group">

                                    <input type="text" name="email" onChange={captureData} className="form-control" placeholder="email" ref={register({required:true})} />
                                    {errors.email && <p style={{ color: "red" }}>email  required</p>}
                                </div>
                                <div className=" txt_field form-group">

                                    <input type="password" name="password" id="password" onChange={captureData} className="form-control" placeholder="password" ref={register({required:true})} />
                                    {errors.password && <p style={{ color: "red" }}>password  required</p>}

                                </div>

                                <div className=" txt_field form-group">

                                    <input type="number" name="mobileNo" onChange={captureData} className="form-control" placeholder="mobile no" ref={register({required:true})}/>
                                    {errors.mobileNo && <p style={{ color: "red" }}>mobileNo  required</p>}
                                </div>
                                <div className=" txt_field form-group">

                                    <input type="text" name="city" onChange={captureData} className="form-control" placeholder="city" ref={register({required:true})}/>
                                    {errors.city && <p style={{ color: "red" }}>city  required</p>}
                                </div>
                                <div className="form-group">

                                    <input type="submit" name="register"  className="btn btn-info btn-md" value="Register" />

                                </div>
                                <div >

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register
