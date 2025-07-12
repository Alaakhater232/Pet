import React, { Fragment, useState } from 'react'
import Statistic from '../../components/admindash/statistic'
import { FaUserDoctor } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import ClinicsTable from '../../components/admindash/ClinicsTable';
import { RiAddLine } from "react-icons/ri";
import AddClinic from '../../components/AddClinicModal';


export default function ManageClinics() {
        const [clinics, setClinics] = useState([]);

    const statistics = [
        { title: 'Total clinics', count: '100', icon: <FaClinicMedical size={40} /> },
        { title: 'Active doctors', count: '100', icon: <FaUserDoctor size={40} /> },
        { title: 'Total Clients', count: '100', icon: <FaUsers size={40} /> },
        { title: 'Total Reservations', count: '100', icon: <FaCalendarAlt size={40} /> },
    ]
    return (
        <Fragment>
            <div className='container-fluid mt-4'>
                <div className=''>
                    <h1>Clinic management</h1>
                    <p className=''>Managing all clinics and responsible doctors</p>
                </div>
                <div className="statistics mt-5 pb-5 d-flex align-items-center justify-content-center gap-3 flex-wrap">
                    {statistics.map((statistic, index) => (
                        <Statistic key={index} title={statistic.title} count={statistic.count} icon={statistic.icon} />
                    ))}
                </div>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <button className='custom-button d-flex align-items-center fw-bold' data-bs-toggle="modal" data-bs-target="#addclinic" > <RiAddLine size={20} /> Add clinic</button>
                </div>
                <AddClinic />
                <ClinicsTable clinic={clinic} />
            </div>
        </Fragment>
    )
}
