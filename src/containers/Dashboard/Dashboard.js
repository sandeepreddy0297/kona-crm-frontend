import React, { useEffect } from 'react';
import "./Dashboard.css";
import {getallLeads} from "../../actions/leadsAction"
import { useDispatch,useSelector } from "react-redux";



function Dashboard(props) {
const dispatch = useDispatch()
  const islogin = useSelector(state => state.isUserLogin)
  console.log("login status", islogin)
  const leads = useSelector(appState => appState.leads);
 console.log("dashboard",leads)

  useEffect(() => {
    if (!islogin) {
      props.history.push("/login");
    }else {
      let token = sessionStorage.getItem("token")
      const header = {
          headers: { 'Authorization': `Bearer ${token}` }
      }
      dispatch(getallLeads(header));
  }
  },[])


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


