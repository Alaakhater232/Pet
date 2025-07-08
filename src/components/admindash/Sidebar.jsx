import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUsers } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
 import { GrOverview } from "react-icons/gr";

export default function Sidebar( { isOpen }) {
    return (
        <Fragment>
            <div className={`sidebar background d-flex flex-column flex-shrink-0 p-3 position-fixed bottom-0 col-2 ${isOpen ? 'expanded' : 'collapsed'}`} style={{ top: '100px', borderRight: '1px solid #D9A741'}} >
                <ul className="mt-3 p-0 d-flex flex-column align-items-left" style={{ gap: '250px' }}>
                    <div className="top-links">
                        <li className="mb-2 p-3">
                            <NavLink
                                to="/admin-dashboard/overview"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <GrOverview size={25} />

                                {isOpen && <span className="fw-bold">Overview</span>}
                            </NavLink>
                        </li>
                        <li className="mb-2 p-3">
                            <NavLink
                                to="/admin-dashboard/manage-users"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <FaUsers size={25} />

                                {isOpen && <span className="fw-bold">Manage Users</span>}
                            </NavLink>
                        </li>
                        <li className="mb-2 p-3">
                            <NavLink
                                to="/admin-dashboard/manage-clinics"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <FaClinicMedical size={25} />
                                {isOpen && <span className="fw-bold">Manage Clinics</span>}
                            </NavLink>
                        </li>
                        <li className="mb-2 p-3">
                            <NavLink
                                to="/admin-dashboard/manage-reservations"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <FaCalendarAlt size={25} />
                                {isOpen && <span className="fw-bold"> Reservations</span>}
                            </NavLink>
                        </li>
                    </div>
                    <div className="bottom-link">
                        <li className="mb-2 p-3">
                            <NavLink
                                to="/login"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <TbLogout2 size={25}/>
                                {isOpen && <span className="fw-bold">Logout</span>}
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </div>

        </Fragment>
    )
}
