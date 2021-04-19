import React, { useEffect } from 'react';
import "./Dashboard.css";

import { useSelector } from "react-redux";


function Dashboard(props) {

  const islogin = useSelector(state => state.login)
  console.log("login status", islogin.islogin)
  const leads = useSelector(appState => appState.leads);
 console.log("dashboard",leads)
  // const token=sessionStorage.getItem("token");
  // console.log("token dashboard",token)
  useEffect(() => {
    if (!islogin.islogin) {
      props.history.push("/");
    }
  })


  return (
    <div className="text-white">


      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <div>
              <h1>{leads.length}</h1>
              <p>Total Leads</p>
            </div>
            <div>
              <h1>0</h1>
              <p>Total Cold Leads</p>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="border border-success" style={{ height: '300px' }}>
              <h1>Leads by Courses</h1>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="border border-success" style={{ height: '300px' }}>
              <h1>Leads by Sources</h1>
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Dashboard


