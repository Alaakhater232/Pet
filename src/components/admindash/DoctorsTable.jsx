import { Fragment, useEffect, useState } from 'react'
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import EditDoctorModal from './EditDoctorModal';


export default function DoctorsTable() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

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
    return (
        <Fragment>
            {loading ? <h3 className='text-center mt-5'><BeatLoader color='#D9A741' /></h3> : doctors.length === 0 ? <h3 className='text-center mt-5'>No Doctors found</h3> : <div className="patient-table mt-4 bg-white shadow rounded w-100">
                <table className="table">
                    <thead className="table-light py-3">
                        <tr className="">
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Phone</th>
                            <th className="px-4 py-3">Specialization</th>
                            <th className="px-4 py-3">Gender</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor) => (
                            <tr key={doctor.id}>
                                <td className="px-4 py-3">{doctor.name}</td>
                                <td className="px-4 py-3">{doctor.email}</td>
                                <td className="px-4 py-3">{doctor.phone}</td>
                                <td className="px-4 py-3">{doctor.specialization}</td>
                                <td className="px-4 py-3" ><span style={{ color: 'white', backgroundColor: doctor.gender === 'male' ? '#007BFF ' : '#E91E63 ', fontSize: '14px' }} className='px-3 py-1 rounded rounded-5 '>{doctor.gender}</span></td>
                                <td className="px-4 py-3"><span style={{ color: 'white', backgroundColor: doctor.status === 'active' ? '#28a745  ' : '#6c757d   ', fontSize: '14px' }} className='px-3 py-1 rounded rounded-5 '>{doctor.status}</span></td>
                                <td className="px-4 py-3">
                                    <button type="button" className="btn border-0 p-0 me-2" data-bs-toggle="modal" data-bs-target={`#editdoctor-${doctor.id}`}>
                                        <TbEdit size={20} />
                                    </button>
                                    <EditDoctorModal doctor={doctor} modalId={doctor.id} />
                                    <MdDelete cursor={"pointer"} size={20} className='text-danger' onClick={() => handleDeleteDoctor(doctor.id)} />
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>}

        </Fragment>
    )
}
