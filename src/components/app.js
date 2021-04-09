import React from 'react';
import "./app.css"
import Login from "../containers/Login/Login"
import Register from '../containers/Register/Register';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Dashboard from '../containers/Dashboard/Dashboard';
import Leads from '../containers/Leads/Leads';
import TopNav from '../containers/Dashboard/topnav';
import SideNav from '../containers/Dashboard/sidenav';
import Createlead from '../containers/Leads/createlead';
import { useSelector } from "react-redux";
import SpecificLead from '../containers/Leads/specificLead';

function App() {
  const islogin = useSelector(state => state.login)
  console.log("check status",islogin)


  return (

    <div>

      <BrowserRouter>
        {!islogin.islogin ? (
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
        ) : (
          
              <div className="row">
          <div className="col-2 px-0">
            <SideNav />
          </div>
          <div className="col-10 px-0">
            <TopNav />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/leads" component={Leads} />
            <Route path="/createlead" component={Createlead} />
            <Route path="/lead" component={SpecificLead} />
            
          </div>
        </div>


        )}



      </BrowserRouter>
    </div>
  );

}
export default App;