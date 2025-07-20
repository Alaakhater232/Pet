import { Fragment, useState } from 'react'
import { FaUsers } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import DoctorsTable from '../../components/admindash/DoctorsTable';
import { RiAddLine } from "react-icons/ri";
import Clienttable from '../../components/admindash/ClientsTable';
import AddClientModal from '../../components/admindash/AddClientModal';
import AddDoctorModal from '../../components/admindash/AddDoctorModal';


export default function ManageUsers() {
    const [activeTab, setActiveTab] = useState('doctors');


    return (
        <Fragment>
            <div className='container-fluid mt-4'>
                <div className='mb-3'>
                    <h1>Users management</h1>
                    <p className=''>Manage all doctors and clients in the system</p>
                </div>
                <div style={{}}>
                    <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                        <button
                            onClick={() => setActiveTab('doctors')}
                            style={{
                                padding: '10px 20px',
                                border: 'none',
                                borderBottom: activeTab === 'doctors' ? '3px solid #D9A741' : 'none',
                                background: 'transparent',
                                color: activeTab === 'doctors' ? '#D9A741' : '#333',
                                fontWeight: activeTab === 'doctors' ? 'bold' : 'normal'
                            }}
                        >
                            <FaUserDoctor className='me-2' size={20} />
                            doctors
                        </button>

                        <button
                            onClick={() => setActiveTab('clients')}
                            style={{
                                padding: '10px 20px',
                                border: 'none',
                                borderBottom: activeTab === 'clients' ? '3px solid #D9A741' : 'none',
                                background: 'transparent',
                                color: activeTab === 'clients' ? '#D9A741' : '#333',
                                fontWeight: activeTab === 'clients' ? 'bold' : 'normal'
                            }}
                        >
                        <FaUsers className='me-2' size={20} />
                        clients
                        </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                        <button className='custom-button d-flex align-items-center fw-bold'  data-bs-toggle="modal" data-bs-target={`#${activeTab === 'doctors' ? 'adddoctor' : 'addclient'}`} > <RiAddLine size={20} />{activeTab === 'doctors' ? 'Add doctor' : 'Add client'}</button>
                    </div>
                    {activeTab ==='doctors' ? <AddDoctorModal /> : <AddClientModal />}
                    <div style={{ marginTop: '30px' }}>
                        {activeTab === 'doctors' && <DoctorsTable />}
                        {activeTab === 'clients' && <Clienttable />}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
