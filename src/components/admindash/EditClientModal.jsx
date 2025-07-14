/* eslint-disable react-hooks/rules-of-hooks */
import { doc, updateDoc } from 'firebase/firestore';
import { Fragment, useState } from 'react'
import { db } from '../../firebase/firebaseConfig';
import { toast } from 'react-toastify';

export default function EditClientModal({ client, clientId }) {
    if (!client) return null;
    const { name: clientName, email: clientEmail, phone: clientPhone, gender: clientGender } = client;
    const [name, setName] = useState(clientName)
    const [email, setEmail] = useState(clientEmail)
    const [phone, setPhone] = useState(clientPhone)
    const [gender, setGender] = useState(clientGender)



    //edit client in firestore
    const handleSave = async () => {
        if (!name.trim() || !email.trim() || !phone.trim() || !gender) {
            toast.error('Please fill in all the required fields', { autoClose: 3000 });
            return
        }
        try {
            const docRef = doc(db, 'clients', clientId);
            await updateDoc(docRef, {
                name,
                email,
                phone,
                gender
            })
            toast.success('Client updated successfully', { autoClose: 3000 });
            setTimeout(() => {
                document.getElementById(`close-btn-edit-${clientId}`).click();
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error("Failed to update client, error:" + error.message, { autoClose: 3000 });
        }
    }
    return (
        <Fragment>
            <div className="modal fade" style={{ marginTop: '100px' }} id={`editclient-${clientId}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Client Info</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-1">
                            <form action="#" className='p-3 pb-0'>
                                <div className="doctor-info ">
                                    <div className="doctor-name d-flex align-items-center gap-3 mb-3  ">
                                        <label htmlFor="doctor-name" className="form-label mb-0">Name</label>
                                        <input type="text" className="form-control w-50" id="doctor-name" placeholder='Enter Client Name' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="doctor-email d-flex align-items-center gap-3 mb-3">
                                        <label htmlFor="doctor-email" className="form-label mb-0">Email</label>
                                        <input type="email" className="form-control w-50" id="doctor-email" placeholder='Enter Client Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="doctor-phone d-flex align-items-center gap-3 mb-3">
                                        <label htmlFor="doctor-phone" className="form-label mb-0">Phone</label>
                                        <input type="number" className="form-control w-50" id="doctor-phone" placeholder='Enter Client Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
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
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex gap-3">
                            <button type="button" className="btn btn-danger" id={`close-btn-edit-${clientId}`} data-bs-dismiss="modal" style={{ width: '100px' }} >Close</button>
                            <button type="button" className="custom-button" style={{ width: '100px' }} onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
