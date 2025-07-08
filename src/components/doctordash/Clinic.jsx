import React, { Fragment } from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { TbEdit } from "react-icons/tb";
import AppointmentsModal from './AppointmentsModal';
import Editclinicmodal from '../EditClinicModal';


export default function Clinic({name, Specialization, address, phone, email, status }) {
    return (
        <Fragment>
            <div className="clinic p-4 col-5" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }} >
                <div className="clinic-header d-flex align-items-center justify-content-between">
                    <div className="left d-flex align-items-center gap-2">
                        <FaUserDoctor size={30} className='' />
                        <div className="title-clinic">
                            <h1 className='fw-bold fs-5 mb-0'>{name}</h1>
                            <p className='mb-0'>{Specialization}</p>
                        </div>
                    </div>
                    <div className="right">
                        <span style={{ backgroundColor: 'green', color: '#fff', fontSize: '14px', padding: '5px 10px', borderRadius: '4px' }}>{status}</span>
                    </div>
                </div>
                <div className="clinic-body mt-3">
                    <div className="address d-flex align-items-center gap-2 mb-3">
                        <ImLocation2 />
                        <p className='mb-0'>{address}</p>
                    </div>
                    <div className="phone d-flex align-items-center gap-2 mb-3">
                        <FaMobileAlt />
                        <p className='mb-0'>{phone}</p>
                    </div>
                    <div className="email d-flex align-items-center gap-2 mb-3">
                        <MdOutlineMail />
                        <p className='mb-0'>{email}</p>
                    </div>

                </div>
                <hr />
                <div className="options d-flex align-items-center justify-content-between">
                    <div className="option d-flex align-items-center justify-content-between gap-1">
                        <IoTimer />
                        <button type="button" className="btn border-0 p-0" data-bs-toggle="modal" data-bs-target="#appointments">Appointments</button>
                        <AppointmentsModal />
                    </div>
                    <div className="option d-flex align-items-center justify-content-between gap-1">
                        <HiMiniUserGroup />
                        <button type="button" className="btn border-0 p-0">patients</button>

                    </div>
                    <div className="option d-flex align-items-center justify-content-between gap-1">
                        <TbEdit />
                        <button type="button" className="btn border-0 p-0" data-bs-toggle="modal" data-bs-target="#editclinic">Edit data</button>
                        <Editclinicmodal />
                    </div>

                </div>
            </div>
        </Fragment>
    )
}


