import React, { useEffect } from 'react';
import "./Dashboard.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import TopNav from './topnav';
import SideNav from './sidenav';
import { useSelector } from "react-redux";
import Login from '../Login/Login';
import Leads from '../Leads/Leads';



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


