import React, { Fragment } from 'react'
import ReservationTable from '../../components/admindash/ReservationTable'
// import { RiAddLine } from "react-icons/ri";
// import AddReservation from '../../components/admindash/AddReservation';

export default function Reservations() {
    return (
        <Fragment>
            <div className="container-fluid mt-4">
                <div className=''>
                    <h1>Reservations schedule</h1>
                    <p className=''>Managing all clinics and responsible doctors</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    {/* <button className='custom-button d-flex align-items-center fw-bold' data-bs-toggle="modal" data-bs-target="#addreservation" > <RiAddLine size={20} /> Add reservation</button> */}
                </div>
                {/* <AddReservation /> */}
                <ReservationTable />
            </div>
        </Fragment>
    )
}
