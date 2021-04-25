import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNav() {
    return (
        <React.Fragment>

            <nav className="navbar navbar-expand-sm " style={{ backgroundColor: '#252C488C' }}>
                <form className="form-inline" >
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn" type="submit">Search</button>
                </form>
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Link 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 3</a>
                    </li> */}

                    <li className=" dropdown px-5">
                        <a className="nav-link " href="#" id="navbardrop" data-toggle="dropdown">
                            <img className=" rounded-circle " style={{ height: '50' + 'px', width: '50' + 'px' }}  src="https://lh3.googleusercontent.com/proxy/cyMOxbJJwKqjl8e1j6EotAuQSEp5L4zhXZE0rFcow9IU2w-kLodAQIZYctVXjAbgK_seXF89ysCcelPpyq1oWzLsLju5x-vE84hnoOtUb5TS07MwBfvF" alt="..." />
                        </a>
                        <div className="dropdown-menu " >
                            <NavLink className="dropdown-item" style={{backgroundColor:"white",color:"black"}} href="#" to="#">Profile</NavLink>
                            <NavLink className="dropdown-item" style={{backgroundColor:"white",color:"black"}} href="#" to="/changepassword">Change password</NavLink>
                            <div className="dropdown-divider"></div>
                            <NavLink className="dropdown-item" style={{backgroundColor:"white",color:"black"}} href="#" to="#">Logout</NavLink>
                        </div>
                    </li>
                </ul>
            </nav>
        </React.Fragment>

    )
}

export default TopNav


{/* <div className="dropdown-menu">
<a className="dropdown-item" href="#">Action</a>
<a className="dropdown-item" href="#">Another action</a>
<a className="dropdown-item" href="#">Something else here</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">Separated link</a>
</div> */}




// <div>
//             <div className="">
//                 <nav className="  navbar p-0 " style={{ backgroundColor: "#252C488C" }}>


//                     <div className="ml-auto">
//                         <ul className="nav  ">


//                             <li className=" dropdown">
//                                 <a className="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
//                                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4e20TkPI83rAuPy1VnpUQisoc0ZA8w5TJQ&usqp=CAU" alt="..." className="h-20 w-20 rounded-circle" />
//                                 </a>
//                                 <div className="dropdown-menu" >
//                                     <a className="dropdown-item" href="#" to="#">Profile</a>
//                                     <NavLink className="dropdown-item" href="#" to="/cahngepassword">Chnage password</NavLink>
//                                     <div className="dropdown-divider"></div>
//                                     <NavLink className="dropdown-item" href="# " to="#">Logout</NavLink>
//                                 </div>
//                             </li>

//                         </ul>

//                     </div>
//                 </nav>
//             </div>
//         </div>

