import { Fragment, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { toast } from 'react-toastify';
import logo from '../../assets/petut.png';
export default function AddClientModal() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('')

    const handleAddClient = async () => {
        try {
            if (!fullName.trim() || !email.trim() || !phone.trim() || !gender) {
                toast.error('Please fill in all the required fields', { autoClose: 3000 });
                return
            }
            await addDoc(collection(db, 'clients'), {
                fullName,
                email,
                phone,
                gender
            });
            //validate form fields
            toast.success('Client added successfully', { autoClose: 3000 });
            setFullName('');
            setEmail('');
            setPhone('');
            setTimeout(() => {
                document.getElementById('close-btn-modal').click();
                window.location.reload();
            }, 3000)
        } catch (error) {
            toast.error("Failed to add client, error:" + error.message, { autoClose: 3000 });
        }
    }

    return (
        <Fragment>
            <div className="modal fade" style={{ marginTop: '100px' }} id="addclient" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header d-flex align-items-center justify-content-between">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Client Info</h1>
                            <img src={logo} width={'90px'} height={'90px'} alt="" />
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <div className="clinic-name d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-name" className="form-label">Name</label>
                                    <input type="text" className="form-control w-75" id="clinic-name" placeholder="Enter Client Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                </div>
                                <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Email</label>
                                    <input type="email" className="form-control w-75" id="clinic-address" placeholder="Enter Client Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Phone</label>
                                    <input type="tel" className="form-control w-75" id="clinic-address" placeholder="Enter Client Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
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
                            </form>
                        </div>
                        <div className="modal-footer d-flex gap-3">
                            <button type="button" className="btn btn-danger" id='close-btn-modal' data-bs-dismiss="modal" style={{ width: '100px' }}>Close</button>
                            <button type="button" className="custom-button" style={{ width: '100px' }} onClick={handleAddClient}>Add</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
