import React, { useEffect } from 'react';
import "./Dashboard.css";

import { useSelector } from "react-redux";


function Dashboard(props) {

  const islogin = useSelector(state => state.login)
  console.log("login status", islogin.islogin)

  // const token=sessionStorage.getItem("token");
  // console.log("token dashboard",token)
  useEffect(() => {
    if (!islogin.islogin) {
      props.history.push("/");
    }
  })


  return (
   <div className="text-white">
     dashboard
   </div>
  )
}

export default Dashboard


