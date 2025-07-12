import React, { Fragment } from 'react'
 
export default function Editclinic() {
    return (
        <Fragment>
            <div className="modal fade" style={{ marginTop: '100px' }} id="editclinic" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Clinic Info</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#" className='p-3'>
                                <div className="doctor-info ">

                                    <div className="doctor-name d-flex align-items-center gap-3 mb-3  ">
                                        <label htmlFor="doctor-name" className="form-label mb-0">Name</label>
                                        <input type="text" className="form-control w-50" id="doctor-name" />
                                    </div>
                                    <hr />

                                    <div className="doctor-email d-flex align-items-center gap-3 mb-3">
                                        <label htmlFor="doctor-email" className="form-label mb-0">Address</label>
                                        <input type="text" className="form-control w-50" id="doctor-email" />
                                    </div>
                                    <hr/>
                                    <div className="doctor-phone d-flex align-items-center gap-3 mb-3">
                                        <label htmlFor="doctor-phone" className="form-label mb-0">Responsible Doctor</label>
                                        <input type="text" className="form-control w-50" id="doctor-phone" />
                                    </div>
                                    <hr />
                                    <div className="specialization d-flex align-items-center gap-3 mb-3">
                                        <label htmlFor="specialization" className="form-label mb-0">Number of patients</label>
                                        <input type="number" className="form-control w-50" id="specialization" />

                                    </div>
                                    <hr />
                                    <label className='fw-bold mb-2'>Status</label>
                                    <div className="active-radio">
                                        <input type="radio" name="status" id="active" className="me-3" />
                                        <label htmlFor="active">Active</label><br />
                                    </div>
                                    <div className="inactive-radio">
                                        <input type="radio" name="status" id="inactive" className="me-3" />
                                        <label htmlFor="inactive">Inactive</label><br />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
