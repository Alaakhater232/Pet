import React, { Fragment, useState } from 'react'
import Address from '../Address'
import { toast } from 'react-toastify';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import specializations from '../../spcializations/spcializations.json'
export default function AddDoctorModal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('active');

    const handleAddDoctor = async () => {
        //validate form fields
        if (!name.trim() || !email.trim() || !phone.trim() || !specialization.trim() || !gender.trim()) {
            toast.error('Please fill in all the required fields', { autoClose: 3000 });
            return
        }
        try {
            await addDoc(collection(db, 'doctors'), {
                name,
                email,
                phone,
                specialization,
                gender,
                status,
                createdAt: Timestamp.now()
            });
            toast.success('Doctor added successfully', { autoClose: 3000 });
            //reset fields
            setName('');
            setEmail('');
            setPhone('');
            setSpecialization('');
            setGender('');
            setStatus('active');
            setTimeout(() => {
                document.getElementById('close-btn-modal').click();
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error("Failed to add doctor, error:" + error.message, { autoClose: 3000 });
        }
    }
    return (
        <Fragment>
            <div className="modal fade" style={{ marginTop: '70px' }} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Doctor Info</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <div className="clinic-name d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control w-75" id="clinic-name" placeholder="Enter Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Email</label>
                                    <input type="email" className="form-control w-75" id="clinic-address" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Phone</label>
                                    <input type="tel" className="form-control w-75" id="clinic-address" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="spcialization d-flex align-items-center gap-3 mb-3">
                                    <label className="form-label">Specialization</label>
                                    <select className="form-select w-50" onChange={(e) => setSpecialization(e.target.value)}>
                                        {specializations.map((spec, index) => (
                                            <option value={spec.name} key={index}>{spec.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="gender mb-2 ">
                                    <p className='fw-bold mb-2'>Choose Gander</p>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" name="gender" id="male" value={'male'} className="form-check-input" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                                        <label htmlFor="male" className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" name="gender" id="female" value={'female'} className="form-check-input" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                                        <label htmlFor="female" className="">Female</label>
                                    </div>
                                </div>
                                <div className="status ">
                                    <p className='fw-bold mb-2'>Choose Status</p>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" name="status" id="active" value={'active'} className="form-check-input" checked={status === 'active'} onChange={(e) => setStatus(e.target.value)} />
                                        <label htmlFor="active" className="form-check-label">Active</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" name="status" id="inactive" value={'inactive'} className="form-check-input" checked={status === 'inactive'} onChange={(e) => setStatus(e.target.value)} />
                                        <label htmlFor="inactive" className="">Inactive</label>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer d-flex gap-3">
                            <button type="button" className="btn btn-danger" id='close-btn-modal' data-bs-dismiss="modal" style={{ width: '100px' }}>Close</button>
                            <button type="button" className="custom-button" style={{ width: '100px' }} onClick={handleAddDoctor}>Add</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
