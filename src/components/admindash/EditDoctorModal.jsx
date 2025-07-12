/* eslint-disable react-hooks/rules-of-hooks */
import { doc, updateDoc } from 'firebase/firestore';
import { Fragment, useState } from 'react'
import { toast } from 'react-toastify';
import { db } from '../../firebase/firebaseConfig';
 
export default function EditDoctorModal({ doctor, modalId }) {
    if (!doctor) return null;
    const { name: defaultName, email: defaultEmail, phone: defaultPhone, specialization: defaultSpec, gender: defaultGender, status: defaultStatus } = doctor;  
    const [name, setName] = useState(defaultName);
    const [email, setEmail] = useState(defaultEmail);
    const [phone, setPhone] = useState(defaultPhone);
    const [specialization, setSpecialization] = useState(defaultSpec);
    const [gender, setGender] = useState(defaultGender);
    const [status, setStatus] = useState(defaultStatus);




    //edit doctor in firestore
    const handleSave = async () => {
        if (!name.trim() || !email.trim() || !phone.trim() || !specialization.trim() || !gender.trim() || !status.trim()) {
            toast.error('Please fill in all the required fields', { autoClose: 3000 });
            return
        }
        try{
            const docRef = doc(db, 'doctors', doctor.id);
            await updateDoc(docRef, {
                name,
                email,
                phone,
                specialization,
                gender, 
                status,
            })
            toast.success('Doctor updated successfully', { autoClose: 3000 });
            setTimeout(() => {
                document.getElementById('close-btn-edit').click();
                window.location.reload();
            }, 3000);
        }catch(error){
            toast.error("Failed to update clinic, error:" + error.message, { autoClose: 3000 });
        }
    }
    return (
        <Fragment>
            <div  className="modal fade" style={{ marginTop: '70px' }} id={`editdoctor-${modalId}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel"> Edit Doctor Info</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <div className="clinic-name d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control w-75" id="clinic-name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Email</label>
                                    <input type="email" className="form-control w-75" id="clinic-address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Phone</label>
                                    <input type="tel" className="form-control w-75" id="clinic-address" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="spcialization d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="specialization" className="form-label">Specialization</label>
                                    <input type="text" className="form-control w-75" id="specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
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
                            <button type="button" className="btn btn-danger" id='close-btn-edit' data-bs-dismiss="modal" style={{width:'100px'}}>Close</button>
                            <button type="button" className="custom-button" style={{width:'100px'}} onClick={handleSave}>Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
