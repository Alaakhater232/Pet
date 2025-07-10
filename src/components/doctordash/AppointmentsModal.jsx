import React, { Fragment, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { db } from '../../firebase/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function AppointmentsModal({ clinic }) {
    const { id, workingHours: defaultHours } = clinic;
    const [day, setDay] = useState('');
    const [openTime, setOpenTime] = useState('');
    const [closeTime, setCloseTime] = useState('');
    const [workingHours, setWorkingHours] = useState(defaultHours ||[]);

    const handleAddDay = () => {
        if (day && openTime && closeTime) {
            const exists = workingHours.some(item => item.day === day);
            if (!exists) {
                setWorkingHours([...workingHours, { day, openTime, closeTime }]);
                setDay('');
                setOpenTime('');
                setCloseTime('');
            }
        }
    };

    const handleDeleteDay = (dayDelated) => {
        setWorkingHours(workingHours.filter(item => item.day !== dayDelated));
    };

    //edit clinic 
    const handleSave = async () => {
        try {
            const clinicRef = doc(db, 'clinics', clinic.id);
            await updateDoc(clinicRef, {
                workingHours
            })
            toast.success('Clinic updated successfully');
            document.getElementById('close-btn-edit').click();

        } catch (error) {
            toast.error("Failed to update clinic, error:" + error.message);
        }
    };
    return (
        <Fragment>
            <div className="modal fade" id="appointments" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{ marginTop: '100px' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Clinic Appointments</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                {/* Working Hours */}
                                <div className="appointment mb-3">
                                    <p className='fw-bold mb-2'>Working Hours</p>
                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                        <select className="form-select w-auto" value={day} onChange={(e) => setDay(e.target.value)}>
                                            <option value="">Select Day</option>
                                            <option value="Saturday">Saturday</option>
                                            <option value="Sunday">Sunday</option>
                                            <option value="Monday">Monday</option>
                                            <option value="Tuesday">Tuesday</option>
                                            <option value="Wednesday">Wednesday</option>
                                            <option value="Thursday">Thursday</option>
                                            <option value="Friday">Friday</option>
                                        </select>
                                        <span>from</span>
                                        <input type="time" className="form-control w-auto" value={openTime} onChange={(e) => setOpenTime(e.target.value)} />
                                        <span>to</span>
                                        <input type="time" className="form-control w-auto" value={closeTime} onChange={(e) => setCloseTime(e.target.value)} />
                                        <button type="button" className="btn btn-success ms-2" onClick={handleAddDay}>Add</button>
                                    </div>

                                    {workingHours.length > 0 && (
                                        <ul className="mt-3  list-group w-75">
                                            {workingHours.map((item, index) => (
                                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center mb-2 border rounded px-3 py-2">
                                                    <span>{item.day}: {item.openTime} - {item.closeTime}</span>
                                                    <button className="btn border-0" onClick={() => handleDeleteDay(item.day)}>
                                                        <MdDelete size={25} className='text-danger' />
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer d-flex justify-content-end gap-2">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" style={{ width: '100px' }}>Close</button>
                            <button type="button" className="custom-button" style={{ width: '100px' }} onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
