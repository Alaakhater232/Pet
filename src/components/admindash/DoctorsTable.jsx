import { Fragment, useEffect, useState } from 'react'
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import EditDoctorModal from './EditDoctorModal';

import { BiSearchAlt2 } from "react-icons/bi";
import { MdStarRate } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import ConfirmModal from '../ConfirmModal';
import ViewDoctorModal from './ViewDoctorModal';


export default function DoctorsTable() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [genderFilter, setGenderFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');

    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);

    // get doctors from firestore
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "doctors"));
                const doctorsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setDoctors(doctorsData);
            } catch (error) {
                toast.error("Failed to fetch doctors, error:" + error.message, { autoClose: 3000 });
            } finally {
                setLoading(false);
            }
        };
        fetchDoctors();


    }, []);

    // delete doctor from firestore
    const handleDeleteDoctor = async (id) => {
        try {
            await deleteDoc(doc(db, 'doctors', id));
            setDoctors(doctors => doctors.filter(doctor => doctor.id != id))
            toast.success('Doctor deleted successfully', { autoClose: 3000 });
            // window.location.reload()
        } catch (err) {
            toast.error("Failed to delete doctor, error:" + err.message, { autoClose: 3000 });
        }
    }
    // filter doctors by name, email, or specialization
    const filteredDoctors = doctors.filter(doctor => {
        const nameMatch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
        const emailMatch = doctor.email.toLowerCase().includes(searchTerm.toLowerCase());
        const specializationMatch = doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
        const genderMatch = genderFilter === 'all' || doctor.gender === genderFilter;
        const statusMatch = statusFilter === 'all' || doctor.status === statusFilter;
        return (nameMatch || emailMatch || specializationMatch) && statusMatch && genderMatch;
    })
    return (
        <Fragment>


            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="search-box position-relative" style={{ width: '40%' }}>
                    <input
                        className="form-control pe-5"
                        type="text"
                        placeholder="Search by name, email, or specialization"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <BiSearchAlt2
                        size={20}
                        className="position-absolute"
                        style={{ top: '50%', right: '15px', transform: 'translateY(-50%)', color: '#888' }}
                    />
                </div>
                <select className="form-select w-25" value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} >
                    <option value="all" >All</option>
                    <option value="male" >male</option>
                    <option value="female" >female</option>
                </select>
                <select className="form-select w-25" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="all" >All</option>
                    <option value="active" >active</option>
                    <option value="inactive" >inactive</option>
                </select>
            </div>
            {loading ? <h3 className='text-center mt-5'><BeatLoader color='#D9A741' /></h3> : doctors?.length === 0 ? <h3 className='text-center mt-5'>No Doctors found</h3> : filteredDoctors.length === 0 ? (
                <h3 className='text-center mt-5 text-muted'>No matching doctors found</h3>
            ) : (
                <>

                    <div className="patient-table mt-4 bg-white shadow rounded w-100">
                        <table className="table">
                            <thead className="table-light py-3">
                                <tr className="">
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Specialization</th>
                                    <th className="px-4 py-3">Rating</th>
                                    <th className="px-4 py-3">Gender</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredDoctors.map((doctor) => (
                                    <tr key={doctor.id}>
                                        <td className="px-4 py-3">{doctor.name}</td>
                                        <td className="px-4 py-3">{doctor.specialization}</td>
                                        <td className="px-4 py-3"><MdStarRate color='#D9A741' /></td>
                                        <td className="px-4 py-3" ><span style={{ color: 'white', backgroundColor: doctor.gender === 'male' ? '#007BFF ' : '#E91E63 ', fontSize: '14px' }} className='px-3 py-1 rounded rounded-5 '>{doctor.gender}</span></td>
                                        <td className="px-4 py-3"><span style={{ color: 'white', backgroundColor: doctor.status === 'active' ? '#28a745  ' : '#6c757d   ', fontSize: '14px' }} className='px-3 py-1 rounded rounded-5 '>{doctor.status}</span></td>
                                        <td className="px-4 py-3 d-flex align-items-center gap-2 ">

                                            <button type="button" className="btn border-0 p-0" data-bs-toggle="modal" data-bs-target={`#viewdoctor-${doctor.id}`}>
                                                <FaEye cursor={"pointer"} />
                                            </button>
                                            <ViewDoctorModal doctor={doctor} modalId={doctor.id} />

                                            <button type="button" className="btn border-0 p-0" data-bs-toggle="modal" data-bs-target={`#editdoctor-${doctor.id}`}>
                                                <TbEdit className='mb-1' />
                                            </button>
                                            <EditDoctorModal doctor={doctor} modalId={doctor.id} />
                                            <MdDelete cursor={"pointer"} size={20} className='text-danger' data-bs-toggle="modal" data-bs-target="#confirmModal"
                                                onClick={() => {
                                                    setShowConfirm(true);
                                                    setSelectedDoctorId(doctor.id);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                        {showConfirm && (<ConfirmModal onDelete={() => handleDeleteDoctor(selectedDoctorId)} setShowConfirm={setShowConfirm} selectedId={selectedDoctorId} whatDelete="doctor" />)}
                    </div>
                </>
            )


            }

        </Fragment>
    )
}
