import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUsers } from "react-icons/fa6";
import { FaChartBar, FaClinicMedical } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { GrOverview } from "react-icons/gr";
import { IoStatsChart } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
// import logo from '../../assets/petut.png';
import { HiShoppingBag } from "react-icons/hi2";


export default function Sidebar({ isOpen }) {
    return (
        <Fragment>
            <div className={`sidebar background d-flex flex-column flex-shrink-0 p-3 position-fixed bottom-0 col-2 ${isOpen ? 'expanded' : 'collapsed'}`} style={{ top: '100px', borderRight: '1px solid #D9A741' }} >
                <ul className=" p-0 d-flex flex-column align-items-left" style={{ gap: '50px' }} >
                    <div className="top-links">
                        {/* <div className="logo">
                            <img src={logo} width={'80px'} height={'80px'} alt="logo" className='text-left' />

                        </div> */}
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
                        <li className="mb-2 p-3">
                            <NavLink
                                to="/admin-dashboard/reviews"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <MdReviews size={25} />
                                {isOpen && <span className="fw-bold">Reviews</span>}
                            </NavLink>
                        </li>
                        <li className="mb-2 p-3">
                            <NavLink
                                to="/admin-dashboard/store"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <HiShoppingBag size={25} />
                                {isOpen && <span className="fw-bold">Store</span>}
                            </NavLink>
                        </li>
                        <li className="mb-2 p-3">
                            <NavLink
                                to="/admin-dashboard/charts"
                                style={({ isActive }) => ({ color: isActive ? "#D9A741" : "black" })}
                                className="text-decoration-none d-flex align-items-center gap-2"
                            >
                                <IoStatsChart size={25} />
                                {isOpen && <span className="fw-bold">Charts</span>}
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
                                {isOpen && <span className="fw-bold">Logout</span>}
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </div>

        </Fragment>
    )
}
