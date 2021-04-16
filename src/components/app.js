import React from 'react';
import "./app.css"
import Login from "../containers/Login/Login"
import Register from '../containers/Register/Register';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Dashboard from '../containers/Dashboard/Dashboard';
import AllLeads from '../containers/Leads/AllLeads';
import TopNav from '../containers/Dashboard/topnav';
import SideNav from '../containers/Dashboard/sidenav';
import Createlead from '../containers/Leads/createlead';
import { useSelector } from "react-redux";
import Lead from '../containers/Leads/Lead';
import changePassword from '../containers/chnagepassword/changePassword';

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
            <Route path="/leads" component={AllLeads} />
            <Route path="/createlead" component={Createlead} />
            <Route path="/lead/:id" component={Lead} />
            <Route path="/cahngepassword" component={changePassword} />
            
          </div>
        </div>


        )}



      </BrowserRouter>
    </div>
  );

}
export default App;



{/* <Route path="/lead/:id" component={Lead} /> */}