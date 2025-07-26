/* eslint-disable react-hooks/rules-of-hooks */
import { doc, updateDoc } from 'firebase/firestore';
import { Fragment, useState } from 'react'
import { db } from '../../firebase/firebaseConfig';
import { toast } from 'react-toastify';

import { BeatLoader } from 'react-spinners';
import logo from '../../assets/petut.png';
export default function EditClientModal({ client, modalId }) {
    if (!client) return null;
    const { fullName: defaultName, email:defaultEmail, phone:defaultPhone, gender:defaultGender }  = client;
    const [fullName, setFullName] = useState(defaultName)
    const [email, setEmail] = useState(defaultEmail)
    const [phone, setPhone] = useState(defaultPhone)
    const [gender, setGender] = useState(defaultGender)

    const [notEditable, setNotEditable] = useState(true);
    const [loading, setLoading] = useState(false);

    const resetFields = () => {
        setFullName(defaultName);
        setEmail(defaultEmail);
        setPhone(defaultPhone);
        setGender(defaultGender);
        
    }

    //edit client in firestore
    const handleSave = async () => {
        if (!fullName.trim() || !email.trim() || !phone.trim() || !gender) {
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
                gender
            })
            setNotEditable(true);
            toast.success('Client updated successfully', { autoClose: 3000 });
            setTimeout(() => {
                document.getElementById(`close-btn-edit-${modalId}`).click();
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error("Failed to update client, error:" + error.message, { autoClose: 3000 });
        }finally{
            setLoading(false);
        }
    }
    return (
        <Fragment>
            <div className="modal fade" style={{ marginTop: '100px' }} id={`editclient-${modalId}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header d-flex align-items-center justify-content-between py-0 pe-0">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Client Info</h1>
                            <img src={logo} width={'90px'} height={'90px'} alt="" />
                        </div>
                        <div className="modal-body p-1">
                            <form action="#" className='p-3 pb-0'>
                                <div className="doctor-info ">
                                    <div className="client-name d-flex align-items-center gap-3 mb-3  ">
                                        <label htmlFor="client-name" className="form-label mb-0">Full Name</label>
                                        <input type="text" className="form-control w-50" id="client-name" placeholder='Enter Client Name' value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={notEditable} />
                                    </div>
                                    <div className="client-email d-flex align-items-center gap-3 mb-3">
                                        <label htmlFor="client-email" className="form-label mb-0">Email</label>
                                        <input type="email" className="form-control w-50" id="client-email" placeholder='Enter Client Email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={notEditable} />
                                    </div>
                                    <div className="client-phone d-flex align-items-center gap-3 mb-3">
                                        <label htmlFor="client-phone" className="form-label mb-0">Phone</label>
                                        <input type="number" className="form-control w-50" id="client-phone" placeholder='Enter Client Phone' value={phone} onChange={(e) => setPhone(e.target.value)} disabled={notEditable} />
                                    </div>
                                    <div className="gender mb-2 ">
                                        <p className='fw-bold mb-2'>Choose Gander</p>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="gender" id="male" value={'male'} className="form-check-input" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} disabled={notEditable} />
                                            <label htmlFor="male" className="form-check-label">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="gender" id="female" value={'female'} className="form-check-input" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} disabled={notEditable} />
                                            <label htmlFor="female" className="">Female</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">

                            {!notEditable ? (
                                <div className="d-flex gap-3 w-100 justify-content-end">
                                    <button type="button" className="btn text-white bg-danger w-25 " onClick={() => {

                                        resetFields();
                                        setNotEditable(true);
                                    }
                                    } >Cancel</button>
                                    <button type="button" className="custom-button w-25 d-flex align-items-center justify-content-center" onClick={handleSave} disabled={notEditable || loading}>{loading ? <BeatLoader size={10} color="#fff" /> : "Edit"} </button>
                                </div>
                            ) : (
                                <>
                                    <button type="button" className="custom-button w-25 text-white bg-danger" data-bs-dismiss="modal" aria-label="Close" id="close-btn-edit">Close</button>
                                    <button type="button" className="custom-button w-25" onClick={() => setNotEditable(false)}>Edit Doctor</button>
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
