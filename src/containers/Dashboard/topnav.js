import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNav() {
    return (
        <div>
            <div className="">
                <nav className="  navbar p-0 " style={{ backgroundColor: "#252C488C" }}>


                    <div className="ml-auto">
                        <ul className="nav  ">
                            

                            <li className=" dropdown">
                                <a className="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4e20TkPI83rAuPy1VnpUQisoc0ZA8w5TJQ&usqp=CAU" alt="..." className="h-25 w-25 rounded-circle" />
                                </a>
                                <div className="dropdown-menu" >
                                    <a className="dropdown-item" href="#" to="#">Profile</a>
                                    <NavLink className="dropdown-item" href="#" to="/cahngepassword">Chnage password</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" href="# " to="#">Logout</NavLink>
                                </div>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        </div>
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