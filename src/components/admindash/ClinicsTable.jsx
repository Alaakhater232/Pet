import React, { Fragment, useState } from 'react'
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import EditClinicModal from '../EditClinicModal';
import { BiSearchAlt2 } from "react-icons/bi";
import ConfirmModal from '../ConfirmModal';



export default function ClinicsTable({ clinics, onDelete }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedClinicId, setSelectedClinicId] = useState(null);

    // filter clinics by name, email, or specialization
    const filteredDoctors = clinics.filter(clinic => {
        const nameMatch = clinic.name.toLowerCase().includes(searchTerm.toLowerCase());
        const emailMatch = clinic.email.toLowerCase().includes(searchTerm.toLowerCase());
        const specializationMatch = clinic.specialization.toLowerCase().includes(searchTerm.toLowerCase());
        // const doctorMatch = clinic.responsibleDoctor.toLowerCase().includes(searchTerm.toLowerCase());
        const statusMatch = statusFilter === 'all' || clinic.status === statusFilter;
        return (nameMatch || emailMatch || specializationMatch) && statusMatch;
    })
    return (
        <Fragment>

            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="search-box w-50 position-relative">
                    <input
                        className="form-control pe-5"
                        type="text"
                        placeholder="Search by name, email, or responsible doctor"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <BiSearchAlt2
                        size={20}
                        className="position-absolute"
                        style={{ top: '50%', right: '15px', transform: 'translateY(-50%)', color: '#888' }}
                    />
                </div>
                <select className="form-select w-25" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="all" >All</option>
                    <option value="active" >active</option>
                    <option value="inactive" >inactive</option>
                </select>
            </div>
            <div className="patient-table mt-4 mb-5 bg-white shadow rounded w-100">
                <table className="table">
                    <thead className="table-light py-3">
                        <tr className="">
                            <th className="px-4 py-3">Clinic Name</th>
                            <th className="px-4 py-3">specialization</th>
                            <th className="px-4 py-3">Phone</th>
                            <th className="px-4 py-3">Address</th>
                            <th className="px-4 py-3">Responsible Doctor</th>
                            {/* <th className="px-4 py-3">Number of Clients</th> */}
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>



                        {filteredDoctors.map((clinic) => (
                            <tr key={clinic.id}>
                                <td className="px-4 py-3">{clinic.name}</td>
                                <td className="px-4 py-3">{clinic.specialization}</td>
                                <td className="px-4 py-3">{clinic.phone}</td>
                                <td className="px-4 py-3">{clinic.address.governorate}-{clinic.address.city}</td>
                                <td className="px-4 py-3">{clinic.responsible_doctor}</td>
                                {/* <td className="px-4 py-3">{clinic.number_of_clients}</td> */}
                                <td className="px-4 py-3"><span style={{ color: 'white', backgroundColor: clinic.status === 'active' ? '#28a745  ' : '#6c757d   ', fontSize: '14px' }} className='px-3 py-1 rounded rounded-5 '>{clinic.status}</span></td>
                                <td className="px-4 py-3">
                                    <button type="button" className="btn border-0 p-0 me-2" data-bs-toggle="modal" data-bs-target={`#editclinic-${clinic.id}`}>
                                        <TbEdit size={20} className='' />
                                    </button>
                                    <EditClinicModal clinic={clinic} modalId={clinic.id} />
                                    <MdDelete cursor={"pointer"} size={20} className='text-danger' onClick={() => {
                                        setShowConfirm(true);
                                        setSelectedClinicId(clinic.id);
                                    }} />
                                </td>
                                {showConfirm && (
                                    <ConfirmModal onDelete={onDelete} setShowConfirm={setShowConfirm} selectedId={selectedClinicId} whatDelete={"clinic"} />
                                )}
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
