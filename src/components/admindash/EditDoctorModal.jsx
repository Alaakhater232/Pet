/* eslint-disable react-hooks/rules-of-hooks */
import { doc, updateDoc } from 'firebase/firestore';
import { Fragment, useState } from 'react'
import { toast } from 'react-toastify';
import { db } from '../../firebase/firebaseConfig';
import logo from '../../assets/petut.png';

import { BeatLoader } from 'react-spinners';

export default function EditDoctorModal({ doctor, modalId }) {
    if (!doctor) return null;
    const { fullName: defaultName, email: defaultEmail, phone: defaultPhone, gender: defaultGender, status: defaultStatus } = doctor;
    const [fullName, setFullName] = useState(defaultName);
    const [email, setEmail] = useState(defaultEmail);
    const [phone, setPhone] = useState(defaultPhone);
    const [gender, setGender] = useState(defaultGender);
    const [status, setStatus] = useState(defaultStatus);
    const [loading, setLoading] = useState(false);


    const [isEditable, setIsEditable] = useState(false);

    const resetFields = () => {
        setFullName(defaultName);
        setEmail(defaultEmail);
        setPhone(defaultPhone);
        setGender(defaultGender);
        setStatus(defaultStatus);
        setIsEditable(false);
    }

    //edit doctor in firestore 
    const handleSave = async () => {
        if (!fullName.trim() || !email.trim() || !phone.trim() || !gender.trim() || !status.trim()) {
            toast.error('Please fill in all the required fields', { autoClose: 3000 });
            return
        }
        setLoading(true);
        try {
            const docRef = doc(db, 'users', modalId);
            await updateDoc(docRef, {
                fullName,
                email,
                phone,
                gender,
                status,
            })
            setIsEditable(false);
            toast.success('Doctor updated successfully', { autoClose: 3000 });
            setTimeout(() => {
                document.getElementById('close-btn-edit').click();
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error("Failed to update clinic, error:" + error.message, { autoClose: 3000 });
        }finally{
            setLoading(false);
        }
    }
    return (
        <Fragment>
            <div className="modal fade" style={{ marginTop: '70px' }} id={`editdoctor-${modalId}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header d-flex align-items-center justify-content-between py-0 pe-0">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel"> Edit Doctor Info</h1>
                            <img src={logo} alt="logo" width={'90px'} height={'90px'} />
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <div className="clinic-name d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control w-75" id="clinic-name" placeholder="Enter Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={!isEditable} />
                                </div>
                                <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Email</label>
                                    <input type="email" className="form-control w-75" id="clinic-address" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditable} />
                                </div>
                                <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Phone</label>
                                    <input type="tel" className="form-control w-75" id="clinic-address" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={!isEditable} />
                                </div>
                                <div className="gender mb-2 ">
                                    <p className='fw-bold mb-2'>Choose Gander</p>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" name="gender" id="male" value={'male'} className="form-check-input" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} disabled={!isEditable} />
                                        <label htmlFor="male" className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" name="gender" id="female" value={'female'} className="form-check-input" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} disabled={!isEditable} />
                                        <label htmlFor="female" className="">Female</label>
                                    </div>
                                </div>
                                <div className="status ">
                                    <p className='fw-bold mb-2'>Choose Status</p>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" name="status" id="active" value={'active'} className="form-check-input" checked={status === 'active'} onChange={(e) => setStatus(e.target.value)} disabled={!isEditable} />
                                        <label htmlFor="active" className="form-check-label">Active</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" name="status" id="inactive" value={'inactive'} className="form-check-input" checked={status === 'inactive'} onChange={(e) => setStatus(e.target.value)} disabled={!isEditable} />
                                        <label htmlFor="inactive" className="">Inactive</label>
                                    </div>
                                </div>

                            </form>
                        </div>


                        <div className="modal-footer">

                            {isEditable ? (
                                <div className="d-flex gap-3 w-100 justify-content-end">
                                    <button type="button" className="btn text-white bg-danger w-25 " onClick={() => {

                                        resetFields();
                                        setIsEditable(false);
                                    }
                                    } >Cancel</button>
                                    <button type="button" className="custom-button w-25 d-flex align-items-center justify-content-center" onClick={handleSave} disabled={!isEditable || loading}>{loading ? <BeatLoader size={10} color="#fff" /> : "Edit"} </button>
                                </div>
                            ) : (
                                <>
                                    <button type="button" className="custom-button w-25 text-white bg-danger" id="close-btn-edit" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                    <button type="button" className="custom-button w-25" onClick={() => setIsEditable(true)}>Edit Doctor</button>
                                </>

                            )
                            }
                        </div>


                    </div>
                </div>
            </div>
        </Fragment>
    )
}
