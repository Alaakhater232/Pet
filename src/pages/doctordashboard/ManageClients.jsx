import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Manageclients() {
  return (
    <Fragment>
      <nav aria-label="breadcrumb" className='container-fluid d-flex align-items-center justify-content-between ' style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', marginTop: '20px', padding: '10px 40px', borderRadius: '8px' }} >
        <span className='fw-bold'>Clients</span>
        <ol className="breadcrumb mb-0 py-3 text-align-center" >
          <li className="breadcrumb-item"><Link to="/" className='text-decoration-none' style={{ color: '#D9A741' }}>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          <li className="breadcrumb-item active" aria-current="page">Clients</li>
        </ol>
      </nav>
      <div className="patient-table mt-4 bg-white shadow rounded w-100">
        <table class="table">
          <thead className="table-light py-3">
            <tr className="">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Clinic</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">
                <select class="form-select w-50" aria-label="Default select example">
                  <option value="1" selected>completed</option>
                  <option value="2">booked</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3">--</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">
                <select class="form-select w-50" aria-label="Default select example">
                  <option value="1" selected>completed</option>
                  <option value="2">booked</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}
