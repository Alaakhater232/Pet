import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Clinic from '../../components/doctordash/Clinic'
import { RiAddLine } from "react-icons/ri";
import AddClinic from '../../components/doctordash/AddClinic';

export default function Manageclinics() {
  const clinics =[
    {id: 1,name: "Clinic 1", Specialization: "Dermatology",address: "123 Main St, City",phone: "+1 (123) 456-7890", email: "lT8i9@example.com", status: "Active"},
    {id: 1,name: "Clinic 1", Specialization: "Dermatology",address: "123 Main St, City",phone: "+1 (123) 456-7890", email: "lT8i9@example.com", status: "Active"},
    {id: 1,name: "Clinic 1", Specialization: "Dermatology",address: "123 Main St, City",phone: "+1 (123) 456-7890", email: "lT8i9@example.com", status: "Active"},
    {id: 1,name: "Clinic 1", Specialization: "Dermatology",address: "123 Main St, City",phone: "+1 (123) 456-7890", email: "lT8i9@example.com", status: "Active"},
  ]
  return (
        <Fragment>
          <nav aria-label="breadcrumb" className='container-fluid d-flex align-items-center justify-content-between ' style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', marginTop: '20px', padding: '10px 40px', borderRadius: '8px' }} >
            <span className='fw-bold'>Clinics</span>
            <ol className="breadcrumb mb-0 py-3 text-align-center" >
              <li className="breadcrumb-item"><Link to="/" className='text-decoration-none' style={{ color: '#D9A741' }}>Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
              <li className="breadcrumb-item active" aria-current="page">Clinics</li>
            </ol>
          </nav>
          <div className="container-fluid mt-4">
            <div className="row align-items-center">
              <div className="left col-10">
                <h1 className='fw-bold fs-5'>Associated clinics</h1>
                <p>Managing and monitoring the clinics you work in</p>
              </div>
              <div className="right col-2">
                <button type="button" className="custom-button" data-bs-toggle="modal" data-bs-target="#addclinic" ><RiAddLine size={20} />New Clinic</button>
              </div>
              <AddClinic />
            </div>
          </div>
          <div className="container-fluid my-4 ">
            <div className="row gap-4 justify-content-center">
              {clinics.map((clinic) =>(
                <Clinic key={clinic.id} name={clinic.name} Specialization={clinic.Specialization} address={clinic.address} phone={clinic.phone} email={clinic.email} status={clinic.status} />
                ))}
            </div>
          </div>
        </Fragment>
  )
}
