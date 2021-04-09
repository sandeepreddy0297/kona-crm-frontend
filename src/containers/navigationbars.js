import React from 'react'
import SideNav from './Dashboard/sidenav'
import TopNav from './Dashboard/topnav'

function navigationbars() {

    return (
        <div>
            <div className="row">
                <div className="col-">
                <TopNav />
                </div>
                <div className="col-10">
                <SideNav/>
                </div>

            </div>
           
           
        </div>
    )
}

export default navigationbars
