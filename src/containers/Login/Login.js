import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import "./login.css";
import { loginAction } from "../../actions/userAction"
import { useHistory } from 'react-router';


function Login(props) {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const isLogin = useSelector(state => state.isUserLogin)


    const captureData = (event) => {
        var name = event.target.name;
        var value = event.target.value;

        setState(prestate => ({
            ...prestate, [name]: value
        }))

    }


    const onSubmit = (data) => {

        console.log(data);
        dispatch(loginAction(data)) //newuser login

        // dispatch({
        //     type:"LOGIN",
        //     payload:{
        //         email:data.email,
        //         password:data.password
        //     }
        // })
    }
    useEffect(() => {
        if (isLogin) {
            console.log("login success")

            props.history.push("/dashboard");

        }


    })

    return (
        <React.Fragment>
            <section id="cover" className="min-vh-100">
                <div id="cover-caption">
                    <div className="container">
                        <div className="row text-white">
                            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                
                                <div className="px-2">
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
            </section>
        </React.Fragment>

    )
}

export default Login;





