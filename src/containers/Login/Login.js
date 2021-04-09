import React, { useState,useEffect } from 'react'
import { useForm } from "react-hook-form";
import {useDispatch,useSelector} from "react-redux"
import "./login.css";
import {loginAction} from "../../actions/userAction"
import { useHistory } from 'react-router';
function Login() {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const { register, handleSubmit, errors } = useForm();
    const dispatch=useDispatch();
    const history=useHistory();
   const isLogin = useSelector(state =>state.login)
    console.log(isLogin)
    
    const captureData = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        setState(prestate => ({
            ...prestate, [name]: value
        }))
        
    }

    
    const onSubmit = (state) => {

        console.log(state);
        dispatch(loginAction(state)) //newuser login

        // dispatch({
        //     type:"LOGIN",
        //     payload:{
        //         email:data.email,
        //         password:data.password
        //     }
        // })
    }
    useEffect(() => {
        if (isLogin.islogin) {
           history.push("/dashboard");
        }
        
    }, [isLogin])

    return (
        <div className="login">

            <div id="login" >
                <h1 className="text-center text-white pt-5 headcolor" > <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h1>

                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12 text-center">
                                <form id="login-form" className="form" onSubmit={handleSubmit(onSubmit)} >
                                    <h3 className="text-center text-info" ><span style={{ color: "white" }}>SIGN IN</span></h3>
                                    <div className=" txt_field form-group">

                                        <input type="text" onChange={captureData} name="email" className="form-control" placeholder="email" ref={register({
                                            required: { value: true, message: 'Email is required' },
                                            pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ }
                                        })} />
                                        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

                                    </div>
                                    <div className=" txt_field form-group">

                                        <input type="password" onChange={captureData} name="password" className="form-control" placeholder="password" ref={register(
                                            { required: true })} />
                                        {errors.password && <p style={{ color: "red" }}>password required</p>}


                                    </div>
                                    <div className="form-group">
                                        <h5><a href="#" className="pass">forgot password</a></h5>
                                        <input type="submit" className="btn btn-info btn-md" value="SIGN IN" ></input>

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

export default Login;





