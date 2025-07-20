import { Fragment } from 'react'
import { MdManageAccounts } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { FaClinicMedical } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { TbLogout2 } from "react-icons/tb";
import './sidebar.css'
import logo from '../../../assets/petut.png'

export default function Sidebar({ isOpen }) {
    return (
        <Fragment>
            <div className={`sidebar background d-flex flex-column flex-shrink-0 p-3 position-fixed  bottom-0 col-2 ${isOpen ? 'expanded' : 'collapsed'}`} style={{ top: '100px', borderRight: '1px solid #D9A741' }} >
                <ul className=" p-0 d-flex flex-column  align-items-left " style={{gap: '150px'}}>
                    <div className="top-links">
                        <div className="logo">
                            <img src={logo} width={'80px'} height={'80px'} alt="logo" className='text-left' />

                        </div>
                        <li className="mb-2 p-3">
                            <NavLink
                                to="/doctor-dashboard/manage-clients"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <MdManageAccounts size={30} />
                                {isOpen && <span className="fw-bold">Manage Clients</span>}
                            </NavLink>
                        </li>
                        <li className="mb-2 p-3 ">
                            <NavLink
                                to="/doctor-dashboard/manage-appointments"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <GrSchedules size={25} />
                                {isOpen && <span className="fw-bold">Appointments</span>}
                            </NavLink>
                        </li>
                        <li className="mb-2 p-3">
                            <NavLink
                                to="/doctor-dashboard/manage-clinics"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <FaClinicMedical size={25} />
                                {isOpen && <span className="fw-bold">Manage Clinics</span>}
                            </NavLink>
                        </li>
                        <li className="mb-2 p-3">
                            <NavLink
                                to="/doctor-dashboard/manage-profile"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <IoPersonSharp size={25} />
                                {isOpen && <span className="fw-bold">Profile</span>}
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
                                <TbLogout2 size={25} />
                                {isOpen && <span className="fw-bold">Log out</span>}
                            </NavLink>
                        </li>
                    </div>

                </ul>
            </div>

        </Fragment>
    )
}
