import React, { Fragment } from 'react'
import Address from '../Address'

export default function EditClient() {
    return (
        <Fragment>
            <div className="modal fade" style={{ marginTop: '100px' }} id="editclient" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Client Info</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" className='p-3 pb-0'>
                                <div className="doctor-info ">

                                    <div className="doctor-name d-flex align-items-center gap-3 mb-3  ">
                                        <label htmlFor="doctor-name" className="form-label mb-0">Name</label>
                                        <input type="text" className="form-control w-50" id="doctor-name" />
                                    </div>
                                    <div className="doctor-email d-flex align-items-center gap-3 mb-3">
                                        <label htmlFor="doctor-email" className="form-label mb-0">Email</label>
                                        <input type="email" className="form-control w-50" id="doctor-email" />
                                    </div>
                                    <div className="doctor-phone d-flex align-items-center gap-3 mb-3">
                                        <label htmlFor="doctor-phone" className="form-label mb-0">Phone</label>
                                        <input type="number" className="form-control w-50" id="doctor-phone" />
                                    </div>
                                    <Address />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex gap-3">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" style={{width:'100px'}}>Close</button>
                            <button type="button" className="custom-button" style={{width:'100px'}}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
