import React from 'react'
import { NavLink } from 'react-router-dom'
import "./sidenav.css"
function SideNav() {
    return (
        
                <div className="sidenav px-3 pt-10 pl-2">
                     <h4 className="text-center text-white  headcolor"> <span style={{ color: "#FFFFFF" }}>Kona</span><span style={{ color: "#E9204F" }}>digital.ai</span></h4>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="#">Settings</NavLink>
                    <NavLink to="#">Reports</NavLink>
                    <NavLink to="/leads">Leads</NavLink>
                </div>
          
    )
}

export default SideNav
