import React, { Fragment } from 'react'
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import EditDoctor from './EditDoctor';


export default function DoctorsTable() {
    return (
        <Fragment>
            <div className="patient-table mt-4 bg-white shadow rounded w-100">
                <table className="table">
                    <thead className="table-light py-3">
                        <tr className="">
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Email</th>
                            <th className="px-4 py-3">Phone</th>
                            <th className="px-4 py-3">Specialization</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Action</th>
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
                                <button type="button" className="btn border-0 p-0 me-2" data-bs-toggle="modal" data-bs-target="#editdoctor">
                                    <TbEdit size={20} className='' />
                                </button>
                                <EditDoctor />
                                <MdDelete cursor={"pointer"} size={20} className='text-danger' />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
