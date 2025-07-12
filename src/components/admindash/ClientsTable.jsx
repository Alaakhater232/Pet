import React, { Fragment, useEffect, useState } from 'react'
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import EditClientModal from './EditClientModal';




export default function Clienttable() {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);


    //get clients from firestore

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "clients"));
                const clientsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setClients(clientsData);
            } catch (error) {
                toast.error("Failed to fetch clients, error:" + error.message, { autoClose: 3000 });
            } finally {
                setLoading(false);
            }
        }
        fetchClients();
    }, [])

    // delete client from firestore
    const handleDeleteClient = async (id) => {
        try {
            await deleteDoc(doc(db, 'clients', id));
            setClients(clients => clients.filter(client => client.id != id))
            toast.success('Client deleted successfully', { autoClose: 3000 });
            // window.location.reload()
        } catch (err) {
            toast.error("Failed to delete client, error:" + err.message, { autoClose: 3000 });
        }
    }

    return (
        <Fragment>
            {loading ? <h3 className='text-center mt-5'><BeatLoader color='#D9A741' /></h3> : clients.length === 0 ? <h3 className='text-center mt-5'>No clients found</h3> : <div className="patient-table mt-4 bg-white shadow rounded w-100">
                <table class="table">
                    <thead className="table-light py-3">
                        <tr className="">
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Phone</th>
                            <th className="px-4 py-3">Gender</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients?.map(client => (
                            <tr key={client.id}>
                                <td className="px-4 py-3">{client.name}</td>
                                <td className="px-4 py-3">{client.email}</td>
                                <td className="px-4 py-3">{client.phone}</td>
                                <td className="px-4 py-3" ><span style={{ color: 'white', backgroundColor: client.gender === 'male' ? '#007BFF ' : '#E91E63 ', fontSize: '14px' }} className='px-3 py-1 rounded rounded-5 '>{client.gender}</span></td>
                                {/* <td className="px-4 py-3">{client.gender}</td> */}
                                <td className="px-4 py-3">
                                    <button type="button" className="btn border-0 p-0 me-2" data-bs-toggle="modal" data-bs-target={`#editclient-${client.id}`}>
                                        <TbEdit size={20} className='' />
                                    </button>
                                    <EditClientModal client={client} clientId={client.id} />
                                    <MdDelete cursor={"pointer"} size={20} className='text-danger' onClick={() => handleDeleteClient(client.id)}  />
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>}

        </Fragment>
    )
}
